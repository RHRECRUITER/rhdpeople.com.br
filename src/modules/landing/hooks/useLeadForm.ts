import { zodResolver } from '@hookform/resolvers/zod';
import { isAxiosError } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateCaptcha, verifyCaptcha } from '../api/captcha.api';
import { submitLeadCapture } from '../api/lead.api';
import { type LeadFormData, type LeadPayload, leadSchema } from '../types/lead.types';

const DEFAULT_VALUES: LeadFormData = {
  name: '',
  company_name: '',
  corporate_email: '',
  phone: '',
  employee_range: '',
  objective: {
    vacation: false,
    time_tracking: false,
    payroll: false,
    documents: false,
  },
  website: '',
};

const FORM_FIELDS = new Set<keyof LeadFormData>([
  'name',
  'company_name',
  'corporate_email',
  'phone',
  'employee_range',
  'objective',
  'website',
]);

export function useLeadForm() {
  const formStartedAt = useRef(0);
  const successTitleRef = useRef<HTMLHeadingElement>(null);
  const captchaInputRef = useRef<HTMLInputElement>(null);
  const validationToken = useRef<string | null>(null);
  const [captchaKey, setCaptchaKey] = useState<string | null>(null);
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);
  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [isCaptchaLoading, setIsCaptchaLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<LeadFormData>({
    defaultValues: DEFAULT_VALUES,
    mode: 'onTouched',
    resolver: zodResolver(leadSchema),
  });

  const refreshCaptcha = useCallback(async () => {
    setIsCaptchaLoading(true);
    setCaptchaError(null);
    setCaptchaCode('');
    validationToken.current = null;

    try {
      const captcha = await generateCaptcha();
      setCaptchaKey(captcha.captcha_key);
      setCaptchaImage(captcha.captcha_image);
    } catch {
      setCaptchaKey(null);
      setCaptchaImage(null);
      setCaptchaError('Não foi possível carregar o captcha. Atualize e tente novamente.');
    } finally {
      setIsCaptchaLoading(false);
    }
  }, []);

  const focusCaptcha = () => {
    requestAnimationFrame(() => captchaInputRef.current?.focus());
  };

  useEffect(() => {
    formStartedAt.current = Math.floor(Date.now() / 1000);
    void refreshCaptcha();
  }, [refreshCaptcha]);

  const onSubmit = async (data: LeadFormData) => {
    setErrorMessage(null);

    const payload: LeadPayload = {
      ...data,
      employee_range: data.employee_range as LeadPayload['employee_range'],
      phone: data.phone.replace(/\D/g, ''),
      form_started_at: formStartedAt.current,
    };

    try {
      let token = validationToken.current;
      if (!token) {
        if (!captchaKey || captchaCode.length !== 5) {
          setCaptchaError('Informe o código de segurança.');
          focusCaptcha();
          return;
        }

        try {
          token = await verifyCaptcha(captchaKey, captchaCode);
          validationToken.current = token;
          setCaptchaError(null);
        } catch (error: unknown) {
          const verificationError =
            isAxiosError(error) && error.response?.status === 422
              ? 'Código de segurança inválido ou expirado.'
              : 'Não foi possível validar o captcha. Tente novamente.';
          await refreshCaptcha();
          setCaptchaError(verificationError);
          focusCaptcha();
          return;
        }
      }

      await submitLeadCapture(payload, token);
      form.reset(DEFAULT_VALUES);
      setIsSuccess(true);
      requestAnimationFrame(() => successTitleRef.current?.focus());
    } catch (error: unknown) {
      if (!isAxiosError(error)) {
        setErrorMessage('Ocorreu um erro ao enviar a solicitação. Tente novamente.');
        return;
      }

      if (error.response?.status === 409) {
        setErrorMessage('Sua solicitação já foi enviada recentemente.');
        return;
      }

      if (error.response?.status === 403) {
        setErrorMessage('A validação expirou. Confirme o novo código de segurança.');
        await refreshCaptcha();
        focusCaptcha();
        return;
      }

      if (error.response?.status === 422) {
        const errors = error.response.data?.errors;
        let hasUnknownFieldError = false;

        if (errors && typeof errors === 'object') {
          for (const [field, messages] of Object.entries(errors)) {
            const message = Array.isArray(messages) ? messages[0] : String(messages);
            const normalizedField = field === 'number_employees' ? 'employee_range' : field;

            if (FORM_FIELDS.has(normalizedField as keyof LeadFormData)) {
              form.setError(normalizedField as keyof LeadFormData, {
                type: 'server',
                message,
              });
            } else {
              hasUnknownFieldError = true;
            }
          }
        }

        if (hasUnknownFieldError || !errors || Object.keys(errors).length === 0) {
          setErrorMessage('Por favor, verifique os dados informados.');
        }
        return;
      }

      setErrorMessage('Ocorreu um erro ao enviar a solicitação. Tente novamente.');
    }
  };

  const showForm = () => {
    form.reset(DEFAULT_VALUES);
    form.clearErrors();
    formStartedAt.current = Math.floor(Date.now() / 1000);
    setErrorMessage(null);
    setIsSuccess(false);
    void refreshCaptcha();
  };

  return {
    ...form,
    errorMessage,
    captchaCode,
    captchaError,
    captchaImage,
    captchaInputRef,
    isCaptchaLoading,
    onCaptchaCodeChange: setCaptchaCode,
    refreshCaptcha,
    isSuccess,
    onSubmit: form.handleSubmit(onSubmit),
    showForm,
    successTitleRef,
  };
}

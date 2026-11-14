import { zodResolver } from '@hookform/resolvers/zod';
import { isAxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitLeadCapture } from '../api/lead.api';
import { type LeadFormData, type LeadPayload, leadSchema } from '../types/lead.types';
import { useCaptcha } from './useCaptcha';

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
  const captchaInputRef = useRef<HTMLInputElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const captcha = useCaptcha();
  const form = useForm<LeadFormData>({
    defaultValues: DEFAULT_VALUES,
    mode: 'onTouched',
    resolver: zodResolver(leadSchema),
  });

  function buildLeadPayload(data: LeadFormData, formStartedAt: number): LeadPayload {
    return {
      ...data,
      employee_range: data.employee_range as LeadPayload['employee_range'],
      phone: data.phone.replace(/\D/g, ''),
      form_started_at: formStartedAt,
    };
  }

  const focusCaptcha = () => {
    requestAnimationFrame(() => captchaInputRef.current?.focus());
  };

  useEffect(() => {
    formStartedAt.current = Math.floor(Date.now() / 1000);
  }, []);

  const onSubmit = async (data: LeadFormData) => {
    setErrorMessage(null);

    const payload = buildLeadPayload(data, formStartedAt.current);

    try {
      const token = await captcha.validate();
      if (!token) {
        focusCaptcha();
        return;
      }

      await submitLeadCapture(payload, token);
      form.reset(DEFAULT_VALUES);
      setIsSuccess(true);
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
        await captcha.refresh();
        focusCaptcha();
        return;
      }

      if (error.response?.status === 422) {
        const errors = error.response.data?.errors;
        let hasUnknownFieldError = false;

        if (errors && typeof errors === 'object') {
          for (const [field, messages] of Object.entries(errors)) {
            const message = Array.isArray(messages) ? messages[0] : String(messages);

            if (FORM_FIELDS.has(field as keyof LeadFormData)) {
              form.setError(field as keyof LeadFormData, {
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
    void captcha.refresh();
  };

  return {
    ...form,
    errorMessage,
    captcha: {
      code: captcha.code,
      error: captcha.error,
      image: captcha.image,
      inputRef: captchaInputRef,
      isLoading: captcha.isLoading,
      onCodeChange: captcha.onCodeChange,
      refresh: captcha.refresh,
    },
    isSuccess,
    onSubmit: form.handleSubmit(onSubmit),
    showForm,
  };
}

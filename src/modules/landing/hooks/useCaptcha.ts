import { isAxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { generateCaptcha, verifyCaptcha } from '../api/captcha.api';

export function useCaptcha() {
  const [key, setKey] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [validationToken, setValidationToken] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setCode('');
    setValidationToken(null);

    try {
      const captcha = await generateCaptcha();
      setKey(captcha.captcha_key);
      setImage(captcha.captcha_image);
    } catch {
      setKey(null);
      setImage(null);
      setError('Não foi possível carregar o captcha. Atualize e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const validate = useCallback(async () => {
    if (validationToken) return validationToken;

    if (!key || code.length !== 5) {
      setError('Informe o código de segurança.');
      return null;
    }

    try {
      const token = await verifyCaptcha(key, code);
      setValidationToken(token);
      setError(null);
      return token;
    } catch (error: unknown) {
      const verificationError =
        isAxiosError(error) && error.response?.status === 422
          ? 'Código de segurança inválido ou expirado.'
          : 'Não foi possível validar o captcha. Tente novamente.';

      await refresh();
      setError(verificationError);
      return null;
    }
  }, [code, key, refresh, validationToken]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return {
    code,
    error,
    image,
    isLoading,
    onCodeChange: setCode,
    refresh,
    validate,
  };
}

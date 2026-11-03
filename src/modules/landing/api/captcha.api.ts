import { api } from '@/config/axios';

type CaptchaResponse = {
  data: {
    captcha_key: string;
    captcha_image: string;
  };
};

type CaptchaVerificationResponse = {
  data: {
    validation_token: string;
  };
};

export async function generateCaptcha() {
  const response = await api.get<CaptchaResponse>('/v1/security/captcha/generate');
  return response.data.data;
}

export async function verifyCaptcha(captchaKey: string, captchaCode: string) {
  const response = await api.post<CaptchaVerificationResponse>('/v1/security/captcha/verify', {
    captcha_key: captchaKey,
    captcha_code: captchaCode,
    context: 'leads_landing',
  });

  return response.data.data.validation_token;
}

import { api } from '@/config/axios';

export interface LeadPayload {
  name: string;
  company_name: string;
  corporate_email: string;
  phone: string;
  number_employees: number;
  objective: {
    time_tracking?: boolean;
    payroll?: boolean;
    [key: string]: boolean | undefined;
  };
  form_started_at: number;
  website: string; // Honeypot
}

export const submitLeadCapture = async (
  payload: LeadPayload,
  captchaToken: string = 'token-de-teste',
) => {
  const response = await api.post('/v1/landing/leads', payload, {
    headers: {
      'X-Validation-Token': captchaToken,
    },
  });

  return response.data;
};

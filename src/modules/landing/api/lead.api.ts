import { api } from '@/config/axios';
import type { LeadPayload } from '../types/lead.types';

export type { LeadPayload } from '../types/lead.types';

export const submitLeadCapture = async (payload: LeadPayload, captchaToken: string) => {
  const response = await api.post('/v1/landing/leads', payload, {
    headers: {
      'X-Validation-Token': captchaToken,
    },
  });

  return response.data;
};

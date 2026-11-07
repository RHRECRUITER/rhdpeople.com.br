import { describe, expect, it } from 'vitest';
import { leadSchema } from './lead.types';

const validLead = {
  name: 'Jane Doe',
  company_name: 'RHD People',
  corporate_email: 'jane@empresa.com',
  phone: '(11) 98765-4321',
  employee_range: '21-50',
  objective: {
    vacation: true,
    time_tracking: false,
    payroll: false,
    documents: true,
  },
  website: '',
};

describe('leadSchema', () => {
  it('accepts a valid lead with multiple challenges', () => {
    expect(leadSchema.safeParse(validLead).success).toBe(true);
  });

  it('rejects missing required fields and no challenge', () => {
    const result = leadSchema.safeParse({
      ...validLead,
      name: '',
      company_name: '',
      corporate_email: 'invalid',
      phone: '999999999',
      employee_range: '',
      objective: {
        vacation: false,
        time_tracking: false,
        payroll: false,
        documents: false,
      },
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const messages = result.error.issues.map((issue) => issue.message);
      expect(messages).toEqual(
        expect.arrayContaining([
          'Informe seu nome completo',
          'Informe o nome da empresa',
          'Informe um e-mail válido',
          'Informe um WhatsApp com DDD',
          'Selecione o número de colaboradores',
          'Selecione pelo menos uma opção',
        ]),
      );
    }
  });
});

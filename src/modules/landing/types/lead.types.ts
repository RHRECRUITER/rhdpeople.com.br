import { z } from 'zod';

export const EMPLOYEE_RANGES = ['1-20', '21-50', '51-100', '101-300', '300+'] as const;

export type EmployeeCountRange = (typeof EMPLOYEE_RANGES)[number];

export type ChallengeOptionId = 'vacation' | 'time_tracking' | 'payroll' | 'documents';

export interface ChallengeOption {
  id: ChallengeOptionId;
  label: string;
}

export interface LeadChecklistBadge {
  icon: 'shield' | 'globe-lock' | 'check';
  label: string;
}

export interface LeadSectionContent {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  checkpoints: string[];
  badges: LeadChecklistBadge[];
  formTitle: string;
  contactHeader: string;
  fields: {
    name: { label: string; placeholder: string };
    company: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
  };
  employeeCountHeader: string;
  employeeRanges: readonly EmployeeCountRange[];
  challengeHeader: string;
  challenges: ChallengeOption[];
  submitButtonText: string;
  submitButtonLoading: string;
  termsNotice: string;
  privacyPolicyText: string;
  termsOfUseText: string;
  successTitle: string;
  successTitleHighlight: string;
  successDescription: string;
  backButtonText: string;
  captcha: {
    label: string;
    loading: string;
    placeholder: string;
  };
}

const objectiveSchema = z
  .object({
    vacation: z.boolean(),
    time_tracking: z.boolean(),
    payroll: z.boolean(),
    documents: z.boolean(),
  })
  .refine((objective) => Object.values(objective).some(Boolean), {
    message: 'Selecione pelo menos uma opção',
  });

export type ObjectiveSelection = z.infer<typeof objectiveSchema>;

export const leadSchema = z.object({
  name: z.string().trim().min(3, 'Informe seu nome completo'),
  company_name: z.string().trim().min(2, 'Informe o nome da empresa'),
  corporate_email: z.email('Informe um e-mail válido'),
  phone: z.string().refine((value) => {
    const digits = value.replace(/\D/g, '');
    return digits.length === 10 || digits.length === 11;
  }, 'Informe um WhatsApp com DDD'),
  employee_range: z
    .string()
    .refine((value) => EMPLOYEE_RANGES.includes(value as EmployeeCountRange), {
      message: 'Selecione o número de colaboradores',
    }),
  objective: objectiveSchema,
  website: z.string(),
});

export type LeadFormData = z.input<typeof leadSchema>;

export interface LeadPayload {
  name: string;
  company_name: string;
  corporate_email: string;
  phone: string;
  employee_range: EmployeeCountRange;
  objective: ObjectiveSelection;
  form_started_at: number;
  website: string;
}

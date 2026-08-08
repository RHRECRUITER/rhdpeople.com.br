import {z} from 'zod';

//Schema de validação do formulário (com mensagens de erro)
export const leadSchema = z.object({
  fullName: z.string().min(3, 'O nome completo é obrigatório'),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export interface Lead{
}
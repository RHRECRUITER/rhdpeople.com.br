import { useEffect, useState, type FormEvent } from 'react';
import { submitLeadCapture, type LeadPayload } from '../api/lead.api';

export function LeadForm() {

  const [formStartedAt, setFormStartedAt] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Estado dos campos
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    corporate_email: '',
    phone: '',
    number_employees: 1,
    time_tracking: false,
    payroll: false,
    website: '', // HONEYPOT (Obrigatório ir limpo/vazio)
  });

  useEffect(() => {
    // Registra o tempo inicial assim que o formulário carrega
    setFormStartedAt(Math.floor(Date.now() / 1000));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setIsSuccess(false);

    //contrato estrito esperado pelo Laravel
    const payload: LeadPayload = {
      name: formData.name,
      company_name: formData.company_name,
      corporate_email: formData.corporate_email,
      phone: formData.phone,
      number_employees: Number(formData.number_employees),
      objective: {
        time_tracking: formData.time_tracking,
        payroll: formData.payroll,
      },
      form_started_at: formStartedAt,
      website: formData.website, // Honeypot
    };

    try {
      // Passar o token do captcha obtido no componente visual de captcha
      await submitLeadCapture(payload, 'captcha-token-aqui');
      
      setIsSuccess(true);
      setFormData({
        name: '',
        company_name: '',
        corporate_email: '',
        phone: '',
        number_employees: 1,
        time_tracking: false,
        payroll: false,
        website: '',
      });
    } catch (error: any) {
      if (error.response?.status === 409) {
        setErrorMessage('Sua solicitação já foi enviada recentemente.');
      } else if (error.response?.status === 422) {
        setErrorMessage('Por favor, verifique os dados informados.');
      } else {
        setErrorMessage('Ocorreu um erro ao enviar a solicitação. Tente novamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Armadilha Honeypot: Totalmente oculta para usuários */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Campos do Formulário */}
      <div>
        <label htmlFor="name">Nome completo</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="company_name">Empresa</label>
        <input
          id="company_name"
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="corporate_email">E-mail corporativo</label>
        <input
          id="corporate_email"
          type="email"
          name="corporate_email"
          value={formData.corporate_email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="phone">Telefone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="number_employees">Nº de Funcionários</label>
        <input
          id="number_employees"
          type="number"
          name="number_employees"
          value={formData.number_employees}
          onChange={handleChange}
          min={1}
          required
        />
      </div>

      {/* Objetivos / Módulos */}
      <fieldset>
        <legend>Módulos desejados</legend>
        <label>
          <input
            type="checkbox"
            name="time_tracking"
            checked={formData.time_tracking}
            onChange={handleChange}
          />
          Controle de Ponto
        </label>
        <label>
          <input
            type="checkbox"
            name="payroll"
            checked={formData.payroll}
            onChange={handleChange}
          />
          Folha de Pagamento
        </label>
      </fieldset>

      {/* Mensagens de Feedback */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {isSuccess && <p style={{ color: 'green' }}>Demonstração solicitada com sucesso!</p>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Solicitar Demonstração'}
      </button>
    </form>
  );
}
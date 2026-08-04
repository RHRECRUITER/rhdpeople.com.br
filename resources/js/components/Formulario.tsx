type FormularioProps = {
  action: string;
  csrf: string;
};

const beneficios = ['Demo de 30 minutos', 'Tire suas dúvidas', 'Casos do seu setor', 'Sem compromisso'] as const;

const colaboradores = ['1-20', '21-50', '51-100', '101-300', '300+'] as const;

const desafios = [
  { key: 'time_tracking', label: 'Controle de ponto' },
  { key: 'vacation', label: 'Gestão de férias' },
  { key: 'payroll', label: 'Folha de pagamento' },
  { key: 'documents', label: 'Documentos' },
  { key: 'reports', label: 'Relatórios' },
] as const;

type IconProps = { className?: string };

function CheckIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ShieldIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function LockIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

const selos = [
  { Icon: ShieldIcon, label: 'LGPD' },
  { Icon: LockIcon, label: 'Dados seguros' },
  { Icon: CheckIcon, label: 'Sem contrato' },
] as const;

const contatos = [
  { id: 'df-nome', type: 'text', name: 'name', label: 'Nome completo', placeholder: 'Seu nome', autoComplete: 'name' },
  { id: 'df-empresa', type: 'text', name: 'company_name', label: 'Empresa', placeholder: 'Nome da empresa', autoComplete: 'organization' },
  { id: 'df-email', type: 'email', name: 'corporate_email', label: 'E-mail corporativo', placeholder: 'Empresa@gmail.com', autoComplete: 'email' },
  { id: 'df-whatsapp', type: 'tel', name: 'phone', label: 'WhatsApp', placeholder: '(00) 00000-0000', autoComplete: 'tel' },
] as const;

const seloClass =
  'inline-flex items-center gap-2.5 rounded-[10px] border border-emerald-900 bg-neutral-50/[0.28] px-3 py-[7px] font-body text-[13px] font-bold leading-[18px] tracking-[-0.16px] text-emerald-900 backdrop-blur-sm';

const rotuloClass = 'font-body text-[15px] font-medium leading-tight text-neutral-600';

const fieldsetClass = 'm-0 flex flex-col gap-[18px] border-0 p-0';

const legendClass = 'p-0 font-heading text-xl font-semibold leading-[26px] tracking-[-0.15px] text-stone-800';

// Input real, coberto pelo <span> que desenha o controle. Fica clicável e
// focável, mas invisível — o estilo vem via peer-checked/peer-focus-visible.
const inputOcultoClass = 'peer absolute inset-0 m-0 cursor-pointer opacity-0';

const inputClass =
  'h-12 w-full rounded-lg border-2 border-neutral-200 bg-neutral-50 px-4 font-body text-[15px] font-normal leading-[22px] text-neutral-800 placeholder:text-neutral-400 transition-colors duration-150 ease-out hover:border-emerald-200 focus:border-emerald-600 focus:bg-white focus:outline-none';

function Formulario({ action, csrf }: FormularioProps) {
  return (
    <section
      id="formulario"
      className="flex w-full items-center justify-center gap-12 box-border bg-neutral-50 px-6 py-14 font-body max-[1080px]:flex-col max-[1080px]:gap-8 max-[1080px]:px-5 max-[1080px]:py-10 [&_*]:box-border"
    >
      <div className="relative flex-none self-stretch overflow-hidden rounded-3xl [background:linear-gradient(90deg,theme(colors.neutral.50/49%),theme(colors.neutral.50/49%)),theme(colors.emerald.50)] max-[1080px]:w-full max-[1080px]:max-w-[540px] max-[1080px]:flex-none max-[1080px]:basis-auto max-[1080px]:self-auto lg:basis-[540px] lg:max-w-[540px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[100px] -left-[110px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,theme(colors.emerald.600/18%)_0%,theme(colors.emerald.600/0%)_70%)]"
        />

        <div className="relative flex flex-col gap-5 px-11 py-14 max-[560px]:px-6 max-[560px]:py-10">
          <span className="self-start inline-flex items-center rounded-[20px] border border-emerald-200 bg-neutral-50 px-3 py-1.5 font-body text-[13px] font-semibold leading-5 tracking-[1.2px] text-emerald-600 shadow-[0_4px_8.2px_rgba(0,0,0,0.06)]">
            Demonstração Gratuita
          </span>

          <div className="flex max-w-[440px] flex-col gap-4">
            <h2 className="m-0 font-heading text-5xl font-bold leading-[56px] tracking-[-0.6px] text-stone-800 max-[560px]:text-[38px] max-[560px]:leading-[46px]">
              Veja o RHDPeople<br />
              <span className="text-emerald-700">em ação</span>
            </h2>
            <p className="m-0 max-w-[400px] font-heading text-lg font-normal leading-[26px] tracking-[-0.1px] text-neutral-800">
              Preencha o formulário e nossa equipe entrará em contato
              para uma demonstração personalizada.
            </p>
          </div>

          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {beneficios.map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-base font-medium leading-6 text-neutral-600">
                <CheckIcon className="h-5 w-5 flex-none text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <hr className="m-1 h-0 w-full border-0 border-t border-neutral-200" />

          <div className="flex flex-wrap gap-3.5">
            {selos.map(({ Icon, label }) => (
              <span key={label} className={seloClass}>
                <Icon className="h-[15px] w-[15px]" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 max-[1080px]:w-full max-[1080px]:max-w-[540px] max-[1080px]:flex-none max-[1080px]:basis-auto lg:basis-[480px] lg:max-w-[480px]">
        <h3 className="m-0 font-heading text-[30px] font-bold leading-[38px] tracking-[-0.3px] text-neutral-800 max-[560px]:text-[26px] max-[560px]:leading-[34px]">
          Agende sua demonstração
        </h3>

        <form className="flex flex-col gap-6" action={action} method="POST" noValidate>
          <input type="hidden" name="_token" value={csrf} />

          <fieldset className={fieldsetClass}>
            <legend className={legendClass}>
              Dados de contato
            </legend>

            <div className="grid grid-cols-2 gap-[18px] max-[560px]:grid-cols-1">
              {contatos.map((campo) => (
                <div key={campo.id} className="flex flex-col gap-2.5">
                  <label htmlFor={campo.id} className={rotuloClass}>{campo.label}</label>
                  <input
                    id={campo.id}
                    type={campo.type}
                    name={campo.name}
                    placeholder={campo.placeholder}
                    autoComplete={campo.autoComplete}
                    className={inputClass}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <span className={rotuloClass}>Número de colaboradores</span>
              <div className="flex flex-wrap gap-3">
                {colaboradores.map((faixa, index) => (
                  <label key={faixa} className="group relative cursor-pointer">
                    <input
                      type="radio"
                      name="colaboradores"
                      value={faixa}
                      defaultChecked={index === 0}
                      className={inputOcultoClass}
                    />
                    <span className="flex h-12 min-w-[80px] items-center justify-center rounded-[10px] border-2 border-neutral-200 bg-neutral-50 px-4 font-body text-[15px] font-bold leading-[22px] text-neutral-400 transition-all duration-150 ease-out peer-checked:border-emerald-600 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-emerald-600 group-hover:border-emerald-200">
                      {faixa}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </fieldset>

          <hr className="m-1 h-0 w-60 max-w-full border-0 border-t border-neutral-200" />

          <fieldset className={fieldsetClass}>
            <legend className={legendClass}>
              Qual seu maior desafio hoje?
            </legend>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3 max-[560px]:grid-cols-1">
              {desafios.map((desafio) => (
                <label key={desafio.key} className="group has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50 relative flex h-[52px] cursor-pointer items-center justify-between gap-2.5 rounded-[10px] border-2 border-neutral-200 bg-neutral-50 px-[18px] py-3.5 transition-all duration-150 ease-out hover:border-emerald-200">
                  <input type="checkbox" name={`objective[${desafio.key}]`} value="1" className={inputOcultoClass} />
                  <span className="font-body text-sm font-bold leading-5 text-neutral-400 transition-colors duration-150 ease-out peer-checked:text-emerald-600">
                    {desafio.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 flex-none items-center justify-center rounded-full border-[1.5px] border-neutral-400 text-transparent transition-all duration-150 ease-out peer-checked:border-emerald-600 peer-checked:bg-emerald-600 peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-emerald-600 [&_svg]:h-3 [&_svg]:w-3"
                  >
                    <CheckIcon />
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col items-center gap-3.5">
            <button
              type="submit"
              className="flex h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-700 font-heading text-lg font-semibold leading-6 tracking-[-0.15px] text-neutral-50 shadow-[0_5px_3.95px_rgba(0,0,0,0.2)] transition-[background-color,transform] duration-150 ease-out hover:bg-emerald-800 active:translate-y-px [&_svg]:h-[22px] [&_svg]:w-[22px]"
            >
              Agendar demonstração gratuita
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <p className="m-0 text-center font-body text-[13px] font-bold leading-[18px] tracking-[-0.16px] text-neutral-400 [&_a]:text-neutral-500 [&_a]:underline">
              Ao enviar, você concorda com nossa
              <a href="#">Política de Privacidade</a> e <a href="#">Termos de Uso</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Formulario;

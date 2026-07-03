<link rel="stylesheet" href="{{ asset('assets/landing/css/components/formulario.css') }}">

<section id="formulario" class="formulario">
    {{-- ===================== Coluna esquerda: informações ===================== --}}
    <div class="formulario__info">
        <div class="formulario__info-content">
            <span class="formulario__badge">Demonstração Gratuita</span>

            <div class="formulario__heading">
                <h2 class="formulario__titulo">
                    Veja o RHDPeople<br>
                    <span class="formulario__titulo-destaque">em ação</span>
                </h2>
                <p class="formulario__descricao">
                    Preencha o formulário e nossa equipe entrará em contato
                    para uma demonstração personalizada.
                </p>
            </div>

            <ul class="formulario__lista">
                @foreach (['Demo de 30 minutos', 'Tire suas dúvidas', 'Casos do seu setor', 'Sem compromisso'] as $item)
                    <li class="formulario__lista-item">
                        <svg class="formulario__lista-icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{{ $item }}</span>
                    </li>
                @endforeach
            </ul>

            <hr class="formulario__divisor">

            <div class="formulario__selos">
                <span class="formulario__selo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                    LGPD
                </span>
                <span class="formulario__selo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Dados seguros
                </span>
                <span class="formulario__selo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Sem contrato
                </span>
            </div>
        </div>
    </div>

    {{-- ===================== Coluna direita: formulário ===================== --}}
    <div class="formulario__card">
        <h3 class="formulario__card-titulo">Agende sua demonstração</h3>

        <form class="formulario__corpo" action="{{ route('landing.leads') }}" method="POST" novalidate>
            @csrf

            {{-- Bloco: Dados de contato --}}
            <fieldset class="formulario__grupo">
                <legend class="formulario__grupo-titulo">Dados de contato</legend>

                <div class="formulario__campos">
                    <div class="formulario__campo">
                        <label for="df-nome">Nome completo</label>
                        <input id="df-nome" type="text" name="name" placeholder="Seu nome" autocomplete="name">
                    </div>
                    <div class="formulario__campo">
                        <label for="df-empresa">Empresa</label>
                        <input id="df-empresa" type="text" name="company_name" placeholder="Nome da empresa" autocomplete="organization">
                    </div>
                    <div class="formulario__campo">
                        <label for="df-email">E-mail corporativo</label>
                        <input id="df-email" type="email" name="corporate_email" placeholder="Empresa@gmail.com" autocomplete="email">
                    </div>
                    <div class="formulario__campo">
                        <label for="df-whatsapp">WhatsApp</label>
                        <input id="df-whatsapp" type="tel" name="phone" placeholder="(00) 00000-0000" autocomplete="tel">
                    </div>
                </div>

                <div class="formulario__campo formulario__campo--full">
                    <span class="formulario__campo-label">Número de colaboradores</span>
                    <div class="formulario__chips">
                        @foreach (['1-20', '21-50', '51-100', '101-300', '300+'] as $i => $faixa)
                            <label class="formulario__chip">
                                <input type="radio" name="colaboradores" value="{{ $faixa }}" @checked($i === 0)>
                                <span>{{ $faixa }}</span>
                            </label>
                        @endforeach
                    </div>
                </div>
            </fieldset>

            <hr class="formulario__divisor formulario__divisor--curto">

            {{-- Bloco: Desafios --}}
            <fieldset class="formulario__grupo">
                <legend class="formulario__grupo-titulo">Qual seu maior desafio hoje?</legend>

                <div class="formulario__opcoes">
                    @foreach ([
                        'time_tracking' => 'Controle de ponto',
                        'vacation' => 'Gestão de férias',
                        'payroll' => 'Folha de pagamento',
                        'documents' => 'Documentos',
                        'reports' => 'Relatórios',
                    ] as $modulo => $desafio)
                        <label class="formulario__opcao">
                            <input type="checkbox" name="objective[{{ $modulo }}]" value="1">
                            <span class="formulario__opcao-texto">{{ $desafio }}</span>
                            <span class="formulario__opcao-marca" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                            </span>
                        </label>
                    @endforeach
                </div>
            </fieldset>

            {{-- Ação --}}
            <div class="formulario__acoes">
                <button type="submit" class="formulario__btn">
                    Agendar demonstração gratuita
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
                <p class="formulario__termos">
                    Ao enviar, você concorda com nossa
                    <a href="#">Política de Privacidade</a> e <a href="#">Termos de Uso</a>
                </p>
            </div>
        </form>
    </div>
</section>

@push('styles')
    <link rel="stylesheet" href="{{ asset('assets/landing/css/layout/footer.css') }}">
@endpush

<footer class="rodape">
    <div class="rodape__wrap">
        <div class="rodape__content">
            {{-- ===================== Conteúdo principal ===================== --}}
            <div class="rodape__leading">
                {{-- Coluna: logo + descrição + contato --}}
                <div class="rodape__brand">
                    <img class="rodape__logo" src="{{ asset('assets/landing/img/logo/rhdpeople-logo.svg') }}" alt="RHDPeople" width="204" height="33">

                    <h2 class="rodape__slogan">
                        <span class="rodape__slogan-1">Seu RH mais inteligente,</span>
                        <span class="rodape__slogan-2">humano e digital.</span>
                    </h2>

                    <p class="rodape__desc">
                        A plataforma completa de gestão de Departamento Pessoal que
                        simplifica processos e empodera colaboradores.
                    </p>

                    <ul class="rodape__contatos">
                        <li class="rodape__contato">
                            <svg class="rodape__contato-icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <a href="mailto:contato@rhdpeople.com.br">contato@rhdpeople.com.br</a>
                        </li>
                        <li class="rodape__contato">
                            <svg class="rodape__contato-icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <a href="tel:+5583996219812">(83) 99621-9812</a>
                        </li>
                        <li class="rodape__contato">
                            <svg class="rodape__contato-icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>João Pessoa - PB</span>
                        </li>
                    </ul>

                    <a href="https://wa.me/5583996219812" target="_blank" rel="noopener noreferrer" class="rodape__btn">Falar com especialista</a>
                </div>

                {{-- Colunas de links --}}
                <nav class="rodape__links" aria-label="Links do rodapé">
                    <div class="rodape__col">
                        <h3 class="rodape__col-titulo">Produto</h3>
                        <ul class="rodape__col-lista">
                            <li><a href="#" class="rodape__link">Funcionalidades</a></li>
                            <li><a href="#" class="rodape__link">Portal do colaborador</a></li>
                            <li><a href="#" class="rodape__link">Planos e preços</a></li>
                            <li><a href="#" class="rodape__link">Integrações</a></li>
                        </ul>
                    </div>

                    <div class="rodape__col">
                        <h3 class="rodape__col-titulo">Empresa</h3>
                        <ul class="rodape__col-lista">
                            <li><a href="#" class="rodape__link">Sobre Nós</a></li>
                            <li><a href="#" class="rodape__link">Carreiras</a></li>
                            <li><a href="#" class="rodape__link">Parceiros</a></li>
                        </ul>
                    </div>

                    <div class="rodape__col">
                        <h3 class="rodape__col-titulo">Suporte</h3>
                        <ul class="rodape__col-lista">
                            <li><a href="#" class="rodape__link">Central de ajuda</a></li>
                            <li><a href="#" class="rodape__link">Status do sistema</a></li>
                            <li><a href="#" class="rodape__link">Contato</a></li>
                        </ul>
                    </div>

                    <div class="rodape__col">
                        <h3 class="rodape__col-titulo">Legal</h3>
                        <ul class="rodape__col-lista">
                            <li><a href="#" class="rodape__link">LGPD</a></li>
                            <li><a href="#" class="rodape__link">Termos de Uso</a></li>
                            <li><a href="#" class="rodape__link">Política de privacidade</a></li>
                            <li><a href="#" class="rodape__link">Cookies</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            {{-- ===================== Barra inferior ===================== --}}
            <div class="rodape__trailing">
                <div class="rodape__trailing-inner">
                    <p class="rodape__copy">© RHDPeople | todos os direitos reservados</p>

                    <div class="rodape__social">
                        <a href="#" target="_blank" rel="noopener noreferrer" class="rodape__social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" class="rodape__social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

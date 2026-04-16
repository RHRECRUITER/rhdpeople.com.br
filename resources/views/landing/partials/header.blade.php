<header class="site-header" role="banner">
    <div class="container">

        <a href="/" class="navbar-logo" aria-label="Start File — Ir para a página inicial">
            Start File
        </a>

        {{-- Desktop nav + CTA --}}
        <div class="navbar-right">
            <nav class="navbar-nav" aria-label="Menu principal">
                <a href="#funcionalidades" class="navbar-nav__link" tabindex="0">Funcionalidades</a>
                <a href="#metricas" class="navbar-nav__link" tabindex="0">Métricas</a>
                <a href="#beneficios" class="navbar-nav__link" tabindex="0">Benefícios</a>
                <a href="#contato" class="navbar-nav__link" tabindex="0">Contato</a>
            </nav>

            <a href="#contato" class="navbar-cta" tabindex="0" aria-label="Entrar em contato">
                Button
            </a>
        </div>

        {{-- Hamburger (mobile only) --}}
        <button
            type="button"
            id="navbar-toggle"
            class="navbar-toggle"
            aria-expanded="false"
            aria-controls="navbar-mobile"
            aria-label="Abrir menu de navegação"
        >
            <span class="navbar-toggle__bar" aria-hidden="true"></span>
            <span class="navbar-toggle__bar" aria-hidden="true"></span>
            <span class="navbar-toggle__bar" aria-hidden="true"></span>
        </button>
    </div>

    {{-- Mobile overlay --}}
    <nav id="navbar-mobile" class="navbar-mobile" aria-label="Menu mobile">
        <a href="#funcionalidades" class="navbar-mobile__link" tabindex="-1">Funcionalidades</a>
        <a href="#metricas" class="navbar-mobile__link" tabindex="-1">Métricas</a>
        <a href="#beneficios" class="navbar-mobile__link" tabindex="-1">Benefícios</a>
        <a href="#contato" class="navbar-mobile__link" tabindex="-1">Contato</a>
        <a href="#contato" class="navbar-mobile__cta" tabindex="-1">Button</a>
    </nav>
</header>

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navbar-toggle');
    const mobileMenu = document.getElementById('navbar-mobile');

    if (!toggle || !mobileMenu) return;

    const handleToggle = () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        mobileMenu.classList.toggle('is-open', !isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : '';
    };

    const handleClose = () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    toggle.addEventListener('click', handleToggle);

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', handleClose);
    });

    const handleKeyDown = (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
            handleClose();
            toggle.focus();
        }
    };

    document.addEventListener('keydown', handleKeyDown);

    const mobileBreakpoint = window.matchMedia('(max-width: 768px)');

    const handleBreakpointChange = (e) => {
        if (!e.matches) {
            handleClose();
        }
    };

    mobileBreakpoint.addEventListener('change', handleBreakpointChange);
});

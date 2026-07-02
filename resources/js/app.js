import './bootstrap';

const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    const htmlElement = document.documentElement;

    if (
        localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

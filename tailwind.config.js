import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                // Apenas os tons de marca. Os demais vêm do emerald padrão do
                // Tailwind — extend.colors mescla por tom, então não é preciso
                // repeti-los aqui.
                emerald: {
                    50: '#f3fffc',
                    700: '#00644e',
                    800: '#00553f', // hover do botão primário
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                heading: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
                body: ['Manrope', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};

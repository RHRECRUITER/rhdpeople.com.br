<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RHDPEOPLE - Hero Section</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                darkMode: 'class',
            }
        </script>
    </head>

    <body>
        <div class="relative min-h-screen bg-cover bg-no-repeat bg-[center_top_20%] md:bg-[right_center]" style="background-image: url('/assets/landing/img/hero/hero_img_light.png');">
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent pointer-events-none dark:hidden"></div>
            <header class="w-full border-b border-black/10 bg-black/30 backdrop-blur-[24px]">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-6 flex items-center justify-between">
                    <div class="flex items-center">
                        <a href="#">
                            <img src="/assets/landing/img/hero/logo.svg" alt="RHDPeople" class="h-6 w-auto">
                        </a>
                    </div>
                    <nav class="hidden md:flex items-center p-1.5 gap-6 text-sm font-medium text-white/75">
                        <a href="#" class="border-b-2 border-transparent hover:text-[#10B981] hover:border-[#10B981] transition">Produto</a>
                        <a href="#" class="border-b-2 border-transparent hover:text-[#10B981] hover:border-[#10B981] transition">Funcionalidades</a>
                        <a href="#" class="border-b-2 border-transparent hover:text-[#10B981] hover:border-[#10B981] transition">Planos</a>
                        <a href="#" class="border-b-2 border-transparent hover:text-[#10B981] hover:border-[#10B981] transition">Recursos</a>
                        <a href="#" class="border-b-2 border-transparent hover:text-[#10B981] hover:border-[#10B981] transition">Sobre</a>
                        <a href="#" class="border-b-2 border-transparent hover:text-[#10B981] hover:border-[#10B981] transition">FAQ</a>
                    </nav>
                    <div class="flex items-center gap-2">
                        <button id="theme-toggle" class="border border-white/10 hover:border-white/20 bg-black/10 hover:bg-black/20 px-6 py-4 rounded-[10px] text-white/75 text-sm font-medium transition">
                            <img src="/assets/landing/img/hero/light_button.svg" alt="Ícone do Botão" class="w-5 h-5">
                        </button>
                        <a href="#" class="border border-white/10 hover:border-white/20 bg-black/10 hover:bg-black/20 px-6 py-4 rounded-[10px] text-white/75 text-sm font-medium transition">
                            Entrar
                        </a>
                        <a href="#" class="bg-[#00644E] hover:bg-[#059669] hover:text-white text-[#FAFAFA] px-6 py-4 rounded-[10px] text-sm font-medium ml-1 transition">
                            Começar agora
                        </a>
                    </div>
                </div>
            </header>

            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 md:py-24">
                <div class="max-w-lg space-y-4">
                    <p class="text-xs font-bold tracking-widest text-[#F8FFFF]/75 uppercase">
                        Gestão de DP Simplificada
                    </p>
                    <h1 class="text-[#F8FFFF] text-4xl sm:text-5xl lg:text-18xl font-bold tracking-tight leading-tight">
                        Seu RH mais inteligente, <br>
                        <span class="text-[#34D399]">humano e digital</span>
                    </h1>
                    <p class="text-[#F8FFFF]/75 text-base sm:text-lg max-w-xl leading-relaxed">
                        Automatize tarefas, acompanhe indicadores em tempo real e facilite a rotina do seu time com uma plataforma intuitiva, segura e eficiente e elimine o retrabalho.
                    </p>
                    <div class="flex flex-wrap items-center gap-6 pt-4">
                        <a href="#" class="border border-white/10 hover:border-white/20 bg-black/10 hover:bg-black/20 px-6 py-4 rounded-[10px] text-white/75 text-sm font-medium transition">
                            Ver Planos
                        </a>
                        <a href="#" class="bg-[#00644E] hover:bg-[#059669] hover:text-white text-[#FAFAFA] px-6 py-4 rounded-[10px] text-sm font-medium transition">
                            Começar agora
                        </a>
                    </div>
                </div>
            </main>
        </div>

        <script>
            const themeToggleBtn = document.getElementById('theme-toggle');
            const htmlElement = document.documentElement;

            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
        </script>
    </body>
</html>

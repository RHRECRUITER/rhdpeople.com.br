<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>RHDPeople</title>

    {{-- Sem guard de manifest: aqui o bundle É a página, então falhar alto é
         melhor que servir um documento em branco. O landing:export já checa o
         manifest antes de renderizar. --}}
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap">
</head>
<body>
    {{--
        A página inteira é montada pelo React (resources/js/Landing.tsx).
        Esta div só entrega os dados que apenas o servidor conhece.

        O data-csrf só é emitido quando existe sessão. No export estático não há
        request nem sessão, e o token não teria valor num HTML servido de outra
        origem — ali quem protege o endpoint é o validation_token do captcha
        (CheckCaptchaToken). Servida pelo Laravel, a rota é stateful
        (EnsureFrontendRequestsAreStateful em bootstrap/app.php) e o token vale.

        A origem do route() vem de URL::useOrigin(), aplicado pelo landing:export.
        O caminho é sempre do roteador.
    --}}
    <div
        id="app"
        data-action="{{ route('landing.leads') }}"
        @if (request()->hasSession()) data-csrf="{{ csrf_token() }}" @endif
    ></div>
</body>
</html>
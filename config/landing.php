<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Origem da API consumida pela landing page
    |--------------------------------------------------------------------------
    |
    | A landing é publicada como HTML estático (ver Docs/Deploy), então ela não
    | roda no mesmo servidor que a API. Este valor diz de qual origem as URLs
    | geradas por route() devem sair no export estático.
    |
    | Guarda apenas a ORIGEM. O caminho continua sendo do roteador: o export
    | aplica URL::useOrigin() e o Blade usa route('landing.leads'), então
    | renomear ou versionar a rota não deixa a landing apontando para lugar
    | nenhum.
    |
    | Deixe vazio em desenvolvimento: aí as rotas resolvem nesta própria
    | aplicação, servida pelo Herd.
    |
    | Em produção: LANDING_API_URL=https://api.rhdpeople.com.br
    |
    | Lembre-se de que a origem da landing precisa estar em CORS_ALLOWED_ORIGINS
    | no .env da API, senão o navegador bloqueia o POST.
    |
    */

    'api_url' => env('LANDING_API_URL'),

];

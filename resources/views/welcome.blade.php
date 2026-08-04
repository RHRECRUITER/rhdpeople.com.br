@extends('layouts.app')

@section('title', 'Frontend - Starter')

@section('content')
    <main class="mx-auto max-w-3xl p-8">
        <h1 class="text-3xl font-semibold tracking-tight">Ambiente de Testes API</h1>
        <p class="mt-2 text-slate-600">
            Geração de Captcha para validação no Postman.
        </p>

        @php
            // Instancia o serviço de captcha e gera um novo desafio
            $captchaService = app(App\Services\Security\V1\CaptchaService::class);
            $captcha = $captchaService->generateCaptcha();
        @endphp

        <div class="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-col items-center gap-4">
                <img src="{{ $captcha['image'] }}" alt="Captcha" class="rounded border border-slate-300 shadow-inner">

                <div class="w-full space-y-4">
                    <div>
                        <label class="text-xs font-bold uppercase text-slate-500">Captcha Key (Postman: captcha_key)</label>
                        <input type="text" readonly value="{{ $captcha['key'] }}"
                               class="w-full rounded bg-slate-50 p-2 font-mono text-sm border border-slate-200 focus:outline-none">
                    </div>

                    <div>
                        <label class="text-xs font-bold uppercase text-slate-500">Contexto Recomendado (Postman: context)</label>
                        <input type="text" readonly value="leads_landing"
                               class="w-full rounded bg-slate-50 p-2 font-mono text-sm border border-slate-200 focus:outline-none">
                    </div>
                </div>

                <a href="" class="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                    ↻ Gerar Novo Captcha
                </a>
            </div>
        </div>

        <div class="mt-8 rounded-lg border border-slate-200 p-4">
            <p class="text-sm text-slate-700">
                Editar:
                <code class="rounded bg-slate-100 px-1 py-0.5">resources/views/welcome.blade.php</code>
                e
                <code class="rounded bg-slate-100 px-1 py-0.5">resources/js/app.tsx</code>
            </p>
        </div>
    </main>
@endsection

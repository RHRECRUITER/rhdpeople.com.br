<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes - ATS DP
|--------------------------------------------------------------------------
*/

Route::view('/', 'landing.index')->name('home');

// Mantida para não quebrar links externos que já apontam para /landingpage.
Route::redirect('/landingpage', '/', 301);

// Ambiente de testes de captcha (Postman). Fora de produção apenas.
if (! app()->isProduction()) {
    Route::view('/dev/captcha', 'welcome')->name('dev.captcha');
}

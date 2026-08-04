<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Foundation\Vite;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Number;

/**
 * Gera a versão estática da landing page, pronta para subir em public_html.
 *
 * A landing não tem conteúdo dinâmico de servidor: o Blade só monta o HTML em
 * volta do bundle do Vite e injeta a URL da API. Então renderizar a view uma
 * única vez e publicar o resultado produz exatamente a mesma página, sem
 * precisar de PHP no servidor.
 */
class ExportLanding extends Command
{
    protected $signature = 'landing:export
                            {--output=dist : Pasta de saída, relativa à raiz do projeto}';

    protected $description = 'Renderiza a landing page como HTML estático + assets em uma pasta publicável';

    public function handle(): int
    {
        $output = base_path($this->option('output'));

        if (! File::exists(public_path('build/manifest.json'))) {
            $this->components->error('public/build/manifest.json não existe. Rode "npm run build" antes.');

            return self::FAILURE;
        }

        if (! config('landing.api_url')) {
            $this->components->warn(
                'LANDING_API_URL está vazio: o formulário vai apontar para '.config('app.url').
                '. Defina LANDING_API_URL antes de publicar.'
            );
        }

        $this->apontarUrlsParaProducao();

        File::deleteDirectory($output);
        File::ensureDirectoryExists($output);

        File::put($output.'/index.html', view('landing.index')->render());

        // O manifest é insumo de build: o @vite já resolveu os nomes com hash
        // dentro do HTML, e nada na página estática o busca.
        File::copyDirectory(public_path('build'), $output.'/build');
        File::delete($output.'/build/manifest.json');

        // Arquivos soltos que a página referencia direto. Os vazios são
        // ignorados: publicar um favicon.ico de 0 byte é pior que não publicar
        // nenhum, porque o navegador recebe 200 em vez de procurar o padrão.
        foreach (['favicon.ico', 'robots.txt'] as $arquivo) {
            $origem = public_path($arquivo);

            if (File::exists($origem) && File::size($origem) > 0) {
                File::copy($origem, $output.'/'.$arquivo);
            }
        }

        $this->components->info('Landing exportada para '.$this->option('output').'/');
        $this->table(['Arquivo', 'Tamanho'], $this->inventario($output));

        return self::SUCCESS;
    }

    /**
     * Configura os geradores de URL para o contexto estático, em vez de
     * reescrever o HTML depois de renderizado.
     *
     * - Assets ficam relativos à raiz, para o mesmo dist/ servir em qualquer host.
     * - route() passa a resolver na origem da API, já que o HTML será servido
     *   de um domínio onde o Laravel não roda.
     */
    private function apontarUrlsParaProducao(): void
    {
        app(Vite::class)->createAssetPathsUsing(
            fn (string $path, ?bool $secure = null) => '/'.ltrim($path, '/')
        );

        if ($origem = config('landing.api_url')) {
            URL::useOrigin($origem);
        }
    }

    /** @return array<int, array{0: string, 1: string}> */
    private function inventario(string $output): array
    {
        return collect(File::allFiles($output))
            ->map(fn ($file) => [
                str_replace('\\', '/', $file->getRelativePathname()),
                Number::fileSize($file->getSize(), 1),
            ])
            ->all();
    }
}

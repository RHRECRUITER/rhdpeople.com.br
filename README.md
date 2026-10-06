# RHD People — Site Institucional (Landing Page)

Site institucional da RHD People, feito com **React + TypeScript + Vite + Tailwind CSS v4**.

Este README foi escrito para quem está começando agora. Se você nunca mexeu em um
projeto React, siga os passos na ordem e vai dar certo. 🙂

---

## Índice

1. [O que você precisa instalar antes](#1-o-que-você-precisa-instalar-antes)
2. [Como rodar o projeto](#2-como-rodar-o-projeto)
3. [Comandos disponíveis](#3-comandos-disponíveis)
4. [Variáveis de ambiente (.env)](#4-variáveis-de-ambiente-env)
5. [Como o projeto está organizado](#5-como-o-projeto-está-organizado)
6. [Onde criar novos componentes da landing page](#6-onde-criar-novos-componentes-da-landing-page)
7. [Como usar as cores (design tokens)](#7-como-usar-as-cores-design-tokens)
8. [Componentes prontos (shadcn/ui)](#8-componentes-prontos-shadcnui)
9. [Dúvidas frequentes / problemas comuns](#9-dúvidas-frequentes--problemas-comuns)

---

## 1. O que você precisa instalar antes

| Ferramenta | Para que serve | Onde baixar |
| --- | --- | --- |
| **Node.js 20 ou superior** | Roda o projeto na sua máquina. Já vem com o `npm` junto. | https://nodejs.org (escolha a versão **LTS**) |
| **Git** | Baixar e enviar o código. | https://git-scm.com |
| **VS Code** (recomendado) | Editor de código. | https://code.visualstudio.com |

Para conferir se instalou certo, abra o terminal e rode:

```bash
node -v   # deve mostrar algo como v20.x.x ou maior
npm -v    # deve mostrar algo como 10.x.x
```

> **O que é "terminal"?** É a janelinha preta onde você digita comandos.
> No VS Code você abre com o atalho `Ctrl + '` (Control + crase) ou pelo menu
> `Terminal > New Terminal`. Ele já abre dentro da pasta do projeto.

---

## 2. Como rodar o projeto

Faça isso **uma única vez**, na primeira vez que for mexer no projeto:

```bash
# 1. Baixe o código (pule se já tem a pasta no seu computador)
git clone <url-do-repositorio>
cd rhdpeople.com.br

# 2. Instale as dependências (as bibliotecas que o projeto usa)
npm install
```

O `npm install` cria a pasta `node_modules/`. Ela é **enorme** e **não** vai para o
Git — é normal, todo mundo gera a sua localmente.

Depois disso, sempre que quiser trabalhar:

```bash
npm run dev
```

O terminal vai mostrar algo assim:

```
  VITE v8.x.x  ready in 400 ms

  ➜  Local:   http://localhost:5173/
```

Abra `http://localhost:5173/` no navegador. Pronto, o site está rodando. 🎉

**Hot reload:** enquanto o `npm run dev` estiver ligado, toda vez que você salvar um
arquivo (`Ctrl + S`) a página atualiza sozinha. Não precisa parar e rodar de novo.

Para **parar** o servidor, clique no terminal e aperte `Ctrl + C`.

---

## 3. Comandos disponíveis

Todos são rodados na raiz do projeto, com `npm run <comando>`:

| Comando | O que faz | Quando usar |
| --- | --- | --- |
| `npm run dev` | Sobe o site em modo desenvolvimento (`localhost:5173`). | O dia todo, enquanto programa. |
| `npm run build` | Verifica os tipos do TypeScript e gera a versão final otimizada na pasta `dist/`. | Antes de abrir um Pull Request e no deploy. |
| `npm run preview` | Abre localmente a versão gerada pelo `build`. | Para conferir se o build ficou ok. |
| `npm run lint` | Procura erros e más práticas no código. | Quando quiser só olhar os problemas. |
| `npm run format` | Formata o código (indentação, aspas, vírgulas). | Antes de commitar. |
| `npm run check` | Lint + formatação + ordem dos imports — **só avisa**, não altera nada. | Para checar o que está errado. |
| `npm run check:fix` | Igual ao anterior, mas **corrige automaticamente** o que der. | O mais usado antes de commitar. |

> **Regra de bolso antes de commitar:** rode `npm run check:fix` e depois
> `npm run build`. Se os dois passarem sem erro, pode commitar tranquilo.

### Lint e formatação

O projeto usa o [Biome](https://biomejs.dev) como **única** ferramenta de lint e
formatação (ele substitui o ESLint + Prettier juntos). As regras ficam em
[biome.json](biome.json).

Instale a extensão **Biome** no VS Code para formatar ao salvar automaticamente.

---

## 4. Variáveis de ambiente (.env)

Variáveis de ambiente são configurações que mudam de acordo com o lugar onde o site
está rodando (sua máquina, homologação, produção). Coisas como a URL da API.

O arquivo [.env.production.example](.env.production.example) é o **modelo**. Ele mostra
quais variáveis existem, mas não tem os valores reais.

Para trabalhar localmente, crie um arquivo chamado `.env.local` na raiz do projeto:

```bash
VITE_API_URL=http://localhost:8000/api
VITE_SANCTUM_URL=http://localhost:8000
VITE_RECAPTCHA_SITE_KEY=sua_chave_publica_aqui
```

Regras importantes:

- O nome **precisa** começar com `VITE_`, senão o Vite ignora a variável.
- Arquivos `.env*` **nunca** vão para o Git (já estão no `.gitignore`). Nunca commite chaves.
- Para ler no código: `import.meta.env.VITE_API_URL`.
- Se você criar ou mudar uma variável, **pare e rode `npm run dev` de novo** — o Vite
  só lê o `.env` quando inicia.
- Só coloque em `VITE_` coisas públicas. Tudo que vira `VITE_` fica visível no navegador
  para qualquer pessoa. Nada de senha ou chave secreta aqui.

---

## 5. Como o projeto está organizado

```
rhdpeople.com.br/
├── index.html              # página HTML base — o React é injetado aqui dentro
├── package.json            # lista de dependências e scripts (npm run ...)
├── vite.config.ts          # config do Vite (plugins e o atalho "@")
├── biome.json              # regras de lint e formatação
├── components.json         # config do shadcn/ui
├── public/                 # arquivos estáticos servidos como estão (favicon, robots.txt)
│
└── src/                    # 99% do seu trabalho acontece aqui
    ├── main.tsx            # ponto de entrada: monta o React na página
    ├── App.tsx             # componente raiz — só chama as rotas
    ├── index.css           # Tailwind + TODAS as cores/tokens do projeto
    │
    ├── assets/             # imagens usadas dentro do código (hero.png, logos...)
    │
    ├── components/         # componentes COMPARTILHADOS por todo o site
    │   └── ui/             # componentes base do shadcn/ui (button, input...)
    │
    ├── config/             # configurações de bibliotecas (ex.: instância do axios)
    │
    ├── layouts/            # "molduras" de página (navbar + conteúdo + rodapé)
    │   └── LandingLayout.tsx
    │
    ├── lib/                # funções utilitárias genéricas
    │   └── utils.ts        # função cn() — junta classes do Tailwind
    │
    ├── routes/             # mapa de URLs do site
    │   └── AppRoutes.tsx
    │
    ├── services/           # serviços globais (ex.: tracking/analytics)
    │
    └── modules/            # o site dividido por áreas de negócio
        └── landing/        # tudo da landing page mora aqui
            ├── api/        # funções que chamam o backend
            ├── components/ # seções da landing (Hero, Pricing, FAQ...)
            ├── content/    # textos e dados fixos das seções (faq, footer, features...)
            ├── lib/        # estilos e ícones usados pelas seções do módulo
            ├── pages/      # páginas que juntam as seções
            └── types/      # tipos TypeScript daquele módulo
```

### A ideia por trás dessa estrutura

O projeto segue uma organização **por módulos** (também chamada de *feature-based*).
A regra mental é simples:

> **Se algo é usado por uma área só, mora dentro do módulo dela.
> Se é usado por várias áreas, sobe para as pastas globais (`src/components`, `src/lib`).**

Hoje só existe o módulo `landing`. Se amanhã surgir uma área de login ou um painel,
criamos `src/modules/auth/` e `src/modules/dashboard/` com a mesma estrutura interna
(`api/`, `components/`, `content/`, `lib/`, `pages/`, `types/`).

### Como a página é montada (o caminho do código)

```
index.html
  └── src/main.tsx          → monta o React
        └── App.tsx
              └── routes/AppRoutes.tsx        → decide qual página abrir pela URL
                    └── layouts/LandingLayout.tsx   → Navbar + <Outlet/> + Footer
                          └── modules/landing/pages/Home.tsx
                                ├── HeroSection
                                ├── FeaturesGrid
                                ├── MobileShowcase
                                ├── PricingBlock
                                ├── LeadForm
                                └── FaqAccordion
```

O `<Outlet />` dentro do `LandingLayout` é o "buraco" onde a página atual é
encaixada. Por isso a Navbar e o Footer aparecem em todas as páginas sem você
precisar repeti-los.

### O atalho `@`

Em vez de escrever caminhos relativos confusos como `../../../components/ui/button`,
use o atalho `@`, que sempre aponta para a pasta `src/`:

```ts
import { Button } from '@/components/ui/button';   // ✅ recomendado
import { Button } from '../../../components/ui/button'; // ❌ evite
```

Isso está configurado em [vite.config.ts](vite.config.ts) e em
[tsconfig.app.json](tsconfig.app.json).

---

## 6. Onde criar novos componentes da landing page

### Regra rápida

| O que você vai criar | Onde colocar |
| --- | --- |
| Uma **seção nova da landing** (ex.: "Depoimentos", "Parceiros") | `src/modules/landing/components/` |
| Um **pedacinho reutilizável só da landing** (ex.: `TestimonialCard`) | `src/modules/landing/components/` |
| Um componente **usado no site inteiro** (ex.: `Loading`, `Modal`) | `src/components/` |
| Um componente **base de UI** (botão, input, card) | `src/components/ui/` — via shadcn, veja a seção 8 |
| Uma **página nova** (nova URL) | `src/modules/landing/pages/` + registrar em `src/routes/AppRoutes.tsx` |
| Os **textos/dados fixos** que a seção exibe | `src/modules/landing/content/` |
| Os **tipos** daquele componente | `src/modules/landing/types/` |
| A **chamada de API** que ele usa | `src/modules/landing/api/` |

### Passo a passo: criando a seção "Depoimentos"

**1. Crie o tipo** em `src/modules/landing/types/testimonial.types.ts`:

```ts
export type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
};
```

> **Por que um tipo separado?** Porque o mesmo formato de dado costuma ser usado
> pelo componente e pela função de API. Deixar num lugar só evita duplicação.

**2. Crie o componente** em `src/modules/landing/components/TestimonialsSection.tsx`:

```tsx
import type { Testimonial } from '../types/testimonial.types';

const testimonials: Testimonial[] = [
  { id: 1, name: 'Maria', role: 'RH', message: 'Mudou nosso processo.' },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground">
          O que dizem sobre nós
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-border bg-card p-6"
            >
              <p className="text-card-foreground">{item.message}</p>
              <footer className="mt-4 text-sm text-muted-foreground">
                {item.name} — {item.role}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**3. Encaixe na página** em [src/modules/landing/pages/Home.tsx](src/modules/landing/pages/Home.tsx):

```tsx
import { TestimonialsSection } from '../components/TestimonialsSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <TestimonialsSection />   {/* ← a ordem aqui é a ordem na tela */}
      <MobileShowcase />
      {/* ... */}
    </>
  );
}
```

Salvou? A seção já aparece no navegador.

### Convenções que o projeto segue

- **Nome do arquivo = nome do componente**, em `PascalCase`: `TestimonialsSection.tsx`.
- Use **`export function NomeDoComponente()`** (export nomeado), não `export default`.
  Os componentes existentes seguem esse padrão.
- Arquivos de tipos usam `camelCase` + sufixo: `testimonial.types.ts`.
- Arquivos de API usam `camelCase` + sufixo: `testimonial.api.ts`.
- Arquivos de conteúdo usam `camelCase` + sufixo: `testimonial.content.ts`. Eles
  exportam uma constante `DEFAULT_...` que o componente usa como valor padrão da
  prop `content` (veja `FaqAccordion` e `LandingFooter`).
- Cada seção da landing começa com uma tag `<section>` e cuida do próprio espaçamento
  vertical (`py-16`, `py-20`...). A `Home` só empilha as seções, sem estilos.
- Use `import type { ... }` quando estiver importando **só tipos** — o TypeScript do
  projeto está configurado com `verbatimModuleSyntax` e exige isso.

---

## 7. Como usar as cores (design tokens)

Todas as cores ficam em um único arquivo: [src/index.css](src/index.css).
**Nunca escreva cor "na mão"** (`#00644e`, `text-[#059669]`) dentro dos componentes.

### Os dois níveis de cor

O projeto tem **dois níveis** e essa é a parte mais importante de entender:

**1. Paleta primitiva** — os valores crus vindos do Figma (`--emerald-700`, `--red-500`,
`--neutral-100`...). É a "caixa de lápis de cor" completa.

**2. Tokens semânticos** — apelidos que dizem **para que serve** a cor, não qual ela é:
`primary`, `background`, `foreground`, `border`, `destructive`...

```
--emerald-700 (#00644e)  →  --primary  →  classe  bg-primary
   "qual cor é"             "para que serve"      "o que você escreve"
```

> **Sempre prefira o token semântico.** Motivo: o token muda sozinho no tema escuro.
> No tema claro `primary` é `emerald-700`; no escuro vira `turquesa-700`.
> Se você escrever `bg-emerald-700` direto, a cor fica travada e quebra no dark mode.

### Tabela de tokens semânticos

Cada token tem um par: o **fundo** e o **texto que vai por cima dele** (`-foreground`).
Use sempre em dupla e o contraste fica garantido nos dois temas.

| Token | Classes Tailwind | Use para |
| --- | --- | --- |
| `background` / `foreground` | `bg-background` `text-foreground` | Fundo e texto padrão da página |
| `primary` / `primary-foreground` | `bg-primary` `text-primary-foreground` | Cor da marca: botões principais, CTAs |
| `secondary` / `secondary-foreground` | `bg-secondary` `text-secondary-foreground` | Botões e blocos secundários |
| `card` / `card-foreground` | `bg-card` `text-card-foreground` | Cartões e caixas de conteúdo |
| `popover` / `popover-foreground` | `bg-popover` `text-popover-foreground` | Menus flutuantes, dropdowns, tooltips |
| `muted` / `muted-foreground` | `bg-muted` `text-muted-foreground` | Fundos suaves e textos de apoio/legenda |
| `accent` / `accent-foreground` | `bg-accent` `text-accent-foreground` | Destaques leves, hover, badges |
| `destructive` / `destructive-foreground` | `bg-destructive` `text-destructive` | Erros, exclusão, alertas graves |
| `warning` / `warning-foreground` | `bg-warning` `text-warning-foreground` | Avisos, atenção |
| `success` / `success-foreground` | `bg-success` `text-success-foreground` | Sucesso, confirmação |
| `border` | `border-border` | Bordas e divisórias |
| `input` | `border-input` | Bordas de campos de formulário |
| `ring` | `ring-ring` | Anel de foco (acessibilidade do teclado) |
| `chart-1` … `chart-5` | `fill-chart-1`, `text-chart-2` | Séries de gráficos |
| `sidebar*` | `bg-sidebar`, `text-sidebar-foreground` | Menu lateral (uso futuro) |

### Exemplos práticos

```tsx
// ✅ Certo — usa tokens, funciona nos dois temas automaticamente
<button className="bg-primary text-primary-foreground rounded-md px-4 py-2">
  Quero uma demonstração
</button>

<div className="bg-card text-card-foreground border border-border rounded-lg p-6">
  <h3 className="text-foreground font-semibold">Plano Pro</h3>
  <p className="text-muted-foreground text-sm">Para times de 10 a 50 pessoas</p>
</div>

<p className="text-destructive text-sm">E-mail inválido.</p>
```

```tsx
// ❌ Errado — cor fixa: não acompanha o tema e não é rastreável no design system
<button className="bg-[#00644e] text-white">Enviar</button>
<div className="bg-white text-gray-900 border-gray-200">...</div>
```

### E quando eu preciso da paleta primitiva?

Só quando a cor **é decorativa e não deve mudar** entre os temas — um gradiente da
marca, uma ilustração, um selo. Nesse caso as classes existem e podem ser usadas:

```tsx
<div className="bg-linear-to-r from-emerald-700 to-turquesa-500" />
```

Famílias disponíveis (escalas `50` a `950`): `emerald`, `green`, `neutral`, `stone`,
`amber`, `lime`, `red`. A `turquesa` tem apenas `500` a `900`.

### Tema escuro

O tema escuro é ativado adicionando a classe `dark` na tag `<html>`. Quando isso
acontece, o bloco `.dark` do [src/index.css](src/index.css) reescreve os tokens e
**o site inteiro muda de cor sozinho** — desde que você tenha usado tokens semânticos.

Se precisar de um ajuste pontual só no escuro, use o prefixo `dark:`:

```tsx
<div className="shadow-sm dark:shadow-none">...</div>
```

### Precisa mudar ou adicionar uma cor?

1. **Mudar uma cor da marca** → altere no bloco de tema (`:root` para claro, `.dark`
   para escuro) apontando para outra cor da paleta. Não mexa nos valores primitivos.
2. **Adicionar uma cor nova da paleta** → adicione o valor no primeiro `:root` **e**
   exponha em `@theme inline` como `--color-nome-500: var(--nome-500);`.
   Sem esse segundo passo o Tailwind não gera as classes.
3. **Criar um token semântico novo** → declare em `:root` **e** em `.dark`, e exponha
   em `@theme inline`. Só assim ele funciona nos dois temas.

### Fontes e arredondamento

Mesma lógica dos tokens de cor:

- `font-sans` e `font-heading` → ambos usam **Inter Variable** (já importada).
- `rounded-sm` até `rounded-4xl` → todos derivam de `--radius` (`0.625rem`).
  Mudar `--radius` no `:root` muda o arredondamento do site inteiro.

---

## 8. Componentes prontos (shadcn/ui)

O projeto usa [shadcn/ui](https://ui.shadcn.com): em vez de instalar uma biblioteca,
você **copia o código do componente** para dentro de `src/components/ui/`. Depois ele é
seu — pode editar à vontade.

Para adicionar um componente:

```bash
npx shadcn@latest add input
npx shadcn@latest add accordion
npx shadcn@latest add dialog
```

O arquivo aparece em `src/components/ui/` já usando os tokens de cor deste projeto.
Aí é só importar:

```tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Enviar</Button>
```

As configurações do shadcn ficam em [components.json](components.json).

### Bibliotecas já disponíveis no projeto

| Biblioteca | Para que serve |
| --- | --- |
| `react-router` | Navegação entre páginas |
| `react-hook-form` + `zod` + `@hookform/resolvers` | Formulários e validação |
| `axios` | Chamadas HTTP à API |
| `zustand` | Estado global compartilhado entre componentes |
| `lucide-react` | Ícones |
| `swiper` | Carrosséis / sliders |
| `date-fns` | Manipulação de datas |
| `clsx` + `tailwind-merge` | Função `cn()` para juntar classes condicionalmente |
| `radix-ui` | Base acessível dos componentes shadcn |

A função `cn()` (em [src/lib/utils.ts](src/lib/utils.ts)) junta classes e resolve
conflitos do Tailwind. Use quando as classes forem condicionais:

```tsx
import { cn } from '@/lib/utils';

<div className={cn('rounded-lg p-4', isActive && 'bg-accent text-accent-foreground')} />
```

---

## 9. Dúvidas frequentes / problemas comuns

**"Rodei `npm run dev` e deu erro de módulo não encontrado."**
Você provavelmente esqueceu o `npm install`, ou alguém adicionou uma dependência nova.
Rode `npm install` de novo.

**"Mudei o `.env` e nada aconteceu."**
Pare o servidor (`Ctrl + C`) e rode `npm run dev` novamente. O Vite só lê o `.env` ao iniciar.

**"A porta 5173 já está em uso."**
Outro `npm run dev` está aberto em outro terminal. Feche-o, ou aceite a porta
alternativa que o Vite sugerir.

**"Minha classe do Tailwind não fez nada."**
Confira se o nome existe (`bg-primary`, não `bg-primaria`) e se não é uma classe
montada com string dinâmica — o Tailwind não enxerga `` `bg-${cor}-500` ``. Escreva a
classe completa ou use um objeto de mapeamento.

**"O `npm run build` falhou mas o `npm run dev` funcionava."**
Normal: o `build` roda o TypeScript de verdade (`tsc -b`) e é mais rigoroso. Leia o erro
— geralmente é uma variável não usada (`noUnusedLocals`) ou um tipo faltando.

**"Não sei se meu código está formatado certo."**
Rode `npm run check:fix`. Ele arruma sozinho quase tudo.

**"Onde eu coloco uma imagem?"**
- Se ela é importada no código (`import hero from '@/assets/hero.png'`) → `src/assets/`.
- Se é acessada por URL fixa (favicon, og-image, robots.txt) → `public/`.

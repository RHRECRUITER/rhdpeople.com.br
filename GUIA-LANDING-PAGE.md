# Guia da Landing Page — RHDPeople

Bem-vindo. Este guia é para quem vai construir as seções da landing page.

Ele assume que você **nunca mexeu neste projeto** e explica cada passo. Não
precisa saber Laravel. Precisa saber HTML básico — o resto está explicado aqui.

Leia até o fim antes de escrever a primeira linha. São 10 minutos e evitam
retrabalho.

---

## 1. O que é a landing page

É a página única que fica em `https://rhdpeople.com.br`. Ela é feita de
**seções empilhadas** — cabeçalho, apresentação, benefícios, perguntas
frequentes, formulário, rodapé.

A página inteira é construída em **React**. Cada seção é um arquivo `.tsx`.

Hoje **só o formulário está pronto**. As outras nove seções ainda não existem:

| Componente a criar | Seção | Status |
| --- | --- | --- |
| `Header.tsx` | Menu do topo | a fazer |
| `Hero.tsx` | Primeira dobra (título grande) | a fazer |
| `Beneficios.tsx` | Lista de benefícios | a fazer |
| `ComoFunciona.tsx` | Passo a passo | a fazer |
| `Diferenciais.tsx` | Diferenciais | a fazer |
| `Sobre.tsx` | Sobre a empresa | a fazer |
| `Faq.tsx` | Perguntas frequentes | a fazer |
| `Formulario.tsx` | Formulário de contato | **pronto** |
| `Cta.tsx` | Chamada final | a fazer |
| `Footer.tsx` | Rodapé | a fazer |

Todos ficam em `resources/js/components/`.

---

## 2. Rodando o projeto na sua máquina

Você precisa do **Laravel Herd** instalado (ele já traz o PHP e o servidor).

Abra o terminal na pasta do projeto e rode, **uma vez só**:

```bash
composer install
npm install
```

Depois, **toda vez que for trabalhar**, deixe este comando rodando num
terminal aberto:

```bash
npm run dev
```

Esse comando fica vigiando seus arquivos. Quando você salva, a página atualiza
sozinha no navegador. **Não feche esse terminal enquanto trabalha.**

Agora abra no navegador:

```
http://rhdpeople.com.br.test
```

> **Não é `.com.br`, é `.com.br.test`** — o `.test` no final é o endereço local
> do Herd. O endereço sem `.test` é o site de verdade, no ar.

Se não abrir, confira se o Herd está rodando e se a pasta do projeto está na
lista de sites dele.

---

## 3. Os arquivos que importam

Ignore o resto do projeto. Você vai mexer em duas pastas:

```
resources/js/
├── Landing.tsx              ← diz quais seções aparecem e em que ordem
└── components/
    ├── Formulario.tsx       ← pronto; use como referência
    ├── Hero.tsx             ← você vai criar arquivos assim
    └── ...

tailwind.config.js           ← cores e fontes da marca (raramente se mexe)
```

Existe também um arquivo `resources/views/landing/index.blade.php`. Ele é só a
"casca" HTML da página e entrega para o React alguns dados que só o servidor
sabe. **Você não precisa mexer nele.**

### O arquivo `Landing.tsx`

É a lista de seções da página. Hoje está assim (resumido):

```tsx
export default function Landing({ action, csrf }: LandingProps) {
  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      <Formulario action={action} csrf={csrf} />
      {/* <Footer /> */}
    </>
  );
}
```

As linhas entre `{/*` e `*/}` são **comentários** — seções que ainda não
existem. Conforme você criar cada uma, descomenta a linha correspondente.

**A ordem das linhas é a ordem na tela**, de cima para baixo.

---

## 4. Criando sua primeira seção — passo a passo

Vamos supor que você foi encarregado do **hero** (a primeira dobra).

### Passo 1 — crie o arquivo

Crie `resources/js/components/Hero.tsx`.

> O nome do arquivo **começa com letra maiúscula** e termina em `.tsx`.
> Isso não é estilo, é obrigatório: o React só trata como componente o que
> começa com maiúscula.

### Passo 2 — escreva a seção

```tsx
export default function Hero() {
  return (
    <section id="hero" className="w-full bg-white px-6 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">

        <h1 className="font-heading text-4xl font-bold text-stone-800 md:text-5xl">
          Gestão de RH sem planilhas
        </h1>

        <p className="max-w-xl font-body text-lg text-neutral-600">
          Controle de ponto, férias e folha de pagamento num lugar só.
        </p>

        <a
          href="#formulario"
          className="rounded-xl bg-emerald-700 px-8 py-4 font-heading text-lg font-semibold text-white hover:bg-emerald-800"
        >
          Agendar demonstração
        </a>

      </div>
    </section>
  );
}
```

### Passo 3 — coloque a seção na página

Abra `resources/js/Landing.tsx` e faça **duas** coisas:

**a)** importe o componente no topo do arquivo:

```tsx
import Hero from './components/Hero';
```

**b)** descomente (ou adicione) a linha da seção, na posição certa:

```tsx
      {/* <Header /> */}
      <Hero />
      <Formulario action={action} csrf={csrf} />
```

### Passo 4 — veja no navegador

Salve e olhe `http://rhdpeople.com.br.test`. Deve aparecer.

Se não aparecer, veja a seção **Deu errado?** no fim deste guia.

---

## 5. As cinco regras do JSX

O código acima parece HTML, mas é **JSX**. É quase igual, com cinco diferenças
que causam 90% dos erros de quem está começando:

**1. É `className`, não `class`.**

```tsx
<div className="p-4">     {/* certo */}
<div class="p-4">         {/* errado */}
```

**2. Toda tag precisa fechar.** Tags que em HTML ficam soltas levam `/`:

```tsx
<img src="/logo.png" alt="Logo" />     {/* certo */}
<br />                                  {/* certo */}
<img src="/logo.png">                   {/* errado */}
```

**3. Só pode devolver UM elemento.** Se precisar de vários lado a lado,
envolva num `<>...</>`:

```tsx
return (
  <>
    <h1>Título</h1>
    <p>Texto</p>
  </>
);
```

**4. Comentário é `{/* assim */}`**, não `<!-- assim -->`.

**5. Sempre termine com `export default`** e o nome do componente — é isso que
permite importar o arquivo em outro lugar.

---

## 6. Como estilizar

Neste projeto **não se escreve CSS**. Nada de `style={{...}}`, nada de criar
arquivo `.css`.

Usamos **Tailwind**: classes prontas direto na tag, cada uma faz uma coisa.

```tsx
{/* ERRADO */}
<div style={{ padding: '20px', background: 'green' }}>

{/* CERTO */}
<div className="p-5 bg-emerald-700">
```

Consulte a lista de classes em **https://tailwindcss.com/docs** (tem busca).

### As cores da marca

Use **sempre** os nomes abaixo. Nunca escreva o código hexadecimal na mão.

| Classe | Cor | Onde usar |
| --- | --- | --- |
| `bg-emerald-700` | verde escuro `#00644e` | fundo de botão principal |
| `hover:bg-emerald-800` | verde mais escuro | botão quando passa o mouse |
| `text-emerald-700` | verde escuro | texto de destaque |
| `text-emerald-600` | verde médio | ícones, selos |
| `bg-emerald-50` | verde bem claro | fundo suave de blocos |
| `text-stone-800` | quase preto | títulos |
| `text-neutral-600` | cinza escuro | textos de parágrafo |
| `text-neutral-400` | cinza claro | textos secundários |
| `bg-neutral-50` | quase branco | fundo de seção |

> **Por quê?** Se o verde da marca mudar, alteramos num arquivo só
> (`tailwind.config.js`) e o site inteiro acompanha. Com hexadecimal escrito à
> mão em 40 lugares, alguém sempre esquece um.

### As duas fontes

| Classe | Fonte | Onde usar |
| --- | --- | --- |
| `font-heading` | Plus Jakarta Sans | títulos e botões |
| `font-body` | Manrope | textos corridos |

Toda tag de texto precisa de uma das duas.

### Celular, tablet e computador

Escreva primeiro para **celular**, depois ajuste para telas maiores.
Sem prefixo = celular. Com prefixo = daquela largura para cima.

```tsx
<h1 className="text-3xl md:text-5xl">
```

Leia como: "tamanho 3 no celular; a partir de tablet (`md`), tamanho 5".

| Prefixo | A partir de |
| --- | --- |
| *(nenhum)* | celular |
| `md:` | 768px — tablet |
| `lg:` | 1024px — computador |

> No `Formulario.tsx` você vai ver classes diferentes, tipo `max-[1080px]:`.
> Aquilo funciona ao contrário (de tal largura **para baixo**) e é de uma
> versão antiga. **Não copie esse padrão** — use `md:` e `lg:`.

---

## 7. Precisa repetir a mesma coisa várias vezes?

Se a sua seção tem uma lista de itens iguais mudando só o texto, **não copie e
cole**. Faça uma lista de dados e percorra com `.map()`:

```tsx
const beneficios = [
  'Controle de ponto',
  'Gestão de férias',
  'Folha de pagamento',
];

export default function Beneficios() {
  return (
    <section className="w-full bg-neutral-50 px-6 py-20">
      <ul className="mx-auto flex max-w-3xl flex-col gap-4">
        {beneficios.map((item) => (
          <li key={item} className="font-body text-lg text-neutral-600">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

Repare em duas coisas:

- **`{}` serve para colocar código dentro do JSX.** `{item}` mostra o valor da
  variável `item`.
- **`key={item}` é obrigatório** dentro de `.map()`. O React usa isso para
  saber qual item é qual. Se esquecer, aparece um aviso vermelho no console.

O `Formulario.tsx` usa esse padrão em vários lugares — vale abrir e olhar.

---

## 8. O que NÃO mexer

| Não mexa em | Motivo |
| --- | --- |
| `public/build/` | é gerado automaticamente; qualquer edição some no próximo build |
| `public/assets/landing/css/` | arquivos vazios de uma versão antiga; não use, não preencha |
| `resources/views/` | é a casca HTML da página; fale com o time antes |
| `app/`, `config/`, `bootstrap/` | é o back-end; fale com quem cuida da API |
| `.env` | configuração local; se precisar mudar algo, pergunte |

Se sentir necessidade de criar um arquivo `.css`, **pare e pergunte**. Quase
sempre existe uma classe do Tailwind que resolve.

---

## 9. Antes de entregar

1. Abra no celular (ou aperte `F12` no navegador e ative o modo celular).
   A seção não pode ter barra de rolagem horizontal.
2. Abra o console do navegador (`F12` → aba Console). Não pode ter erro vermelho.
3. Confira que usou as cores e fontes das tabelas, sem hexadecimal na mão.
4. Confira que não criou nenhum arquivo `.css`.
5. Toda imagem precisa de `alt` descrevendo o que ela mostra.
6. Rode os comandos abaixo e veja se terminam sem erro:

```bash
npx tsc --noEmit
php artisan view:clear
npm run build
```

> O primeiro comando confere se há erro de digitação no código. Os outros dois
> geram a versão final. **O `view:clear` não é opcional** — sem ele, o arquivo
> de estilos pode sair com lixo de outras telas e ficar maior do que precisa.

---

## 10. Como o site vai para o ar (contexto)

Você não precisa fazer isso, mas entender ajuda.

O servidor de `rhdpeople.com.br` **não roda PHP** — ele só entrega arquivos
prontos. Então, antes de publicar, alguém roda:

```bash
php artisan landing:export
```

Esse comando monta a página uma vez e gera uma pasta `dist/` com o HTML e os
arquivos finais, que é o que sobe para o servidor.

Para você isso significa uma coisa: **tudo que você escrever tem que funcionar
sem PHP no servidor**. Se a sua seção precisar de dados vindos do banco ou de
uma API, fale com o time antes de começar.

---

## 11. Deu errado?

| Sintoma | Causa provável |
| --- | --- |
| Página totalmente em branco | erro de JavaScript; abra `F12` → Console e leia o erro |
| A seção não aparece | esqueceu de importar ou de descomentar a linha em `Landing.tsx` |
| `Failed to resolve import` | caminho errado no `import`; confira o nome e as maiúsculas |
| Erro falando em `class` | use `className`, não `class` |
| `Adjacent JSX elements must be wrapped` | dois elementos soltos; envolva num `<>...</>` |
| `Unterminated JSX contents` | faltou fechar alguma tag |
| Aviso sobre `key` | faltou `key={...}` dentro de um `.map()` |
| Nada de estilo, tudo cru | o `npm run dev` não está rodando |
| Salvo e nada muda | o `npm run dev` caiu; olhe o terminal e rode de novo |
| Cor não aparece | classe inventada; confira na busca do site do Tailwind |

Travou por mais de 30 minutos? Pergunte. É mais barato que um dia perdido.

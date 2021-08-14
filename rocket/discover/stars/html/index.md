Hypertext Markup Language (HTML)

É uma linguagem de marcação de hipertexto
(um texto mais rico, no caso com imagens, links, videos e etc).

--------------

# Semantica

## Titulos e parágrafos

- Os títulos são utilizados também para Organizar
os conteúdos de uma página.
- Dificilmentes será necessário mais de 3 headings em uma página
o uso de muitos pode ser indicio de que você pode estruurar
alguns conteudos em outras páginas

```html
  <h1>Sobre mim</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adip</p>

  <h2>Nascimento</h2>
  <h3>Infância</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae impedit similique harum in temporibus earum
    cum, animi quasi aliquid nesciunt aut quae nulla quibusdam nobis perspiciatis et veritatis vel!</p>

  <h2>Trabalho</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, necessitatibus? Eveniet et quia aliquid quo,
    omnis laboriosam veritatis blanditiis sequi excepturi ducimus natus. Aliquam, fuga dolorum? Perferendis iste maxime
    cupiditate!</p>

  <a href="">Saiba mais</a>
```

-------------

## Listas

- Podem ser ordenadas (ol) ou podem ser não ordenadas (ul).

```html

<h1>Suco detox</h1>
<h2>Ingredientes: </h2>

<ul>
  <li>3 folhas de couve;</li>
  <li>1 laranja;</li>
  <li>1 pedacinho de gengibre;</li>
  <li>300ml de água;</li>
  <li>Adoçante a gosto;</li>
  <li>Gelo a gosto;</li>
</ul>

```

-------------

## Citation

- Para citar uma página, você pode usar o atributo `cite`
- Para citar um texto, você pode usar o atributo `blockquote`

```html
<blockquote cite="www.w3.org/1999/xhtml">
  O elemento HTML indica que um texto externo foi citado.
</blockquote>


<p>De acordo com <cite>Essa página aqui</cite></p>
```

----------

## Abbreviation

- Dá um pouco de legibilidade ao seu documento ao abreviar palavras.

```html
<p>Usamos <abbr title="Hypertext Markup Language">HTML</abbr>
  para estrutura nosso documentos da web.
</p>

```

-----------

## Detalhes de conteto para quem criou o HTML

```html
<address>
  <p>João Bispo</p>
  <strong>São Paulo, SP</strong>
</address>
```

-------------

## Listas de descrição

-

```html
<h2>Glossário</h2>
<dl>
  <dt>Hypertext</dt>
  <dd>É um hiper texto com possibilidades....</dd>

  <dt>Markup</dt>
  <dd>Marcação de texto</dd>
</dl>
```

-------

## Representando códigos

```html
<pre>
  <code>
    document
      .querySelect('body');
  </code>
</pre>
```

----------

## Elementos genéricos

```html
<div>
  A handbook...
</div>
<span>Other text</span>
```

-------------

## Links

- Atributos:
  - `href`: define o link
    - url completa
    - url relativa
    - fragmento
    - email
    - telefone
    - etc
  - `target`: define o tipo de ação do link
    - `_blank`: abrir nova janela
    - `_self`: abrir no mesmo frame
    - `_parent`: abrir no frame pai
    - `_top`: abrir no frame top
  - `download`: define o nome do arquivo a ser salvo

```html
<p>Encontre-me</p>
<ul>
  <li><a href="http://google.com" target="_blank">Google</a></li>
  <li><a href="mailto:email@example.com">Email</a></li>
  <li><a href="tel:+1.123.123.123">Telefone</a></li>
</ul>

<p>Saiba mais</p>
<ul>
  <li><a href="#about">Sobre mim</a></li>
  <li><a href="#history">História</a></li>
  <li><a href="#works">Trabalhos</a></li>
</ul>

```

---------------------

## Tabelas

- Prós:
  - Visualização dos dados via linahs e colunas
  - Boa acessibilidade para leitores de tela
- Contras:
  - Pouco flexível
  - Precisa de estilização para melhor visualização
- Não usar:
  - Para criar seu layout

Tabela simples:

```html
<table>

  <caption>Pessoas por idade</caption>

  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>José</td>
      <td>17</td>
    </tr>
    <tr>
      <td>Ana</td>
      <td>18</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>Total</td>
      <td>2 Pessoas</td>
    </tr>
  </tfoot>

</table>
```

Tabela complexa:

```html
<table>

  <caption>Produzidos X vendidos por loja</caption>

  <colgroup>
    <col />
    <col span="2" style="background-color: yellow" />
    <col span="2" style="background-color: orange" />
  </colgroup>

  <thead>
    <tr>
      <th rowspan="2"></th>
      <th colspan="2" scope="colgroup">Loja 1</th>
      <th colspan="2" scope="colgroup">Loja 2</th>
    </tr>
    <tr>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td scope="row">Colheres</td>
      <td>50</td>
      <td>20</td>
      <td>20</td>
      <td>10</td>
    </tr>
    <tr>
      <td scope="row">Mouse</td>
      <td>200</td>
      <td>150</td>
      <td>1000</td>
      <td>100</td>
    </tr>
  </tbody>


</table>
```

--------------

## Cabeçalho

As tags meta auxiliam no complemento de informações/configurações adicionais na página, como:

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="icon" href="favicon.ico" type="image/x-icon"/>

</head>
```

Para colocar logo/ícone de favorito:

```html
<head>
  <link rel="icon" href="favicon.ico" type="image/x-icon"/>
</head>
```

Metas que incrementam o SEO

```html
<head>
  <meta name="author" content="João Bispo">
  <meta name="description" content="Compilado de projetos">

  <meta name="robots" content="nofollow">
  <!-- index, follow, noindex, nofollow -->
</head>
```

Metas social

```html
<head>
  <!-- OpenGraph: facebook -->
  <meta property="og:image" content="./image.png">
  <meta property="og:description" content="Texto especial para aparecer">
  <meta property="og:title" content="Titulo da pagina no facebook">


  <!-- Twitter -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@joaobispo">
  <meta name="twitter:creator" content="@joaobispo">
  <meta name="twitter:title" content="Titulo da pagina no twitter">
  <meta name="twitter:description" content="Texto especial para aparecer">
  <meta name="twitter:image" content="./image.png">

</head>
```

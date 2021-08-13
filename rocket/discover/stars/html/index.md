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

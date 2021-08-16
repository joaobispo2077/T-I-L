# Seletores

- Víncula um elemento HTML à um estilo CSS.

## Tipos

- Element Selector
  - Todos elementos HTML.
- Id Selector
  - Elemento HTML com um identificador único, tendo o atributo `id`.
- Class Selector
  - Elemento HTML com uma classe, tendo o atributo `class`.
- Attribute selector
  - Elemento HTML com um atributo, tendo o atributo `attribute` específico.
- Pseudo-class selector
  - Pseudo elemento HTML, como hover, focus e etc...

- É possível selecioncar múltiplos seletores usando vírgula entre eles, como:

```css
.small, p, [title], .short:hover {
  font-size: 0.8em;
}

```

------------

## Combinators

Combinadores são usados para aumentar a complexidade de seleção de elementos.

### Descendant combinator

- Identificado por um espaço entre os seletores.
- Busca um elemento dentro de outro, como:

```css
.parent .child {
  color: red;
}

body article h2 {
  font-size: 1.2em;
}
```

### Child combinator

- Identificado pelo sinal de `>` entre dois seletores.
- Busca um elemento que está diretamente dentro de outro, como:

```html
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>

  <ul>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</body>
```

```css
body > ul > li {
  color: brown;
}
```

- No caso selecionaria somente o Item 1!

--------------

### Adjacent sibling combinator

- Identificado pelo sinal de `+` entre dois seletores.
- Busca um elemento que está diretamente ao lado de outro (seleciona o elemento à direita), como:

```css
h1 + p {
  font-size: 1em;
}
```

### Gneral sibling combinator

- Identificado pelo sinal de `~` entre dois seletores.
- Busca todos elementos que estão diretamente ao lado de outro (seleciona os elementos à direita), como:

```css
h1 ~ p {
  font-size: 1em;
}
```

-----------------

## Pseudo-classes

É um tipo de seletor que seleciona um elemento em um estado específico.

- Pseudo-classes começam com 2 pontos seguidos do nome da pseudo class, como `:pseudo-class`

### Selecionar elementos com pseudo-classes

- `:first-child` - seleciona o primeiro elemento filho do elemento selecionado.
- `:last-child` - seleciona o último elemento filho do elemento selecionado.
- `:nth-child(n)` - seleciona o elemento filho n-ésimo do elemento selecionado.
- `:nth-of-type(n)` - seleciona o elemento n-ésimo do tipo do elemento selecionado.
- `:nth-child(odd)` - seleciona os elementos filhos ímpares do elemento selecionado.
- `:nth-child(even)` - seleciona os elementos filhos pares do elemento selecionado.

### Ações do usuário

- `:hover` - seleciona o elemento quando o mouse passa sobre ele.
- `:active` - seleciona o elemento quando o mouse está pressionado sobre ele.
- `:focus` - seleciona o elemento quando o foco está em ele.
- `:visited` - seleciona o elemento quando ele foi visitado.
- `:target` - seleciona o elemento quando ele é o alvo do link.
- `:enabled` - seleciona o elemento quando ele está habilitado.
- `:disabled` - seleciona o elemento quando ele está desabilitado.
- `:checked` - seleciona o elemento quando ele está marcado.

-----------------

## Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS.

- Tem em seu formato o seletor seguido do pseudo-element, como `::pseudo-element`.

## Podem ser

- `::before` - antes do elemento.
- `::after` - depois do elemento.
- `::first-line` - primeira linha do elemento.
- `::first-letter` - primeira letra do elemento.
- `::selection` - seleção do elemento.
- `::backdrop` - fundo do elemento.
- `::placeholder` - placeholder do elemento.

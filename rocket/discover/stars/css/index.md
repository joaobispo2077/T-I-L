# Cascading style sheet (CSS)

É uma linguagem de style sheet que define a forma de apresentação de elementos de um documento HTML.

------------

## Seletores

Permite capturar um/ou mais elementos HTML para adicionar estilo.

### Tipos

- Global `*`
- Element `h1, h2, p, span, div`
- ID `#idname`
- Class `.classname`
- Attribute `[attr]`
- Pseudo-class `:hover`
- Pseudo-element `::before`

------------

## Box model

- Elementos HTML são caixas
- Cada elemento tem Posicionamento, tamanhos, espaçamentos, bordas, cores, alinhamento

------------

## CSS no HTML

### Inline

- Atributo style das tags html.

```html
  <p style="color: red;">
```

### Tag style

- Usando a tag style dentro da tag head.

```html
  <style>
    body {
      background-color: #f0f0f0;
    }
  </style>
```

### Tag link

- Importando o arquivo css pelo HTML usando a tag link.

```html
  <link rel="stylesheet" href="style.css">
```

### Importando

- Importando o fontes no css com o import.

```css
  @import url('http://link.fonts.googleapis.com/');
```

------------

## A cascata

Basicamente, é a ordem de prioridade de css. De qual estilo será aplicado a um elemento dependendo de 3 fatores:

- Origem do estilo
- Especificidade do seletor
- Importância do estilo

### Origem do estilo

Inline > tag style > tag link

### Especificidade do seletor

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

- 0 - Universal selector, combinators e negation pseudo-class (:not())
- 1 - Element selector (type) and pseudo-elements (::before, ::after)
- 10 - Class selectors (class) and attributte selectors ([type="radio"])
- 100 - ID selectors (id)
- 1000 - Inline style selectors (style)

#### Regra !important

- Para que um estilo seja aplicado, ele deve ser maior que o valor de todos os outros estilos. LOGO, ela quebra o fluxo normal da cascata.
- Deve ter seu uso moderado e evitado.

------------

## At rules

- É referente ao comportamento de um estilo CSS.
- Começa com o sinal de `@` seguido de um identificador e seu valor.

## Exemplos comuns

- `@import` Incluir um arquivo CSS externo.
- `@media` Define regras condicionais para dispositivos.
- `@font-face` Define uma fonte externa.
- `@keyframes` Define um efeito animado.

------------

## Shorthand properties

- Junção de várias propriedades numa única.
- Torna a sintaxe resumida e continua legível.

```css
body {
  /*background properties*/
  background-color: #f0f0f0;
  background-image: url(bg.png);
  background-repeat: no-repeat;
  background-position: left top;


  /*background shorthand property*/
  background: #f0f0f0 url(bg.png) no-repeat left top;


  /*font properties*/
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  line-height: 1.5;

  /*font shorthand property*/
  font: bold italic 14px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

------------

## Funções

- Funções são uma forma de criar estilos customizados.
- São escritas como `func(param)`

### Exemplos

```css
body {
  color: hsl(0, 100%, 50%);
  width: calc(100% - 20px);
}

```

------------

## Vendor Prefixes

- Permite que os browsers adicionem `features` de CSS a fim de colocar alguma novidade que não é suportada por todos os browsers.

```css
p {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
```

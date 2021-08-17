# Fontes

A tipografia transmite uma mensagem.

- Negrito -> Você está dando ênfase.
- Tamanho -> Caixa alta, você está gritando com alguém.
- Estilo -> Numa fonte mais desenhada, você está demonstrando ser descontraido.

## Basic font properties

- `font-family`
- `font-weight`
- `font-style`
- `font-size`

### font-family

- Tipo de fonte de um elemento.
- Lista de fontes e ordem de preferencia.
  - Exemplo: `Arial, Helvetica, sans-serif`
- Inclui **fallback** para browsers que não suportam a fonte, ou caso se as primeiras não serem carregadas por algum motivo.

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

### serif vs sans-serif

- serif -> fonte mais arredondada.
- sans-serif -> fonte mais reta.

### font-weight

- O peso da fonte define o quão forte ou fraca ela será, e depende do suporte da família de fontes.
- Pode ser:
  - `normal` -> fonte normal.
  - `bold` -> fonte forte.
  - `bolder` -> fonte mais forte.
  - `lighter` -> fonte mais fraca.
  - `100` -> fonte muito fraca.
  - `200` -> fonte fraca.
  - `300` -> fonte média.
  - `400` -> fonte normal.
  - `500` -> fonte forte.
  - `600` -> fonte mais forte.
  - `700` -> fonte mais forte.
  - `800` -> fonte muito forte.
  - `900` -> fonte muito forte.

### font-style

- Pode definir o estilo da font:
  - `normal` -> fonte normal.
  - `italic` -> fonte italica.
  - `oblique` -> fonte oblíqua.
- Depende do suporte da família de fontes.

### font-size

- Define o tamanho da fonte.

------------

## Mais estilos na font

### font-variant

- Define uma variação daquela fonte num determinado valor.

```css
p {
  font-variant: small-caps;
}
```

### font-stretch

- Define o quanto a fonte poderá esticar/diminuir.

### letter-spacing

- Adiciona espaçamento entre letras.

### word-spacing

- Adiciona espaçamento entre palavras.

### line-height

- Define espaçamento entre linhas.

### text-transform

- Tranforma um texto, podendo converter letras maiúsculas para minúsculas, minúsculas para maiúsculas, ou vice-versa.

### text-decoration

- Define a forma de decoração do texto. Podendo ser:
  - `none` -> sem decoração.
  - `underline` -> decoração de sublinhado.
  - `overline` -> decoração de sublinhado.
  - `line-through` -> decoração de riscado.
  - `blink` -> decoração de flash.

### text-align

- Define o alinhamento do texto. Podendo ser:
  - `left` -> alinhamento à esquerda.
  - `right` -> alinhamento à direita.
  - `center` -> alinhamento central.
  - `justify` -> alinhamento justificado.

### text-shadow

- Define uma sombra para o texto. Podendo receber:

```css
p {
  text-shadow: 1px 1px 1px #000;
}
```

----------------

## Shorthand

```css
p {
  font: normal normal normal 16px/1.5 "Helvetica Neue", Arial, sans-serif;
}
```

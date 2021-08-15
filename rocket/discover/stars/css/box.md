# Box Model

- Fundamental para fazer layouts.
- É uma caixa retangular, que possu propriedade de uma caixa 2D.

| Tamanho (largura X altura) | width \| height |
|----------------------------|-----------------|
| Conteúdo                   | content         |
| Bordas                     | border          |
| Preenchimento interno      | padding         |
| Espaços fora da caixa      | margin          |

- Cada elemento da página será considerado essa caixa.

------------------------

## Box sizing

- A froma com que é calculado o tamanho total da caixa.
- Existem duas: content-box e border-box.
- Se o box-sizing for `content-box`, o tamanho total da caixa é o tamanho do conteúdo somado aos espaçamentos internos.
- Se o box-sizing for `border-box`, o tamanho total da caixa é o tamanho da caixa, sem contar os espaçamentos internos.

```css
div {
  box-sizing: border-box;
}
```

------------------------

## Display block vs display inline

- Como as caixas se comportam no fluxo da página.
- Comportamento externo das caixas entre elas

| block                                                          | inline                                                   |
|----------------------------------------------------------------|----------------------------------------------------------|
| Ocupa toda a linha, colocando o  próximo elemento abaixo desse | Elemento ao lado do outro                                |
| width e height são respeitados                                 | width e height não funcionam                             |
| padding, margin, border irão  funcionar normalmente            | Somente valores horizontais de margin,  padding e border |

Exemplos de elementos que por padrão tem esses displays:
block: `<p>, <div>, <section>`e todos headings.
inline: `<a>, <strong>, <span> <em>`.

------------------------

## margin

- Espaço fora da caixa.
- Espaço entre elementos.
- Shorthand funciona no sentido horário
- Para elementos na vertical ocorre o margin collapsing (basicamente as margens se convergem para o maior valor e não se somam).
- Para elementos na vertical não ocorre o margin collapsing.

```css
div {
  margin: 12px 16px 10px 4px;
  margin: 12px 16px 0; /* equivalente a top left/right bottom */
  margin: 8px 16px;
  margin: 8px;

}
```

------------------------

## padding

- Preenchimento dentro da caixa.
- Shorthand funciona no sentido horário
- Para elementos na vertical ocorre o margin collapsing (basicamente as margens se convergem para o maior valor e não se somam).
- Para elementos na vertical não ocorre o margin collapsing.

```css
div {
  padding: 12px 16px 10px 4px;
  padding: 12px 16px 0; /* equivalente a top left/right bottom */
  padding: 8px 16px;
  padding: 8px;

}
```

------------------------

## border e outline

- São as bordas da caixa.
- São usadas para delimitar o conteúdo da caixa.
- Possui valores para `<border-style>` | `<border-width>` | `<border-color>`
  - style: `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset`.
  - width: `thin`, `medium`, `thick` e length.
  - color: `<color>`.

```css
div {
  border: 1px solid black;
}
```

### E outline?

- Diferem em 4 pontos:
  - `outline`: define o contorno da caixa.
  - `outline-color`: define a cor do contorno.
  - `outline-style`: define o estilo do contorno.
  - `outline-width`: define a largura do contorno.
  - Não modifica o tamanho da caixa, pois não é parte do box model.
  - Poderá ser diferente de retangular.
  - Não permite ajustes individuais.
  - Usado pelo user agent para acessibilidade.

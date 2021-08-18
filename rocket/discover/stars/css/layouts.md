# Page layouts

- Tables
- Floats and clear
- Frameworks and grid system
- flexbox
- grid

-----------

## Posicionamentos

O posicionamento do elemento, permite controlar na página será o local
de sua exibição. De forma, que seja possíevl alterar o fluxo normal da
exibicação dos elementos.

- Property name: position
- Values: static | relative | absolute | fixed

### static

É o padrão dos elementos e significa que os elementos vão seguir o fluxo normal da página (um abaixo do outro).

### relative

- Torna disponível a manipulação de 5 propriedades:
  - top
  - right
  - bottom
  - left
  - z-index
- Não afeta os demais elementos, apenas o elemento que está sendo alterado.

### absolute

- Torna disponível as propriedades de relative.
- Permite que o elemento seja posicionado em uma posição absoluta, que por default é absoluto em relaçaão página.
- Se o elemento acima for `relative`, o posicionamento absoluto será referente ao elemento relativo.

### fixed

- Ele sai do fluxo normal da página e fica fixo numa posição do viewport.

### element stacking

- Elementos mais abaixo na estrutura HTML, tem prioridade no eixo Z (profundidade).
- Para forçar o elemento a se manter em uma posição, é alterar o valor da propriedade `z-index`.

### flexbox

- Permite posicionar elementos dentro da caixa.
- Controle em uma dimensão (horizontal ou vertical).
- Alinhamento, direcionamento, ordenar e tamanhos.

### flex-direction

- Qual direção ddo flex: horizontal, ou vertical.

### alinhamento

- justify-content.
- align-items.

### grid

- Posicionamento dos elementos dentro da caixa.
- Posicionamento horizontal e vertical ao memso tempo.
- Pode ser flexível ou fixo.
- Cria espaços para os elementos internos da caixa habitarem.

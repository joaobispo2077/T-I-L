# Form

## Estrutura

- Elemento que definirá um formulário.
- é um container no estilo `<section>` `<footer>`.
- contém um elemento `<form>`.

Atributos básicos:

- action (string): define o endereço do formulário.
  - default: `#`.
- method (string): define o método de envio do formulário.

Exemplo:

```html
<form action="www.api.com/users" method="PATCH">

</form>
```

### fieldset and legend

- `<fieldset>`: define um conjunto de campos
  - agrupamento de campos.
  - mesmo propósito.
  - semântico.
  - acessível.

- Atributos especiais:
  - `disabled`: desabilita o conjunto de campos.
  - `form`: define o formulário que o conjunto de campos pertence pelo
  id (faz com que o fieldset não precise estar detro do formulário).
  - `name`: define o nome do conjunto de campos.

- `<legend>`: define um título para o conjunto de campos.
  - semântico.
  - acessível.

- Atributos especiais:
  - primeiro elemento dentro do fieldset.

```html
<form id="register" action="">
  <fieldset form="register" name="user-contact">
    <legend>Cadastro</legend>

    <label for="name">Nome</label>
    <input type="text" name="nome" id="nome" placeholder="Digite o nome..." />
  </fieldset>
</form>
```

### label and button

- `<label>`: define um texto para um campo.
  - semântico.
  - acessível.

- Atributos especiais:
  - `for`: define o id do campo.
  - só funciona com elementos específicos:
    - `<input>`
    - `<select>`
    - `<textarea>`
    - `<button>`
    - `<progress>`
    - `<meter>`
    - `<output>`

```html
    <label for="name">Nome</label>
    <input type="text" name="nome" id="nome" placeholder="Digite o nome..." />
```

### button

- `<button>`: define um botão.
  - semântico.
  - acessível.

- Atributos especiais:
  - `type`: define o tipo do botão.
    - `submit`: define o botão de envio.
    - `reset`: define o botão de reset (limpar formulário).
    - `button`: define o botão de outro tipo.
  - `disabled`: desabilita o botão.
  - `form`: define o formulário que o botão pertence pelo id.
  - `name`: define o nome do botão.
  - `autoFocus`: define o foco no botão.
  - `value`: define o valor do botão.

### datalist

- `<datalist>`: define uma lista de opções para um campo.
  - lista de valores como sugestão a uma tag input.
  - valores sugestivos e não obrigatórios.
  - Usuário pode colocar um dos valores ou colocar um diferente da sugestão.
  - semântico.
  - acessível.

- Tipos de input suportados:
  - `text`
  - `search`
  - `url`
  - `email`
  - `tel`
  - `number`
  - `range`
  - `color`
  - `date`
  - `month`
  - `week`
  - `time`
  - `datetime-local`

```html

<input type="text" list="fruits">
<datalist id="fruits">
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="banana">Banana</option>
  <option value="pear">Pear</option>
  <option value="peach">Peach</option>
  <option value="plum">Plum</option>
  <option value="grape">Grape</option>
  <option value="kiwi">Kiwi</option>
  <option value="watermelon">Watermelon</option>
  <option value="strawberry">Strawberry</option>
  <option value="pepper">Pepper</option>
  <option value="potato">Potato</option>
  <option value="tomato">Tomato</option>
  <option value="cucumber">Cucumber</option>
  <option value="carrot">Carrot</option>
  <option value="onion">Onion</option>
  <option value="garlic">Garlic</option>
  <option value="lemon">Lemon</option>
  <option value="lime">Lime</option>
  <option value="cauliflower">Cauliflower</option>
  <option value="broccoli">Broccoli</option>
  <option value="mushroom">Mushroom</option>
</datalist>


```

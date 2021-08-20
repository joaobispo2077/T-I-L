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

---------------------------

## tag input and types

- Atributos comuns:
  - `type`: define o tipo do input.
  - `autocomplete`: define o comportamento de autocompletar do input.
  - `autofocus`: define o foco no input (1 por página).
  - `disabled`: desabilita o input.
  - `readonly`: define o input como somente leitura.
  - `required`: define o input como obrigatório.
  - `placeholder`: define o texto de placeholder (password, search, tel, text, url).
  - `value`: define o valor do input.
  - `name`: define o nome do input.
  - `id`: define o id do input.
  - `form`: define o formulário que o input pertence pelo id.
  - `title`: define o texto de ajuda.

- Não são comuns a todos tipos:
  - `list`: define a lista de opções para um input.
  - `min`: define o valor mínimo do input.
  - `max`: define o valor máximo do input.
  - `step`: define o passo do input.

### password

- `<input type="password">`: define uma caixa de texto como senha
- `minlength`: define o número mínimo de caracteres.
- `maxlength`: define o número máximo de caracteres.
- `size`: define o tamanho da caixa de texto.
- `pattern`: define o padrão de caracteres.
- `inputmode`: define o modo de entrada.
  - `numeric`: define o modo numérico no smartphone.
- `autocomplete`: define o comportamento de autocompletar do input.
  - `on`: permite a sugestão de new-passord ou current-password.
  - `off`: não permite a sugestão de new-password ou current-password.
  - `new-password`: permite a sugestão de new-password.

```html
<form action="">
  <input
    type="password"
    title="Coloque no minimo 4 caracteres e no maximo 8 caracteres"
    size="8"
    minlength="4"
    maxlength="8"
    pattern="[0-9a-fA-F]{4,8}"
    inputmode="numeric"
    required
  />
</form>
```

### email

Exemplo de input que aceita somente email de forma obrigatória

```html
<form action="">
  <input type="email" required minlength="8"/>
</form>
```

Exemplo de input que aceita múltiplos emails separados por vírgula:

```html

<form action="">
  <input type="email" required multiple />
</form>
```

### url

Exemplo de input com url.

```html
<form action="">
  <input
    type="url"
    placeholder="https://example.com"
    spellcheck
  />
  <button type="submit">Enviar</button>
</form>
```

### file

Exemplo de envio de arquivo:

```html
<form action="" method="POST" enctype="multipart/form-data">
  <input type="file" accept=".js" />
  <input type="file" accept="image/*" multiple />
  <input type="file" accept="audio/*" />
  <input type="file" accept="video/*" />
  <button type="submit">Enviar</button>
</form>
```

### color

Exemplo de envio de cor:

```html
<form>
  <input type="color" />
  <button type="submit">Enviar</button>
</form>
```

- É possível sugerir cores com o uso de um datalist.

### checkbox

Exemplo de single checkbox :

```html
<form>
  <label for="subscribe">Receber notificações</label>
  <input type="checkbox" id="subscribe" name="subscribe" checked value="true" />
  <button type="submit">Enviar</button>
</form>
```

Exemplo de multiple checkbox:

```html
<form>
  <fieldset>

    <legend>Choose your interests</legend>

    <input type="checkbox" id="coding" name="insterests" />
    <label for="coding">Coding</label>

    <input type="checkbox" id="playing" name="insterests" />
    <label for="playing">Jogar</label>


  </fieldset>
  <button type="submit">Enviar</button>
</form>
```

### hidden

- Invisível ao usuário.
- Será enviado com o formulário.
- Não receberá foco.
- Leitores de tela ignoram esse campo.

```html
<form>
  <input type="hidden" id="timestamp" name="timestamp" value="1629486555498" />
  <button type="submit">Enviar</button>
</form>
```

### radio

- Criado para selecionar uma única opção em um grupo de opções.
- Será enviado com o formulário.
- Não receberá foco.
- Leitores de tela ignoram esse campo.

```html
<form>
  <fieldset>

    <legend>Bora tomar um café?</legend>

    <label for="yep">Sim</label>
    <input type="radio" id="yep" name="coffe" value="true" checked />
    <label for="nop">Não</label>
    <input type="radio" id="nop" name="coffe" value="false" />


  </fieldset>
  <button type="submit">Enviar</button>
</form>

```

### textarea

- Mais de uma linha.
- Útil para textos longos.

- Atributos:
  - `rows`: define o número de linhas.
  - `cols`: define o número de colunas.
  - `id`: define o id do textarea.
  - `name`: define o nome do textarea.
  - `wrap`: define o modo de quebra de linha  ('soft', 'hard', 'off').
  - `minlength`: define o número mínimo de caracteres.
  - `maxlength`: define o número máximo de caracteres.
  - outros comuns a inputs como `autocomplete`, `placeholder`, `disabled`
  `placeholder`, `required` e `form`.

```html
<form>
  <fieldset>

    <legend>Bora tomar um café?</legend>

    <label for="yep">Sim</label>
    <input type="radio" id="yep" name="coffe" value="true" checked />
    <label for="nop">Não</label>
    <input type="radio" id="nop" name="coffe" value="false" />


  </fieldset>
  <button type="submit">Enviar</button>
</form>

```

### select

- Atributos:
  - `value`: define o valor selecionado.
  = `multiple`: define se o select será multiple.
  - `size`: define a quantidade de opções visíveis.

Exemplo de select sem multiple:

```html
<form>


  <label for="cars">Selecione um carro</label>
  <select name="car" id="cars">
    <option value="">Selecione o modelo</option>
    <option value="fiat">Uno</option>
    <option value="audi">A3</option>
  </select>


  <button type="submit">Enviar</button>
</form>
```

Exemplo de select com multiple

```html
<form>


  <label for="cars">Selecione um carro</label>
  <select name="car" id="cars" multiple>
    <option value="">Selecione o modelo</option>
    <option value="fiat">Uno</option>
    <option value="audi">A3</option>
  </select>


  <button type="submit">Enviar</button>
</form>
```

### optgroup

- É usado quando à uma separação entre os tipos de opções de um select.
- Para grupar opções.

```html
<label for="cars">Please choose your pet: </label>
<select name="car" id="pets" multiple>
  <optgroup label="4-legged pets">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
  </optgroup>
  <optgroup label="flying pets">
    <option value="parrot">Parrot</option>
    <option value="macaw">Macaw</option>
  </optgroup>
</select>

```

### search

- Usado para pesquisar/buscar algo.

```html
<form action="">

  <datalist id="searchTerms">
    <option>Mac</option>
    <option>Win</option>
    <option>Lin</option>
  </datalist>
  <input aria-label="Campo de pesquisa" placeholder="Search Terms..." type="search" name="q" list="searchTerms" />

  <button type="submit">Pesquisar</button>
</form>

```

### number

```html

<form action="">

  <input type="number" min="2" max="999" step="10" />
  <button type="submit">Enviar</button>
</form>

```

### range

```html
<form action="">

  <input type="range" min="2" max="100" step="5" />
  <button type="submit">Enviar</button>
</form>
```

### date and time

```html
<form action="">

  <input type="date" />
  <input type="datetime-local" />
  <input type="month" />
  <input type="week" />
  <button type="submit">Enviar</button>
</form>
```

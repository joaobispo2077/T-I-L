# Cores

## Tipos

- `background-color` - Cor de fundo da caixa.
- `color` - Cor do texto.
- `border-color` - Cor da borda da caixa.
- `fill` - Cor de preenchimento da caixa (svg).

## Valores

Podemos definir os valores por:

- `keyword` (blue, cian, gray, transparent, white, black)
- `hexadecimal` - `#990011` (red, green, blue)
- funções:
  - `rgb` - `rgb(255, 0, 0)` (red, green, blue)
  - `rgba` - `rgba(255, 0, 0, 0.5)` (red, green, blue, alpha)
  - `hsl` - `hsl(0, 100%, 50%)` (hue, saturation, lightness)
  - `hsla` - `hsla(0, 100%, 50%, 0.5)` (hue, saturation, lightness, alpha)

### keyword and named values

Exemplo:

```css
.box {
  color: currentcolor; /*usa a cor da caixa acima*/
}

```

### hexadecimal

- Valores de 0 a F, onde zero é o tom escuro e F o tom claro.

Exemplo:

```css
.box {
  color: #00009988; /*azul com transparência*/
}
```

### RGB

- Valores de 0 a 255.

Exemplo:

```css
.box {
  color: rgba(0,250,0,.8);
}
```

### HSL

- Valores de 0deg a 360deg do hue, porcentagem da saturação e porcentagem da luminosidade.

Exemplo:

```css
.box {
  color: hsl(180,100%, 70%, .6);
}
```

### global values

Podem ser:

- inherit
  - Herda a cor do elemento acima.
- initial
  - Retorna a cor inicial.
- unset.
  - Remove a definição de cor.

--------------------------------

## background

Exemplo de manipulação de background:

```css
header {
  background-color: rgb(55,100,50);
  background-image: url(/images/bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-origin: content-box;
  background-clip: content-box;
  background-attachment: fixed;

  background:  rgb(55,100,50) url(/images/bg.jpg) no-repeat center center / contain content-box content-box fixed;
}
```

Também possível definir um gradiente como background.

- com `linear-gradient` e `radial-gradient`.
Exemplo com gradiente:

```css
.box {
  background: linear-gradient(red, yellow);
}
```

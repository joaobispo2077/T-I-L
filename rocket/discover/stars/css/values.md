# Tipos númericos

- `<integer>`: número inteiro como -55 ou 120.
- `<number>`: número decimal como -55.123 ou 120.456.
- `<dimension>`: É um `<number>`com uma unidade de medida junto, como 90deg, 2s, 8px...
- `<percentage>`: representa a fração de outro número como -55% ou 120%.

## Unidades comuns

- `<length>`: unidade de medida de largura, altura, comprimento, distância, etc. Como: px, em, vw.
- `<angle>`: unidade de ângulo, como deg, rad, turn.
- `<time>`: unidade de tempo, como segundos, minutos, horas, etc. Como: s, ms, h, etc.
- `<resolution>`: unidade de resolução, como dpi, ppi, dpcm, etc.

------------

# Distâncias absolutas `<length>`

São fixas e não alteram seu valor.

| Unidade | Nome               | Equivalência        |
|---------|--------------------|---------------------|
| cm      | Centímetros        | 1cm = 96px/2.54     |
| in      | Inches (polegadas) | 1in = 2.54cm = 96px |
| px      | Pixels             | 1px = 1/96th of 1in |

- O mais cmum e mais utilizado é o **px**.

# Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou tamanho da tela.

- Benefício: Maior adaptação aos diferentes tipos de tela.

| Unidade | Relativo a                                    |
|---------|-----------------------------------------------|
| em      | Tamanho da font do pai                        |
| rem     | Tamanho da fonte do elemento raiz (root/html) |
| vw      | 1% da viewport width                          |
| vh      | 1% da viewport height                         |

------------

# Porcentagem %

- Em muitos casos é tratado da mesma maneira que as distâncias `<length>`.
- Sempre será relativo a algum valor do elemento pai.

------------

# Posições `<position>`

Representa um conjunto de coordenadas 2D:

- top, right, bottom, left e center.
- Usado para alguns tipos de propriedades.
- Não confundir com a propriedade position do css.

------------

# Funções

As mais usadas são:

- rgb()
- hsl()
- url()
- calc()

------------

# Strings e identificadores

- Strings: Texto em volto de aspas.
- Identificadores: red, gold, #31651.

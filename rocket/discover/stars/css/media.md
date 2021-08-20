# media

## video

- Pode não ter boa compatibilidade com browser.

- Atributos:
  - `controls`: mostra botões de controle.
  - `autoplay`: começa a reproduzir imediatamente.
  - `loop`: repete a reprodução.
  - `muted`: silencioso.
  - `preload`: começa a carregar automaticamente ou apenas ao dar play ('auto', 'none').
  - `poster`: mostra uma imagem antes de começar a reproduzir.
  - `src`: endereço do vídeo.
  - `width`: largura do vídeo.
  - `height`: altura do vídeo.

```html
<video controls>
  <source src="./video.mp4" type="video/mp4"/>
  <p>Este browser não suporta vídeo</p>
</video>
```

## audio

- Mesmos atributos da tag video exceto poster, width and height.

```html
<audio controls>
  <source src="./audio.mp3" type="audio/mp3"/>
  <p>Este browser não suporta audio</p>
</audio>
```

## iframe

- Atributos:
  - `src`: endereço do iframe.
  - `srcdoc`: conteúdo do iframe.
  - `sandbox`: sandbox do iframe.
  - `seamless`: se o iframe é transparente.
  - `frameborder`: borda do iframe.
  - `width`: largura do iframe.
  - `height`: altura do iframe.
  - `title`: titulo do iframe.
  - `allowfullscreen`: permite o modo de tela cheia.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/HT2rbv_-MOg"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

## img

- `src`: endereço da imagem.
- `alt`: texto alternativo.
- `width`: largura da imagem.
- `height`: altura da imagem.

```html
<img src="https://source.unsplash.com/random" alt="rando unspash pic" />
```

```html
<a href="https://www.rocketseat.com">
  <img
    src="https://www.rocketseat.com/icons/icon-48x48.png"
    alt="Rocketseat"
    title="Rocketseat logotipo"
    height="50"
  />
</a>
```

- background-image não deve ser usado para substituir a tag img. E sim quando há alguma imagem voltada apenas para o background e sem significado semântico, como uma ilustração.

### Criando títulos vísiveis para as imagens

- É possível utilizar as tags `figure` e `figcaption` para criar um título vísivel para as imagens.

```html
<figure>
  <img src="https://source.unsplash.com/random" alt="rando unspash pic" />

  <figcaption>
    <h3>Título da imagem</h3>
    <p>Descrição da imagem</p>
  </figcaption>
</figure>
```

## svg

- É uma marcação para gerar imagens vectoriais.

- Benéficios
  - Maior controle sobre o estilo.
  - Maior controle sobre o tamanho.
  - Maior controle sobre o conteúdo.
  - Maior acessibilidade e SEO.

- Desvantagens
  - Maior complexidade de criação.
  - Maior complexidade de interpretação.
  - Maior complexidade de renderização.

- Para fotografias ainda é preferível utilizar imagens rasterizadas.

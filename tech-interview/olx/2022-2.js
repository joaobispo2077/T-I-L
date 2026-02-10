// ANÚNCIOS COM DESTAQUE E ELEGÍVES
// Dados os arrays de ids de anúncios com destaque e anúncios elegíveis ao Compra Segura, escreva um pseudo - código que identifique quais são os anúncios em destaque que também são elegíveis ao Compra Segura, onde:

// 1.  Anúncios = [n]
// 2.  Input1: Anúncios com Destaque = ["a1", "E250", "d20", "f12", "a300"]
// 3.  Input2: Anúncios Elegíveis ao Compra Segura = ["a2", "d22", "f12", "a200", "E250"]
// 4.  Output: Anúncios Elegíveis com Destaque = ["E250", "f12"]

function getIntersectionBetweenLists(highlights, elegibles) {
  // 1. criar mapa (hashmap) para guardar os anuncios com destaque
  // 2. inicializar uma lista da intersecção dos conjuntos
  // 3. percorrer a lista de anuncios com destaque e guardar no hashmap
  // 4. percorrer os elegiveis a compra segura e checar se existe no hashmap

  const cache = {};
  const intersection = [];

  for (index = 0; index < highlights.length; index++) {
    const currentHighlight = highlights[index]
    cache[currentHighlight] = currentHighlight;
  }


  for (index = 0; index < elegibles.length; index++) {
    if (cache[elegibles[index]]) {
      intersection.push(elegibles[index]);
    }
  }


  return intersection;
}

console.log(getIntersectionBetweenLists(
  ["a1", "E250", "d20", "f12", "a300"],
  ["a2", "d22", "f12", "a200", "E250"]
));

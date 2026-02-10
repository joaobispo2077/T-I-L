// Dado uma sequencia de N números retornar o produto desse conjunto
// Input -> [2, 2, 2, 1, 3]

// Output -> 24

// Explicação de Output

// 2 * 2 = 4
// 4 * 2 = 8
// 8 * 1 = 8
// 8 * 4 = 32


const input = [2, 2, 2, 1, 3];

function multiplyConjuction(numberList) {
  let multiplied = 0;

  for (index = 0; index < numberList.length; index++) {
    if (index === 0) {
      multiplied = numberList[index];
    } else {
      multiplied = multiplied * numberList[index];
    }
  }

  return multiplied;
}

function multiplyConjuction(numberList) {
  let multiplied = 1;

  for (index = 0; index < numberList.length; index++) {
    multiplied = multiplied * numberList[index];
  }

  return multiplied;
}

console.log(multiplyConjuction([2, 2, 2, 1, 4]));

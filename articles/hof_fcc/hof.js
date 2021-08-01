function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

function subtract(...numbers) {
  return numbers.reduce((a, b) => a - b);
}


function getCalculateOperationBySymbol(symbol) {
  const operations = {
    '+': sum,
    '-': subtract,
  }

  return operations[symbol];
}


function calculate(symbol, ...numbers) {
  const calculateOperation = getCalculateOperationBySymbol(symbol);
  console.log('received numbers: ', numbers);
  return calculateOperation(...numbers);
}


const firstResult = calculate("+", 2, 2);
console.log(firstResult); // output: 4

const secondResult = calculate("-", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(secondResult); // output: -45

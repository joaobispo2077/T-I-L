const sum = (...numbers) => numbers.reduce((a, b) => a + b);


const subtract = (...numbers) => numbers.reduce((a, b) => a - b);


const getCalculateOperationBySymbol = (symbol) => {
  const operations = {
    '+': sum,
    '-': subtract,
  }

  return operations[symbol];
}

const calculate = (symbol, ...numbers) => {
  const calculateOperation = getCalculateOperationBySymbol(symbol);
  console.log('received numbers: ', numbers);
  return calculateOperation(...numbers);
}

const firstResult = calculate("+", 2, 2);
console.log(firstResult); // output: 4

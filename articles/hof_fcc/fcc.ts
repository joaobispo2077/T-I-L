
type CalculationsMapper = (...numbers: number[]) => number;


const sum: CalculationsMapper = (...numbers) => numbers.reduce((a, b) => a + b);


const subtract: CalculationsMapper = (...numbers) =>  numbers.reduce((a, b) => a - b);


type OperationSymbols = '+' | '-';

const getCalculateOperationBySymbol = (symbol: OperationSymbols): CalculationsMapper  => {
  const operations: Record<OperationSymbols, CalculationsMapper> = {
    '+': sum,
    '-': subtract,
  }

  return operations[symbol];
}

const calculate = (symbol: OperationSymbols, ...numbers: number[]): number => {
  const calculateOperation = getCalculateOperationBySymbol(symbol);
  console.log('received numbers: ', numbers);
  return calculateOperation(...numbers);
}

const firstResult = calculate("+", 2, 2);
console.log(firstResult); // output: 4

export default 1;

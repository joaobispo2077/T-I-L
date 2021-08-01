
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}

function subtract(...numbers: number[]): number {
  return numbers.reduce((a, b) => a - b);
}

type OperationSymbols = '+' | '-';

function getCalculateOperationBySymbol(symbol: OperationSymbols): CalculationsMapper {
  const operations: Record<OperationSymbols, CalculationsMapper> = {
    '+': sum,
    '-': subtract,
  }

  return operations[symbol];
}

type CalculationsMapper = (...numbers: number[]) => number;

function calculate(symbol: OperationSymbols, ...numbers: number[]): number {
  const calculateOperation = getCalculateOperationBySymbol(symbol);
  console.log('received numbers: ', numbers);
  return calculateOperation(...numbers);
}

const firstResult = calculate("+", 2,2);
console.log(firstResult); // output: 4


export default 1;

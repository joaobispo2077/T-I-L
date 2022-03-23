const values = [15, 23, 13, 14];
const labels = ["Security and Compliance", "Technology", "Cloud Concepts", "Billing and Pricing"];

const sumOfValues = values.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

const eachPercentage = values.map(value => Math.floor(value / sumOfValues * 100));

const message = values.reduce((previousValue, currentValue, index) => {
  return `${previousValue}\nValue: ${currentValue}  - ${eachPercentage[index]}% - ${labels[index]}\n`;
}, `Total: ${sumOfValues}\n\n`);

console.info(message);


// Test 2
// Total: 65


// Value: 11  - 16% - Security and Compliance

// Value: 32  - 49% - Technology

// Value: 14  - 21% - Cloud Concepts

// Value: 8  - 12% - Billing and Pricing



/* Teste 3
Total: 65


Value: 14  - 21% - Security and Compliance

Value: 32  - 49% - Technology

Value: 7  - 10% - Cloud Concepts

Value: 12  - 18% - Billing and Pricing
*/

/* Test 4
Total: 65


Value: 15  - 23% - Security and Compliance

Value: 23  - 35% - Technology

Value: 13  - 20% - Cloud Concepts

Value: 14  - 21% - Billing and Pricing
*/

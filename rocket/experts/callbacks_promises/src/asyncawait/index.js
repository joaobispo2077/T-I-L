const { delayedSum } = require("./delayed");

async function main() {
  console.time("performance");

  const [a, b] = await Promise.all([
    delayedSum(2, 2),
    delayedSum(4, 4)
  ]);

  console.log("result a: ", a);
  console.log("result b: ", b);

  const c = await delayedSum(a, b);
  console.log("result c: ", c);
  console.timeEnd("performance");
}

main();

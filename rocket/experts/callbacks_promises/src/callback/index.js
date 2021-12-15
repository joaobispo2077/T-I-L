const { delayedExecution, delayedSum } = require("./delayed");

// const sum = function (a, b) {
//   return a + b;
// }

// const result = delayedExecution(sum, 1000, 1, 2);
// console.log(result);


console.time("performance");
delayedSum(2, 2, (a) => {
  console.log("result a: ", a);

  delayedSum(4, 4, (b) => {
    console.log("result b: ", b);

    delayedSum(a, b, (c) => {
      console.log("result c: ", c);
      console.timeEnd("performance");
    });
  });

});

const { delayedSum } = require("./delayed");

// console.time("performance");
// delayedSum(2, 2)
//   .then((a) => {
//     console.log("result a: ", a);

//     delayedSum(4, 4).then((b) => {
//       console.log("result b: ", b);

//       delayedSum(a, b).then((c) => {
//         console.log("result c: ", c);
//         console.timeEnd("performance");
//       }
//       );

//     });

//   });

console.time("performance");
Promise.all([
  delayedSum(2, 2),
  delayedSum(4, 4),
]).then(([a, b]) => {
  console.log("result a: ", a);
  console.log("result b: ", b);

  delayedSum(a, b).then((c) => {
    console.log("result c: ", c);
    console.timeEnd("performance");
  });;
})

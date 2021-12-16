const { delayedSum } = require("./delayed");

function* loop() {
  let i = 0;

  while (true) {
    console.log(i);

    yield i++;
  }

}

const testGenerator = loop();
testGenerator.next();
testGenerator.next();
console.log("end");



const execute = function* () {
  console.time("performance");

  const a = yield delayedSum(2, 2);
  console.log("received a from generator:", a)
  const b = yield delayedSum(4, 4);

  console.log("result a: ", a);
  console.log("result b: ", b);

  const c = yield delayedSum(a, b);
  console.log("result c: ", c);
  console.timeEnd("performance");
  return c;
}

const generator = execute();

console.log(generator.next().value.then(function (a) {
  return generator.next(a).value.then(function (b) {
    return generator.next(b).value.then(function (c) {
      return generator.next(c);
    });
  });
}));

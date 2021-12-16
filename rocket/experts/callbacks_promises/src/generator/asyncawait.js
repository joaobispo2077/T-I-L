const { delayedSum } = require("./delayed");

const execute = function* () {
  console.time("performance");

  const a = yield delayedSum(2, 2);
  const b = yield delayedSum(4, 4);


  const c = yield delayedSum(a, b);
  console.timeEnd("performance");
  return c;
}

const async_ = async function (fn) {
  const generator = fn();
  let object = generator.next();

  while (!object.done) {
    const result = await object.value;
    console.log("result is: ", result);
    object = generator.next(result);

  }
}


async_(execute);

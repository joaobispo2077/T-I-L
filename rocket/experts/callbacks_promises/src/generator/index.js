const { delayedSum } = require("./delayed");

const execute = function* () {
  console.time("performance");

  const a = yield delayedSum(2, 2);
  const b = yield delayedSum(4, 4);


  const c = yield delayedSum(a, b);
  console.timeEnd("performance");
  return c;
}

const async_recursive = function (generator, result) {
  const object = generator.next(result);

  if (object.done) {
    return;
  }

  object.value.then(function (result) {
    console.log("result is: ", result);
    async_recursive(generator, result);
  });
}

const async_ = function (fn) {
  const generator = fn();
  async_recursive(generator);
}


async_(execute);

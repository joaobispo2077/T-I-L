
const delayedExecution = (callback, delay, ...args) => {
  setTimeout(() => {
    callback(...args);
  }, delay);
};

const delayedSum = (a, b, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 500);
  });
};

module.exports = {
  delayedExecution,
  delayedSum
};

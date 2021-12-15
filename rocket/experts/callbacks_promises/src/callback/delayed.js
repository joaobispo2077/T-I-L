
const delayedExecution = (callback, delay, ...args) => {
  setTimeout(() => {
    callback(...args);
  }, delay);
};

const delayedSum = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 500);
};

module.exports = {
  delayedExecution,
  delayedSum
};

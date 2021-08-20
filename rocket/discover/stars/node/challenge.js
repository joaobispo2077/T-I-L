const { getFlag } = require('./util');

console.log(getFlag('--name', process.argv));
console.log(getFlag('--greeting', process.argv));

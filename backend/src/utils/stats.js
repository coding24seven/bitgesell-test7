// Utility intentionally unused by routes (candidate should refactor)
const memoize = require("memoizee");

const memoizedMean = memoize(mean);

function mean(arr) {
  return arr.reduce((a, b) => a + b.price, 0) / arr.length;
}

module.exports = { memoizedMean };
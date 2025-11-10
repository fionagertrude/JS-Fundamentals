function factorial(n) {
  if (n <= 1 || Number.isNaN(n)) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = process.argv[2];
const num = parseInt(arg, 10);

console.log(factorial(num));
// To run it:
// node 10-factorial.js 5
// output: 120
// node 10-factorial.js
// output: 1
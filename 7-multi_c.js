// Get the first argument and convert to integer
const arg = process.argv[2];
const x = parseInt(arg, 10);

// Check if it's a valid positive number
if (Number.isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  while (i < x) {
    console.log('C is fun');
    i++;
  }
}
// To run it:
// node 7-multi_c.js 3
// output:
// C is fun
// C is fun
// C is fun

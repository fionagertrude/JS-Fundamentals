// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Get the first and second arguments and convert to integers
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// Print the addition result
console.log(add(a, b));
// To run it:
// node 9-add.js 3 5
// output: 8
// Get the first argument and convert to integer
const arg = process.argv[2];
const size = parseInt(arg,10);

// Check if it's a valid positive number
if (Number.isNaN(size) ) {
  console.log('Missing size');
} else {
  // Use nested loops to print the square
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}
// To run it:
// node 8-square.js 4
// output:
// XXXX
// XXXX
// XXXX
// XXXX

// Get the first argument
const arg = process.argv[2];

// Convert the argument to an integer using parseInt
// parseInt returns NaN (Not a Number) if conversion fails
const num = parseInt(arg);

// Check if the conversion resulted in a valid number
// NaN is the only value in JavaScript that is not equal to itself
if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}
//
// To run it:
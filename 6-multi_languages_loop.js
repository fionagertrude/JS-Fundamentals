// Create an array with the three lines
const lines = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];
let i = 0;
let output = "";
while (i < lines.length) {
  output += lines[i] + (i < lines.length - 1 ? "\n" : "");
  i++;
}
console.log(output);
// To run it:
// node 6-multi_languages_loop.js
// output:
// C is fun
// Python is cool
// JavaScript is amazing
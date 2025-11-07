const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

//to run it
// node 2-arguments.js 
// output: No argument
// node 2-arguments.js first 
// output: Argument found
// node 2-arguments.js second 
// output: Arguments found


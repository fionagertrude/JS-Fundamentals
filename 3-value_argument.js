const arg = process.argv[2];

if (arg === undefined) {   
    console.log("No argument");
} else {
    console.log(arg);
}
//to run it
// node 3-value_argument.js 
// output: No argument
// node 3-value_argument.js Hello
// output: Hello
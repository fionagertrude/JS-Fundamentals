const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No arguments provided.");
} else if (args.length === 1) {
    console.log(`One argument provided: ${args[0]}`);
} else {
    console.log(`Two arguments provided: ${args[0]} and ${args[1]}`);
}

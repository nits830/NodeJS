const {readFileSync, writeFileSync} = require("fs");


// Reading a file
const first = readFileSync("../content/first.txt", "utf8");
const second = readFileSync("../content/subfolder/test.txt", "utf8");

console.log(first, second);


// Creating a file
writeFileSync("../content/result.txt", `Here is the result: ${first}, ${second}`,{flag:"a"} );




// Event Loop 

//Example 1
const {readFile} = require("fs");

console.log("First task started");

readFile("../content/first.txt", "utf8" , (err, result)=> {
    console.log("Second task started");
    if(err){
        return;
    }
    console.log(result);
    console.log("Second task completed")

})

console.log("Starting next task");

// RESULT
// First task started
// Starting next task
// Second task started
// This is first Text file......
// Second task completed
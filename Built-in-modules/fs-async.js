const {readFile, writeFile} = require("fs");

readFile("../content/test.js", 'utf8',(error, result)=> {
    if(error){
        console.log(error);
    }
    run(result);
})
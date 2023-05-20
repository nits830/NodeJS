const {readFile, writeFile} = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async() => {
    try{
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/subfolder/test.txt", "utf8");
    await writeFilePromise("./content/result.txt", `Awesome: ${first} + ${second}`);

    const result = await readFilePromise("./content/result.txt", "utf8");
    console.log(result);
    
    }
    catch(error){
        console.log(error);
    }
}

start();

// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path, "utf8", (err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }




// Alternative way using then()
// getText("./content/first.txt")
//                 .then((result)=> console.log(result))
//                 .catch((error)=> console.log(error));
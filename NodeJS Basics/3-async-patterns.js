const {readFile, writeFile} = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async() => {
    try{
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/subfolder/test.txt", "utf8");
    await writeFile("./content/result.txt", `Awesome: ${first} ${second}`);

    const result = await readFile("./content/result.txt", "utf8", {flag:"a"});
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
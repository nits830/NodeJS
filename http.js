const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
    res.end("Welcome to our new homepage");
    }

    if(req.url === "/about"){
        res.end("Here is our brief history");
    }

    res.end(`<h1>OOPS!! Cannot find the page ERROR 404</h1>
    <a href = "/">Back Home</a>`);
})

server.listen(3000);
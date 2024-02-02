const http = require('http');
const server = http.createServer((req, res)=>{
    const url = req.url;
    console.log(url, "url is here");
    console.log("very nice");


//returning any response back


// to add content-type in response header
res.writeHead(201, {"Content-Type":"text/html"});

// 201 is status code, and in second i have to send real key value pair
res.write("hello world");

res.end();
});

server.listen(8080, ()=>{
    console.log("listening on port no. 8080")
});
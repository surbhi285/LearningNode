const http = require('http');
const server = http.createServer(()=>{
    console.log("very nice");
});

server.listen(8080, ()=>{
    console.log("listening on port no. 8080")
});


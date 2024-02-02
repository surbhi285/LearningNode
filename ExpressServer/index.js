const express = require('express');
const server = express();

// Routes and Methods...
// use means every http method such as patch, post, delete, get etc
server.get('/',(req, res)=>{
    res.statusCode = 200;
    res.write("<h1>Hello guys welcome to the palace</h1>");
    res.end();
})

server.get('/about',(res, req)=>{
    res.statusCode=200;
    res.end("<h1>About the node ja !!</h1>")
})

server.listen(3005, ()=>{
    console.log("listening to the port", port)
});
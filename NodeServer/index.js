const http = require('http');

const server = http.createServer((res, req)=>{

    const url = req.url;

    // to get method
    const method = req.method;
    console.log(url, "url")

    res.setHeader("Content-Type", "text/html");

    //Routes
   if(url ==="/"){
    if(method==='GET'){
    res.statusCode = 200;
    res.write("<h1>Hello guys welcome to the palace</h1>");
    res.end(); // res.end first write what we want to write and then end response
    }else{
        res.statusCode = 405;
        res.end("Request method not allowed");
    }
   }else if(url ==="/about"){
    res.statusCode = 200;
    res.end("<h1>About Node</h1>"); 
   }
   else if(url ==="/Contact"){
    res.statusCode = 200;
    res.end("<h1>Contact the user</h1>"); 
   }else{
    res.statusCode=404;
    res.end("<h1>Page Not Found</h1>"); 
   }
});

const port = 3005;
server.listen(port,()=>{
    console.log("server is running on the port ", port)
})
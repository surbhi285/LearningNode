const express = require("express");
const server = express();


const currencyRoutes = require("./Routes/currencies.routes");

// use is for middleware in express
server.use("/currencies", currencyRoutes) ;
// server.use("/blog");

const port = 3005;
server.listen(port, ()=>{
    console.log("listing on the port expressAppCurrencies ", port)
}); 
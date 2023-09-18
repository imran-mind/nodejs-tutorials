const http = require('http');
const url = require('url');

const PORT = 8080;

const httpServer = http.createServer((req,res)=>{
    const httpPath = url.parse(req.url).pathname;
    //http://localhost:8080/world
    // http://localhost:8080/hello
    if(httpPath === "/hello"){
        res.write('Hello From the server');
        res.end();
    }else if(httpPath === "/world"){
        res.write('Wrold From the server');
        res.end();
    }
});

httpServer.listen(PORT, ()=>{
    console.log('Server is ready on PORT '+PORT);
})
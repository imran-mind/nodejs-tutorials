const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    fs.readFile('./file-a.txt','utf-8',(err,data)=>{
        if(err){
            res.write('Error while reading file',err);
            res.end();
        }
        // res.writeHead(200, {"content-type":"text"});
        console.log("--------",data);
        res.write(data);
        res.end();
    })
});
server.listen(8080,()=>{
    console.log('Server is running on PORT : 8080');
})


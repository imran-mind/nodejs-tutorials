const http = require('http');
const fs = require('fs');
const server = http.createServer();
const zlib = require('zlib');

server.on('request',(req,res)=>{
    const src = fs.createReadStream('./file-a.txt','utf-8');
    // src.pipe(zlib.createGzip())
    //    .pipe(fs.createWriteStream('file-b.gz'));
    // res.write('Ok');
    // res.end();

    src.pipe(res);
});

server.listen(8080,()=>{
    console.log('Server is running on PORT:8080');
})
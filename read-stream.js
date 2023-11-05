const fs = require('fs');

const readerStream = fs.createReadStream('./file-a.txt', 'utf-8');

readerStream.on('data',(chunk)=>{
    console.log('Data Chunk => ',chunk);
});

readerStream.on('end', ()=>{
    console.log('File reading End ');
});

readerStream.on('error',(err)=>{
    console.log('Error while reading file : ',err);
});
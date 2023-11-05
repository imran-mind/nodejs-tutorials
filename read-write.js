const fs = require('fs');

const readerStream = fs.createReadStream('./file-a.txt', 'utf-8');
const writerStream = fs.createWriteStream('./file-b.txt');

writerStream.setDefaultEncoding('utf-8');
readerStream.on('data',(chunk)=>{
    writerStream.write(chunk)
});

readerStream.on('end',()=>{
    console.log('File reading done');
});

readerStream.on('error',(err)=>{
    console.log('Error: ',err);
});
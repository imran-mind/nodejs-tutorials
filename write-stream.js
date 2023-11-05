const fs = require('fs');

const writerStream = fs.createWriteStream('./file-b.txt');

writerStream.setDefaultEncoding('utf-8');

writerStream.write('Hello how are you !\n');
writerStream.write('Hello how are you !\n');
writerStream.write('Hello how are you !\n');
writerStream.write('Hello how are you !\n');


writerStream.on('finish',()=>{
    console.log('file wrting finished');
});

writerStream.on('close',()=>{
    writerStream.close();
})

writerStream.on('error',(err)=>{
    console.log('Error while writing file: ',err);
})
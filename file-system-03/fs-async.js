const fs = require('fs');


fs.readFile('./test.txt', 'utf-8', (err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
});

// const fileData = "This is file content !\n";
// fs.writeFile('./test.txt', fileData, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Success');

//     const result = fs.readFileSync('./test.txt', 'utf-8');
//     console.log(result);
// })

// fs.appendFile('./test-append.txt', fileData, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Append Success');
// });

// fs.open('./test.txt', 'r', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File opened successfully!");

//     }
// })

// fs.open('./test.txt', 'r+', (err, fd) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File is opened for Read and Write ', fd);
// })
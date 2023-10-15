
const fs = require('fs');
const fsPromise = require('fs/promises');

const fileName = './id.txt';
// Understand Promise.chain and why it's need
// 1.check if it's file
// 2.read from file

// Example of callback hell
// fs.stat(fileName,(err,res)=>{
//     if(!err){
//         // console.log(res.isFile());
//         if(res.isFile()){
//             fs.readFile(fileName, 'utf-8', (err, data)=>{
//                 if(err){
//                     console.error('Error while reading file ',err);
//                 }
//                 writeToServer(data,(err,result)=>{

//                 })
//                 console.log(data);
//             })
//         }
//     }
// })


const isFile = (fileName)=>{
    return fsPromise.stat(fileName);
}

const readFileData = (fileName)=>{
    return fsPromise.readFile(fileName, 'utf-8');
}

const writeDataToServer = (data)=>{
    return Promise.resolve('success');
}

isFile(fileName)
    .then((result)=>{
        if(result.isFile()){
            return readFileData(fileName);
        }
    })
    .then((data)=>{
        console.log('Promisify data : ',data);
        return writeDataToServer(data);
    })
    .then((response)=>{
        console.log('response ',response);
    })
    .catch((err)=>{
        console.log('Error : ',err);
    })

















































// fs.stat(fileName, (err, res) => { // callback 2
//     if (err) {
//         console.error('Error stat : ', err);
//     }
//     if (res.isFile) {
//         fs.readFile(fileName, 'utf-8', (err, data) => { //callback 3
//             if (err) {
//                 console.error('Error reading file: ', err);
//             }
//             //we have to send to another server
//             // writeToServer(data, (err, data) => {
//             //     if (!err) {
//             //         console.log('Write sucess');
//             //     }
//             // })
//             console.log(data);
//         })
//     }
// });


// function isFile(file) {
//     return fsPromise.stat(file);
// }

// function readFileData(file) {
//     return fsPromise.readFile(file, 'utf-8')
// }

// // promise chaining
// isFile(fileName)
//     .then((res) => {
//         if (res.isFile) {
//             return readFileData(fileName)
//         }
//     })
//     .then((data) => {
//         console.log("Data: ", data);
//         // return sendToServer(data);
//     })
//     .catch(err => {
//         console.error('Error : ', err);
//     })

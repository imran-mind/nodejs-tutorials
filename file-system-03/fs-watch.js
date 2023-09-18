const fs= require('fs');

const currentFile = "./test-files";
fs.watch(currentFile,(event,whatChange)=>{
    console.log("Folder whatChange: ", whatChange);
    console.log("Folder event: ", event);
});

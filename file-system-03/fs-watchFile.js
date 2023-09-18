const fs = require('fs');

const currentFile = "./test-files/test.txt";
fs.watchFile(currentFile, {
    // Passing the options parameter
    bigint: false,
    persistent: true,
    interval: 1000,
  }, (curr, prev) => {
    console.log("\nThe file was edited");
   
    // Time when file was updated
    console.log("File was modified at: ", prev.mtime);
    console.log("File was again modified at: ", curr.mtime);
    console.log(
      "File Content Updated: ",
      fs.readFileSync(currentFile, "utf8")
    );
  });

// const data = fs.readFileSync("./test-files/test.txt", "utf8")

// Make Changes to the file for the first time
fs.writeFileSync(currentFile,
"Welcome to Geeks for Geeks");
 
// Make Changes to the file for the second time
setTimeout(
() => fs.writeFileSync(currentFile,
    "File is Edited Again!!!"),
3000
);
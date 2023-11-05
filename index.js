const express = require('express');
const fs = require('fs');
const app = express();


const statusMonitor = require('express-status-monitor')();
app.use(statusMonitor);
app.get('/status', statusMonitor.pageRoute)

app.get('/',(req,res)=>{
    // fs.readFile('./bigfile.txt','utf-8',(err, data)=>{
    //     if(err){
    //         console.log('Error ',err);
    //     }
    //     res.write(data);
    //     res.end();
    // })
    const rs = fs.createReadStream('./bigfile.txt','utf-8');
    rs.pipe(res);
});

app.listen(8080, ()=>{
    console.log('Server is running on PORT:8080');
})
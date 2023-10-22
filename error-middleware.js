const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('GET sucesss');
})

function errorHandler(err,req,res,next){
    console.log('in error middleware ',err);
    res.header('content-type','application/json');
    const status = err.status || 400;
    res.status(status).json({error: err.message});
}

function invalidPathHandler(req,res,next){
    res.status(404).json({message: 'Invalid path requested'});
}

app.get('/witherror', (req,res)=>{
    const error = new Error("Error in processing "+req.url);
    error.status = 400;
    throw error;
})

app.use(errorHandler);
app.use(invalidPathHandler)
app.listen(8080, ()=>{
    console.log('Server is listening on PORT: 8080 ');
})
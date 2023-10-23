const db = require('./mongodb');
const express = require('express');
const routes = require('./router');
const app = express();
const PORT = 8080;

app.use('/api/v1', routes)

app.listen(8080, ()=>{
    console.log(`Server is listening on PORT : ${PORT}`);
})
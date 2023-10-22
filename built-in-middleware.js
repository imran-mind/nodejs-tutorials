//built in middleware
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(8080, ()=>{
    console.log('Server is listening on PORT: 8080 ');
})
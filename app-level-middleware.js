const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use('/', router)
app.use(bodyParser.json());

// application level middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
});

app.get('/users',(req,res,next)=>{
    res.send('Hello');
})

//
app.listen(8080, () => {
    console.log('Server is running on PORT: 8080');
})
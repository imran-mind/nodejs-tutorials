const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());

function validateUserReq(req,res,next){
    const {name,email,mobile} = req.body;
    if(name && email && mobile){
        next();
    }
    res.status(400).json({message: 'name,email and mobile fields are required.'});
}

function isAuth(){
    next();
}
const middlewares = [validateUserReq, isAuth];

app.post('/users',middlewares, (req,res)=>{
    console.log(req.body);
    res.status(200).json({message: 'success'});
})

app.listen(8080, ()=>{
    console.log('Server is listening on PORT: 8080');
})
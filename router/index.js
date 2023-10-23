const express = require('express');
const routes = express.Router();

routes.post('/signup', (req,res)=>{

});

routes.post('/login',(req,res)=>{
    
});

routes.get('/users', (req,res)=>{
    res.send('Hello Users')
});

module.exports = routes;
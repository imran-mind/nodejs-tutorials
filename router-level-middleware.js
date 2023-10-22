const express = require('express');
const app = express();
const router = express.Router();

app.use('/', router);

router.use((req,res,next)=>{
    console.log('Time ', new Date());
    console.log('Request type ',req.method);
    next();
})

router.get('/users',(req,res)=>{
    res.send('Success');
})
app.listen(8080, ()=>{
    console.log('Server is listening on PORT: 8080 ');
})
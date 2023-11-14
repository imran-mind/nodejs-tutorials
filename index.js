const express = require('express');
const app = express();

app.use(express.json());

app.get('/users',(req,res)=>{
    const query = req.query;
    console.log(query.page, query.limit);
    res.status(200).json(query);
});

app.get('/users/:id', (req, res)=>{
    const params = req.params;
    console.log(params);
    res.json(params);
})

app.post('/users',(req,res)=>{
    const body = req.body;
    console.log(body);
    res.json(body);
});

app.listen(8080, ()=>{
    console.log('Server is running on Port:8080');
})






// prod -> http://example-prod.com
// dev -> http://example-dev.com
// local -> http://localhost:8080
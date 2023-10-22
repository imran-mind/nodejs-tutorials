const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());

// GET all products
// GET product by id
// POST craete product
// PUT update product by id
// DELET delete product by id
let products = [
    {id:1, name:'oppo'},{id:2, name:'iphone'},{id:3, name:'vivo'}
]
app.get('/products',(req,res)=>{
    res.status(200).json({data:products});
});

app.post('/products',(req,res)=>{
    const name = req.body.name;
    const object = {
        id: products.length+1,
        name
    }
    products.push(object);
    res.status(201).json({message: 'Success'});
})

app.get('/products/:id', (req,res)=>{
    const id = req.params.id;
    const foundObject = products.find((data)=> data.id == id);
    res.status(200).json({data: foundObject});
});

app.put('/products/:id', (req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const filteredList = products.filter((data)=> data.id != id);
    const newObject = {
        id,
        name
    }
    filteredList.push(newObject);
    products = filteredList;
    res.status(200).json({mesasge: 'Udpated'});
});

app.delete('/products/:id', (req,res)=>{
    const id = req.params.id;
    const filteredList = products.filter((data)=> data.id != id);
    products = filteredList;
    res.status(204).json({});
})

app.listen(8080, ()=>{
    console.log('Server is running on PORT: 8080');
})
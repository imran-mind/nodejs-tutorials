const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://shaikhimran115:<password>@test-cluster.ugekaa1.mongodb.net/sample-db?retryWrites=true&w=majority"
mongoose.
    connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('MongoDB connected successfully');
    }).catch((err)=>{
        console.log('Error while connecting MongoDB',err);
    })

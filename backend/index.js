const express  =require('express');
const mongoose = require('mongoose');
const app =express();

const PORT = 3000;

app.use(express.json());

const MONGO_URI = 'mongodb://localhost:27017/LabourLink';

mongoose.connect(MONGO_URI)
.then(()=>console.log('connection successfull'))
.catch((error)=>console.log('error:' ,error));

app.get('/',(req,res)=>{
    res.send('your express server is running');
});

app.listen(PORT,()=>
    {
        console.log('Listening');
    });


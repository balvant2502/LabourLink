import express  from 'express';
import mongoose from 'mongoose';
import connectDb from './config/db.js';

import User from './models/user.js';
import Booking from './models/booking.js';
import Category from'./models/category.js';
import Review from './models/review.js';
import LabourAvailability from './models/labourAvailability.js';



const app =express();

const PORT = 3000;

app.use(express.json());

connectDb()

const createCollections = async () => {
    await User.createCollection();
    await Review.createCollection();
    await Booking.createCollection();
    await Category.createCollection();
    await LabourAvailability.createCollection();
};

app.get('/',(req,res)=>{
    res.send('your express server is running');
});

app.listen(PORT,()=>
    {
        console.log('Listening');
    });


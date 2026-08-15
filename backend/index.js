import express from 'express';
import connectDb from './config/db.js';

import User from './models/user.js';
import Booking from './models/booking.js';
import Category from './models/category.js';
import Review from './models/review.js';
import LabourAvailability from './models/labourAvailability.js';

const app = express();

const PORT = 3000;

app.use(express.json());

const createCollections = async () => {
    await User.createCollection();
    await Review.createCollection();
    await Booking.createCollection();
    await Category.createCollection();
    await LabourAvailability.createCollection();

    console.log("Collections created successfully");
};

const startServer = async () => {
    try {
        await connectDb();
        await createCollections();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Server failed:", error.message);
    }
};

app.get('/', (req, res) => {
    res.send('Your Express server is running');
});

startServer();
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/LabourLink");
        console.log(`Mongodb connected: ${conn.connection.host}`);
    }
    catch(error) {
        console.log("Connection failed : ", error.message);
        process.exit(1);
    }

};
export default connectDb;
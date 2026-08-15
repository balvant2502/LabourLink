import mongoose from "mongoose";
const { Schema, model } = mongoose;
const categorySchema = new mongoose.Schema({
   
    categoryName: {
        type: String,
        required: true
    }
});

export default mongoose.model("Category", categorySchema);
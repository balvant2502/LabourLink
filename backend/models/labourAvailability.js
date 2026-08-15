import mongoose from "mongoose";

const labourCategorySchema =new mongoose.Schema(
    {
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },

        labourCount: {
            type: Number,
            required: true,
            min: 0
        },

        priceRate: {
            type: Number,
            required: true,
            min: 0
        },
    },
    {_id: false}
);

const labourAvailabilitySchema = new mongoose.Schema({
    providerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        requried: true,
    },

    totalLabours: {
        type: Number,
        required: true,
        min: 0
    },

    availableLabours: {
        type: Number,
        required: true,
        min: 0
    },

    gender: {
        male: {
            type: Number,
            default: 0,
            min: 0
        },
        female: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    categories: [labourCategorySchema],

    description: {
        type: String,
        trim: true
    }, 

    
}, {
    timestamps: true
});

export default mongoose.model("LabourAvailability", labourAvailabilitySchema);
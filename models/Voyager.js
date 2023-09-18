import mongoose from "mongoose";

const voyagerSchema = new mongoose.Schema({
    username_voyager: { type: String, required: true, unique: true },
    passwordHash_voyager: { type: String, required: true },
    shipId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ship'
    },
    orders: [
        {
            name_stationary: { type: String, required: true },
            quantity_stationery: { type: Number, required: true },
            order_status: { type: String, required: true },
            name_catering: { type: String, required: true },
            quantity_catering: { type: Number, required: true },
            order_date: { type: Date, required: true },
            delivery_date: { type: Date, required: true }
        }
    ],
    reviews: [
        {
            rating: { type: Number, required: true },
            comment: { type: String, required: true }
        }
    ]
});

mongoose.model('Voyager', voyagerSchema);
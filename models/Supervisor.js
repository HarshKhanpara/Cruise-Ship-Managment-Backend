import mongoose from "mongoose";
import { Ship } from "./Ship";

const supervisorSchema = new mongoose.Schema({
    username_supervisor: { type: String, required: true, unique: true },
    passwordHash_supervisor: { type: String, required: true },
    shipId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ship'
    },
    stationery_available: [
        {
            name_stationary: { type: String, required: true },
            quantity: { type: Number, required: true },
            availibility: { type: Boolean, required: true }
        }
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Voyager', 
            order_status: { type: String, required: true }
        }
    ],
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager'
    }
});

mongoose.model('Supervisor', supervisorSchema);


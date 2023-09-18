import mongoose from 'mongoose';
import { Ship } from './Ship';

const headCookSchema = new mongoose.Schema({
    username_headCook: { type: String, required: true, unique: true },
    passwordHash_headCook: { type: String, required: true },
    available_inventory: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    assigned_cook: { type: String, required: true },
    ordered_items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Voyager',
            time_required: { type: Number, required: true }
        }
    ],
    order_status: { type: String, required: true },
    order_date: { type: Date, required: true },
    delivery_date: { type: Date, required: true },
    ship_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ship'
    },
    manager_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager'
    }
    
});

mongoose.model('HeadCook', headCookSchema);

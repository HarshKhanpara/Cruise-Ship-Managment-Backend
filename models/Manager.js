import mongoose from "mongoose";
import { Ship } from "./Ship";

const managerSchema = new mongoose.Schema({
    username_manager: { type: String, required: true, unique: true },
    passwordHash_manager: { type: String, required: true },
    facilities_available: [
        {   
            type: mongoose.Schema.Types.ObjectId,   
            ref: 'Ship'
        }
    ],
    checkMovieTickets: { type: Boolean, required: true },
    checkBeautySalon: { type: Boolean, required: true },
    checkGym: { type: Boolean, required: true },
    checkPartyHall: { type: Boolean, required: true },
    shipId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ship'
    }
    
});

mongoose.model('Manager', managerSchema);
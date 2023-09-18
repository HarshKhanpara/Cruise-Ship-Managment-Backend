import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username_admin: { type: String, required: true, unique: true },
    passwordHash_admin: { type: String, required: true },
    ships: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ship'
        }
    ],
    voyagers: [
        {
            email_voyager: { type: String, required: true },
            passwordHash_voyager: { type: String, required: true }
        }
    ],
    catering: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'HeadCook'
        }
    ],
   stationery: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Supervisor'
        }
    ],
    feedbacks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Voyager'
        }
    ]

});

mongoose.model('Admin', adminSchema);



const mongoose = require('mongoose');

const shipSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    captain: { type: String, required: true },
    route: { type: String, required: true },
    destination: { type: String, required: true },
    capacity_passengers: { type: Number, required: true },
    facilities: [
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            availibility: { type: Boolean, required: true },
        }
    ],
    commencement_date: { type: Date, required: true },
    arrival_date: { type: Date, required: true }
});

module.exports = mongoose.model('Ship', shipSchema);
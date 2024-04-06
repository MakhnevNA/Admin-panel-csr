import mongoose from 'mongoose';

const Appointments = new mongoose.Schema({
    date: { type: String, required: true },
    name: { type: String, required: true },
    service: { type: String, required: true },
    phone: { type: String, required: true },
    canceled: { type: Boolean, required: true },
});

export default mongoose.model('Appointments', Appointments);

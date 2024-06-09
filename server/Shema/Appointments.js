import mongoose from 'mongoose';

const Appointments = new mongoose.Schema(
    {
        clientName: { type: String, required: true },
        service: { type: String, required: true },
        masterName: { type: String, required: true },
        masterId: { type: String, required: true },
        phone: { type: String, required: true },
        date: { type: String, required: true },
        canceled: { type: Boolean, required: true },
    },
    { versionKey: false },
);

export default mongoose.model('appointments', Appointments);

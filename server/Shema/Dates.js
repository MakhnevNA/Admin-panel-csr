import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const Dates = new mongoose.Schema(
    {
        _id: { type: ObjectId, required: true },
        name: { type: String, required: true },
        value: { type: String, required: true },
    },
    { versionKey: false },
);

export default mongoose.model('dates', Dates);

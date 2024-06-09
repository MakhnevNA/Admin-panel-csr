import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const Times = new mongoose.Schema({
    _id: { type: ObjectId, required: true },
    procedure: { type: String, required: true },
    workingTime: { type: Array, required: true },
});

export default mongoose.model('workingTime', Times, 'workingTime');

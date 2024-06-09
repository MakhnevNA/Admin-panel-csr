import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const Master = new mongoose.Schema({
    _id: { type: ObjectId, required: true },
    name: { type: String, required: true },
    procedures: { type: Array, required: true },
});

export default mongoose.model('masters', Master);

import mongoose from 'mongoose';

const Procedure = new mongoose.Schema(
    {
        procedureId: { type: String, required: true },
        procedureName: { type: String, required: true },
    },
    { versionKey: false },
);

export default mongoose.model('procedures', Procedure);

import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';

const PORT = 5000;
const DB_URL =
    'mongodb+srv://nikitkamakhnev:X5nzNgoI3YgunJAG@admin-panel.rps0yuh.mongodb.net/admin-panel?retryWrites=true&w=majority';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', router);

async function start() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () =>
            console.log(`server has stared on PORT ${PORT}`),
        );
    } catch (e) {
        console.error(e);
    }
}

start();

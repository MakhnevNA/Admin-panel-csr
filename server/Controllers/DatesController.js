import dayjs from 'dayjs';
import DatesService from '../services/DatesService.js';
import { generateDateTimes } from '../shared/utils/generateTime.js';
import { ObjectId } from 'mongodb';

class DatesController {
    async getAllDates(req, res) {
        try {
            const availableDates = await DatesService.getAllDates();
            return res.json(availableDates);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createDates(dataDates) {
        try {
            const createdDate = await DatesService.createDates(dataDates);
            return createdDate;
        } catch (e) {
            res.json({ dates: 'not found' });
            res.status(500).json(e);
        }
    }

    async getLastDateFromDB() {
        try {
            const lastRecord = await DatesService.getLastDateFromDB();
            return lastRecord;
        } catch (e) {
            // res.json({ dates: 'not found' });
        }
    }

    async loadDailyData() {
        try {
            const lastEntry = await this.getLastDateFromDB();
            const today = dayjs();
            const lastDate = lastEntry ? dayjs(lastEntry.value) : null;

            if (lastDate) {
                const diffInDays = dayjs(lastEntry.value).diff(today, 'day');
                if (diffInDays < 61) {
                    const recordsToCreate = 60 - diffInDays;
                    const newEntries = [];

                    for (let i = 0; i < recordsToCreate; i++) {
                        const newDate = lastDate.add(i, 'day').toISOString();
                        newEntries.push({
                            _id: new ObjectId(),
                            name: newDate.split('T')[0],
                            value: newDate.split('T')[0],
                        });
                    }

                    await DatesService.createDates(newEntries);
                    res.status(200).send(
                        `${recordsToCreate} записей было создано.`,
                    );
                }
            }
        } catch (e) {}
    }
}

export default new DatesController();

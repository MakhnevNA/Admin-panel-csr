import dayjs from 'dayjs';
import Dates from '../Shema/Dates.js';

class DatesService {
    async createDates(dataDates) {
        const dates = await Dates.insertMany(dataDates);
        return dates;
    }

    async getAllDates() {
        const allDates = await Dates.find();

        const today = dayjs();

        const availableDates = allDates.filter((item) => {
            const diffInDays = dayjs(item.value).diff(today, 'day');

            if (diffInDays >= 0) {
                return dayjs(item.value).diff(today, 'day');
            }
        });

        return availableDates;
    }

    async getLastDateFromDB() {
        const dates = await this.getAllDates();

        const lastDate = dates[dates.length - 1];

        return lastDate;
    }
}

export default new DatesService();

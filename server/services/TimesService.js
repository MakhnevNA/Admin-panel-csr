import Times from '../Shema/Times.js';

class TimesService {
    async getAvailableTimes(procedure) {
        const times = await Times.find({
            procedure: procedure,
        });
        return times;
    }
}

export default new TimesService();

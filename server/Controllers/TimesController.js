import TimesService from '../services/TimesService.js';

class TimesController {
    async getAvailableTimes(req, res) {
        try {
            const { procedure } = req.body;

            const availableTimes = await TimesService.getAvailableTimes(
                procedure,
            );
            return res.json(availableTimes);
        } catch (e) {
            res.json({ availableTimes: 'not found' });
            res.status(500).json(e);
        }
    }
}

export default new TimesController();

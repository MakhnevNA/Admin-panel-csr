import Master from '../Shema/Masters.js';

class MasterService {
    async getAvailableMasters(procedureId) {
        let masters;
        if (procedureId) {
            // Если была передан procedureId, то ищем у мастеров в поле procedures нужный id и возращаем тех мастеров, у которых этот id есть
            masters = await Master.find({
                procedures: { $elemMatch: { $eq: procedureId } },
            });
            return masters;
        } else {
            // Если procedureId процедуры не был передан, то возвращаем всех мастеров
            masters = await Master.find();
            return masters;
        }
    }
}

export default new MasterService();

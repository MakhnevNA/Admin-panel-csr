import Appointments from '../Shema/Appointments.js';

class AppoinmentsService {
    async createAppoinment(appointment) {
        const createdAppointment = await Appointments.create(appointment);
        return createdAppointment;
    }

    async getActiveAppointments() {
        const activeAppointments = await Appointments.find();

        const filteredActiveAppointments = activeAppointments
            .filter((active) => !active.canceled)
            .map((item) => {
                const { canceled, masterId, ...rest } = item.toObject();
                return rest;
            });

        return filteredActiveAppointments;
    }

    async getAllAppointments() {
        const allAppointments = await Appointments.find();

        const filteredAllAppointments = allAppointments.map((item) => {
            const { masterId, ...rest } = item.toObject();
            return rest;
        });

        return filteredAllAppointments;
    }

    async getOneAppointment(id) {
        const oneAppointment = await Appointments.findById(id);
        return oneAppointment;
    }

    async updateOneAppointment(appointment) {
        if (!appointment._id) {
            throw new Error('не указан id');
        }
        // TODO: с этим разобраться надо
        const updatedAppointment = await Appointments.findByIdAndUpdate(
            appointment._id,
        );
        return updatedAppointment;
    }
}

export default new AppoinmentsService();

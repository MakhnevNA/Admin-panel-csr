import Appointments from './Appointments.js';

class AppoinmentsService {
    async createAppoinment(appointment) {
        const createdAppointment = await Appointments.create(appointment);
        return createdAppointment;
    }

    async getAllAppointments() {
        const allAppointments = await Appointments.find();
        return allAppointments;
    }

    async getOneAppointment(id) {
        const oneAppointment = await Appointments.findById(id);
        return oneAppointment;
    }

    async updateOneAppointment(appointment) {
        if (!appointment._id) {
            throw new Error('не указан id');
        }
        // с этим разобраться надо
        const updatedAppointment = await Appointments.findByIdAndUpdate(
            appointment._id,
        );
        return updatedAppointment;
    }
}

export default new AppoinmentsService();

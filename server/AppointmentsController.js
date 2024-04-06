import Appointments from './Appointments.js';
import AppoinmentsService from './AppoinmentsService.js';

class AppointmentsController {
    async createAppoinment(req, res) {
        try {
            const appointments = await AppoinmentsService.createAppoinment(
                req.body,
            );
            res.json(appointments);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllAppointments(req, res) {
        try {
            const allAppointments =
                await AppoinmentsService.getAllAppointments();
            return res.json(allAppointments);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOneAppointment(req, res) {
        try {
            const oneAppointment = await AppoinmentsService.getOneAppointment(
                req.params.id,
            );
            return res.json(oneAppointment);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updateOneAppointment(req, res) {
        try {
            const updatedAppointment =
                await AppoinmentsService.updateOneAppointment(req.body);
            return res.json(updatedAppointment);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new AppointmentsController();

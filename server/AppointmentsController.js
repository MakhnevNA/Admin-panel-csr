import Appointments from './Appointments.js';
import AppoinmentsService from './AppoinmentsService.js';

class AppointmentsController {
    async createAppoinment(req, res) {
        try {
            await AppoinmentsService.createAppoinment(req.body);
            res.json({ appointmentAdded: true });
        } catch (e) {
            res.json({ appointmentAdded: false });
            res.status(500).json(e);
        }
    }

    async getActiveAppointments(req, res) {
        try {
            const activeAppointments =
                await AppoinmentsService.getActiveAppointments();
            return res.json(activeAppointments);
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

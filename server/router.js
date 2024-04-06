import { Router } from 'express';
import AppointmentsController from './AppointmentsController.js';

const router = new Router();

router.post('/', AppointmentsController.createAppoinment);
router.get('/', AppointmentsController.getAllAppointments);
router.get('/appointment/:id', AppointmentsController.getOneAppointment);
router.patch('/appointment/:id', AppointmentsController.updateOneAppointment);

export default router;

import { Router } from 'express';
import AppointmentsController from './AppointmentsController.js';

const router = new Router();

router.post('/', AppointmentsController.createAppoinment);
router.get('/', AppointmentsController.getActiveAppointments);
router.get('/history', AppointmentsController.getAllAppointments);

// TODO: тоже понять, что надо, что изменить, что добавить, что убрать.
router.get('/appointment/:id', AppointmentsController.getOneAppointment);
router.patch('/appointment/:id', AppointmentsController.updateOneAppointment);

export default router;

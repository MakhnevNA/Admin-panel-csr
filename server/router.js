import { Router } from 'express';
import AppointmentsController from './Controllers/AppointmentsController.js';
import ProceduresController from './Controllers/ProceduresController.js';
import MastersController from './Controllers/MastersController.js';
import TimesController from './Controllers/TimesController.js';

const router = new Router();

router.post('/', AppointmentsController.createAppoinment);

router.post('/procedures', ProceduresController.getAvailableProcedures);
router.post('/masters', MastersController.getAvailableMasters);
router.post('/times', TimesController.getAvailableTimes);

router.get('/', AppointmentsController.getActiveAppointments);
router.get('/history', AppointmentsController.getAllAppointments);

// TODO: тоже понять, что надо, что изменить, что добавить, что убрать.
router.get('/appointment/:id', AppointmentsController.getOneAppointment);
router.patch('/appointment/:id', AppointmentsController.updateOneAppointment);

export default router;

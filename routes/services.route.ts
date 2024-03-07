import express, { type Router } from 'express';
import ServiceController from '../controllers/services.controller';

const router: Router = express.Router();

router.get('/', ServiceController.getAllServices);
router.post('/', ServiceController.createService);
router.delete('/:serviceId', ServiceController.deleteService);
router.put('/:serviceId', ServiceController.editService);

export default router;

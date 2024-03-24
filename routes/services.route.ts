import express, { type Router } from 'express';
import ServiceController from '../controllers/services.controller';
import middleware from '../middlewares/validation.middleware';
import { createServiceSchema, deleteServiceSchema, editServiceSchema, getServiceByGenderSchema } from '../validation/services.validation';

const router: Router = express.Router();

router.get('/', ServiceController.getAllServices);
router.post('/', middleware(createServiceSchema), ServiceController.createService);
router.delete('/:serviceId', middleware(deleteServiceSchema), ServiceController.deleteService);
router.put('/:serviceId', middleware(editServiceSchema), ServiceController.editService);
router.get('/:gender', middleware(getServiceByGenderSchema), ServiceController.getServiceByGender);

export default router;

import express, { type Router } from 'express';
import DeviceControllers from '../controllers/device.controllers';
import middleware from '../middlewares/validation.middleware';
import { logoutDeviceSchema } from '../validation/devices.validation';

const router: Router = express.Router();

router.get('/', DeviceControllers.getAllLoggedInDevices);
router.delete('/:_id', middleware(logoutDeviceSchema), DeviceControllers.logout);

export default router;

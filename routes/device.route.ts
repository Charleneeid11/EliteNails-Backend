import express, { type Router } from 'express';
import DeviceControllers from '../controllers/device.controllers';

const router: Router = express.Router();

router.get('/', DeviceControllers.getAllLoggedInDevices);
router.delete('/:_id', DeviceControllers.logout);

export default router;

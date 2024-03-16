import express, { type Router } from 'express';
import AdminController from '../controllers/admin.controllers';

const router: Router = express.Router();

router.post('/', AdminController.register);
router.post('/verify', AdminController.verify);
router.get('/', AdminController.getUsers);
router.delete('/', AdminController.deleteUser);

export default router;

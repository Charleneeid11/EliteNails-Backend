import express, { type Router } from 'express';
import AdminController from '../controllers/admin.controllers';
import { registerSchema } from '../validation/admin.validation';
import middleware from '../middlewares/validation.middleware';

const router: Router = express.Router();

router.get('/', AdminController.getUsers);
router.post('/', middleware(registerSchema), AdminController.register);
router.post('/verify', AdminController.verify);
router.post('/login', AdminController.login);
router.put('/:userid', AdminController.editAccount);
router.delete('/:userid', AdminController.deleteUser);

export default router;

import express, { type Router } from 'express';
import AdminController from '../controllers/admin.controllers';

const router: Router = express.Router();

router.post('/', AdminController.register);
router.post('/verify', AdminController.verify);
router.get('/', AdminController.getUsers);
router.delete('/:userid', AdminController.deleteUser);
router.post('/login', AdminController.login);
router.put('/:userid', AdminController.editAccount);

export default router;

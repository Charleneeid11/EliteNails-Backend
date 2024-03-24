import express, { type Router } from 'express';
import AdminController from '../controllers/admin.controllers';
import { registerAndLoginSchema, verifySchema, editAccountSchema, deleteUserSchema } from '../validation/admin.validation';
import middleware from '../middlewares/validation.middleware';

const router: Router = express.Router();

router.get('/', AdminController.getUsers);
router.post('/', middleware(registerAndLoginSchema), AdminController.register);
router.post('/verify', middleware(verifySchema), AdminController.verify);
router.post('/login', middleware(registerAndLoginSchema), AdminController.login);
router.put('/:userid', middleware(editAccountSchema), AdminController.editAccount);
router.delete('/:userid', middleware(deleteUserSchema), AdminController.deleteUser);

export default router;

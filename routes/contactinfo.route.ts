import express, { type Router } from 'express';
import contactinfoControllers from '../controllers/contactinfo.controllers';
import middleware from '../middlewares/validation.middleware';
import { addContactInfoSchema } from '../validation/contactinfo.validation';

const router: Router = express.Router();

router.get('/', contactinfoControllers.getContactInfo);
router.post('/', middleware(addContactInfoSchema), contactinfoControllers.addContactInfo);

export default router;

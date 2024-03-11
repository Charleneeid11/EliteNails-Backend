import express, { type Router } from 'express';
import contactinfoControllers from '../controllers/contactinfo.controllers';

const router: Router = express.Router();

router.get('/', contactinfoControllers.getContactInfo);
router.post('/', contactinfoControllers.addContactInfo);

export default router;

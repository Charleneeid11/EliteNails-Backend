import express, { type Router } from 'express';
import CategoryController from '../controllers/categories.controllers';

const router: Router = express.Router();

router.get('/', CategoryController.getAllCategories);
router.post('/', CategoryController.createCategory);
router.delete('/:categoryid', CategoryController.deleteCategory);
router.put('/:categoryid', CategoryController.editCategory);

export default router;

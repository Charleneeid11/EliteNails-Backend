import type { NextFunction, Request, Response } from 'express';
import express from 'express';

const router = express.Router();

router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'Express' });
});

export default router;

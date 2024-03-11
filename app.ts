/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import express, {
    type Express,
    type Request,
    type Response,
    type NextFunction
} from 'express';
import { type ExpressRootError } from './interfaces/Errors';
import connectDB from './services/db';
import { config } from 'dotenv';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import serviceRouter from './routes/services.route';
import categoryRouter from './routes/categories.route';
import contactinfoRouter from './routes/contactinfo.route';

config();

const app: Express = express();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const connection = connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/services', serviceRouter);
app.use('/categories', categoryRouter);
app.use('/contactinfo', contactinfoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (
    err: ExpressRootError,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

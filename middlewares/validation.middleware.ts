import { type Request, type Response, type NextFunction } from 'express';
import { extendedJoi } from '../validation/joiObjectId';
import { type Schema, type ValidationError } from 'joi';

const middleware = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const wholeRequest = {
            ...req.params,
            ...req.body
        };
        const { error }: { error: ValidationError } = extendedJoi.validate(
            wholeRequest,
            schema
        );
        const valid = error === null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details
                .map((detailObject) => detailObject.message)
                .join(',');
            res.status(422).json({ message });
        }
    };
};

export default middleware;

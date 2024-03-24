import { type Request, type Response, type NextFunction } from 'express';
import { type Schema, type ValidationError } from 'joi';

const middleware = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const wholeRequest = {
            ...req.params,
            ...req.body
        };
        console.log(wholeRequest);
        const { error }: { error: ValidationError | undefined } = schema.validate(wholeRequest);
        console.log('error:', error);
        const valid = error === undefined;

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

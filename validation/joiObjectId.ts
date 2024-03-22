import Joi from 'joi';
import mongoose from 'mongoose';

export const extendedJoi = Joi.extend((joi) => ({
    type: 'objectId',
    base: joi.string(),
    messages: {
        'objectId.base': '{{#label}} must be a valid ObjectId'
    },
    validate (value, helpers) {
        if (!mongoose.Types.ObjectId.isValid(value as string)) {
            return { value, errors: helpers.error('objectId.valid') };
        }
    }
}));

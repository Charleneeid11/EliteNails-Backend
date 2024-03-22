import { type Schema } from 'joi';
import { extendedJoi } from './joiObjectId';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~`\-|=]).{8,}$/;

export const registerSchema: Schema = extendedJoi.object({
    email: extendedJoi.string().email().required().messages({
        'string.email': 'The email provided is not a valid email address.',
        'string.empty': 'Email is required.',
        'any.required': 'Email is required.'
    }),
    password: extendedJoi.string().pattern(passwordRegex).required().messages({
        'string.password': 'The password provided is not valid.',
        'string.pattern.base': 'The password must be 8 characters long with at least one alphabetic character, one numeric character, and one special character.'
    })
});

export const verifySchema = extendedJoi.object({
    userId: extendedJoi.ObjectId().required().messages({
        'objectId.base': 'User ID must be a valid ObjectId',
        'any.required': 'User ID is required'
    }),
    code: extendedJoi.string().code().required().messages({
        'string.base': 'Code must be a number',
        'string.empty': 'Code is needed'
    })
});

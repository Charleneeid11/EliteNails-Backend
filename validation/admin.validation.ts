import { type Schema } from 'joi';
import Joi from 'joi';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~`\-|=]).{8,}$/;

export const registerAndLoginSchema: Schema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'The email provided is not a valid email address.',
        'string.empty': 'Email is required.',
        'any.required': 'Email is required.'
    }),
    password: Joi.string().pattern(passwordRegex).required().messages({
        'string.password': 'The password provided is not valid.', //
        'string.pattern.base': 'The password must be 8 characters long with at least one alphabetic character, one numeric character, and one special character.'
    })
});

export const verifySchema = Joi.object({
    userid: Joi.string().required().messages({
        'string.base': 'User ID must be a valid string',
        'any.required': 'User ID is required'
    }),
    code: Joi.number().min(100000).required().messages({
        'number.base': 'Code must be a number', //
        'number.empty': 'Code is needed' //
    })
});

export const editAccountSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'The email provided is not a valid email address.',
        'string.empty': 'Email is required.',
        'any.required': 'Email is required.'
    }),
    usertype: Joi.string().required().valid('Admin', 'Employee'),
    userid: Joi.string().required()
});

export const deleteUserSchema = Joi.object({
    userid: Joi.string().required()
});

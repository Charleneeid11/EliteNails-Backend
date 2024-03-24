import Joi from 'joi';

export const createServiceSchema = Joi.object({
    name: Joi
        .string()
        .required()
        .messages({ 'string.empty': 'Name is required' }),
    price: Joi
        .number()
        .required()
        .min(0)
        .message('Price must be positive')
        .messages({
            'number.base': 'Price is required',
            'number.empty': 'Price is required'
        }),
    categoryid: Joi
        .string()
        .required()
        .messages({
            'string.base': 'Category ID must be a valid string',
            'any.required': 'Category ID is required.'
        }),
    gender: Joi
        .string()
        .required()
        .valid('Female', 'Male', 'Both')
        .messages({
            'string.empty': 'Gender is required',
            'string.base': 'Gender is required',
            'any.only': 'Gender must be one of [Female, Male, Both]'
        })
});

export const editServiceSchema = Joi.object({
    serviceId: Joi.string().required(),
    name: Joi
        .string()
        .required()
        .messages({ 'string.empty': 'Name is required' }),
    price: Joi
        .number()
        .required()
        .min(0)
        .message('Price must be positive')
        .messages({
            'number.base': 'Price is required',
            'number.empty': 'Price is required'
        }),
    categoryid: Joi
        .string()
        .required()
        .messages({
            'string.base': 'Catgeory ID must be a valid string',
            'any.required': 'Category ID is required'
        }),
    gender: Joi
        .string()
        .required()
        .valid('Female', 'Male', 'Both')
        .messages({
            'string.empty': 'Gender is required',
            'string.base': 'Gender is required',
            'any.only': 'Gender must be one of [Female, Male, Both]'
        })
});

export const getServiceByGenderSchema = Joi.object({
    gender: Joi
        .string()
        .required()
        .valid('Female', 'Male', 'Both')
});

export const deleteServiceSchema = Joi.object({
    serviceId: Joi.string().required()
});

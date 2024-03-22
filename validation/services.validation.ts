import { extendedJoi } from './joiObjectId';

const createServiceSchema = extendedJoi.object({
    name: extendedJoi
        .string()
        .required()
        .messages({ 'string.empty': 'Name is required' }),
    price: extendedJoi
        .number()
        .required()
        .min(0)
        .message('Price must be positive')
        .messages({
            'number.base': 'Price is required',
            'number.empty': 'Price is required'
        }),
    categoryid: extendedJoi
        .objectId()
        .required()
        .message('Category ID must be a valid ObjectId')
        .messages({ 'any.required': 'Category ID is required.' }),
    gender: extendedJoi
        .string()
        .required()
        .valid('Female', 'Male', 'Both')
        .messages({
            'string.empty': 'Gender is required',
            'string.base': 'Gender is required',
            'any.only': 'Gender must be one of [Female, Male, Both]'
        })
});

const editServiceSchema = extendedJoi.object({
    serviceId: extendedJoi.objectId().required().messages({
        'objectId.base': 'Service ID must be a valid ObjectId',
        'any.required': 'Service ID is required'
    }),
    name: extendedJoi
        .string()
        .required()
        .messages({ 'string.empty': 'Name is required' }),
    price: extendedJoi
        .number()
        .required()
        .min(0)
        .message('Price must be positive')
        .messages({
            'number.base': 'Price is required',
            'number.empty': 'Price is required'
        }),
    categoryid: extendedJoi
        .objectId()
        .required()
        .message('Category ID must be a valid ObjectId')
        .messages({
            'objectId.base': 'Catgeory ID must be a valid ObjectId',
            'any.required': 'Category ID is required'
        }),
    gender: extendedJoi
        .string()
        .required()
        .valid('Female', 'Male', 'Both')
        .messages({
            'string.empty': 'Gender is required',
            'string.base': 'Gender is required',
            'any.only': 'Gender must be one of [Female, Male, Both]'
        })
});

const getServiceByGenderSchema = extendedJoi.object({
    gender: extendedJoi
        .string()
        .required()
        .valid('Female', 'Male', 'Both')
        .messages({
            'string.base': 'Gender must be a string',
            'any.required': 'Gender is required'
        })
});

module.exports = {
    createServiceSchema,
    editServiceSchema,
    getServiceByGenderSchema
};

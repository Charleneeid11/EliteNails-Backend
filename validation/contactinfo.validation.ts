import Joi from 'joi';

const eightDigits = /\d{8}$/;

export const addContactInfoSchema = Joi.object({
    phonenum: Joi.string()
        .pattern(eightDigits)
        .message('Phone number must be 8 digits long.')
        .required()
        .messages({
            'string.empty': 'Phone number is required',
            'string.base': 'Phone number is required',
            'string.length': 'Phone number must be 8 digits long'
        }),
    whatsappnum: Joi.string()
        .pattern(eightDigits)
        .message('Whatsapp number must be 8 digits long.')
        .required()
        .messages({
            'string.empty': 'Whatsapp number is required',
            'string.base': 'Whatsapp number is required',
            'string.length': 'Whatsapp number must be 8 digits long',
            'string.pattern.base': 'Whatsapp number must be 8 digits long'
        }),
    instalink: Joi.string()
        .pattern(/^https:\/\/(www.)?instagram.com\/[a-zA-Z0-9_.]{1,30}\/?$/)
        .message('The link must be a valid instagram link.')
        .required()
        .messages({ 'string.empty': 'Instagram link is required' }),
    instaname: Joi.string().required().messages({
        'string.empty': 'Instagram name is required',
        'string.base': 'Instagram name must be a string.'
    })
});

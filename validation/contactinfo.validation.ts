import { extendedJoi } from './joiObjectId';

const eightDigits = '/d{8}$/';
const addContactInfoSchema = extendedJoi.object({
    phonenum: extendedJoi.string.pattern(eightDigits).required().messages({
        'string.empty': 'Phone number is required',
        'string.base': 'Phone number is required',
        'string.length': 'Phone number must be 8 digits long'
    }),
    whatsappnum: extendedJoi.string.pattern(eightDigits).required().messages({
        'string.empty': 'Whatsapp number is required',
        'string.base': 'Whatsapp number is required',
        'string.length': 'Whatsapp number must be 8 digits long',
        'string.pattern.base': 'Whatsapp number must be 8 digits long'
    }),
    instalink: extendedJoi.string
        .pattern(/^https:\/\/(www.)?instagram.com\/[a-zA-Z0-9_.]{1,30}\/?$/)
        .required()
        .message({
            'string.pattern.base': 'The link must be a valid instagram link'
        }),
    instaname: extendedJoi.string.required().messages({
        'string.empty': 'Instagram name is required',
        'string.base': 'Instagram name is required'
    })
});

module.exports = { addContactInfoSchema };

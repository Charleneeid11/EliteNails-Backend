import Joi from 'joi';

export const logoutDeviceSchema = Joi.object({
    _id: Joi.string().required()
});

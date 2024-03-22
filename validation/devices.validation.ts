import { extendedJoi } from './joiObjectId';

const logoutDeviceSchema = extendedJoi.object({
    deviceId: extendedJoi.ObjectId().required().messages({
        'objectId.base': 'Device ID must be a valid ObjectId',
        'any.required': 'Device ID is required'
    })
});

module.exports = { logoutDeviceSchema };

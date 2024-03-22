import { extendedJoi } from './joiObjectId';

const createCategorySchema = extendedJoi.object({
    name: extendedJoi.string().required().messages({
        'string.empty': 'Name of category is required.',
        'string.base': 'Name of category is required.'
    })
});

const editCategorySchema = extendedJoi.object({
    categoryID: extendedJoi.ObjectId().required().messages({
        'objectId.base': 'Category ID must be a valid ObjectId',
        'any.required': 'Category ID is required'
    }),
    name: extendedJoi.string().required().messages({
        'string.empty': 'Name of category is required.',
        'string.base': 'Name of category is required.'
    })
});

const deleteCategorySchema = extendedJoi.object({
    categoryId: extendedJoi.ObjectId().required().messages({
        'objectId.base': 'Category ID must be a valid ObjectId',
        'any.required': 'Catgory ID is required'
    })
});

module.exports = {
    createCategorySchema,
    editCategorySchema,
    deleteCategorySchema
};

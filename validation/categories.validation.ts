import Joi from 'joi';

export const createCategorySchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'Name of category is required.',
        'string.base': 'Name of category must be a string.'
    })
});

export const editCategorySchema = Joi.object({
    categoryid: Joi.string().required(),
    name: Joi.string().required().messages({
        'string.empty': 'Name of category is required.',
        'string.base': 'Name of category must be a string.'
    })
});

export const deleteCategorySchema = Joi.object({
    categoryid: Joi.string().required()
});

import Joi from 'Joi';
import validation from 'express-joi-validation';
const validator = validation.createValidator({passError:true});

export default [
  validator.body(
    Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      dueDate: Joi.number()
        .min(new Date().getTime()).required(),
    })
  ),
]
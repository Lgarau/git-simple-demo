import Joi from 'Joi';
//const validator = validation.updateValidator({passError:true});
import validator from 'express-joi-validation';

export default [
  validator.body(
    Joi.object().keys({
      name: Joi.string().optional(),
      status: Joi.string().valid('open','closed').optional(),
      description: Joi.string().optional(),
      dueDate: Joi.number()
        .min(new Date().getTime()).optional(),
    })
  ),
  validator.params(
    Joi.object().keys({
      "id": Joi.string().regex(/^(?!0+[1-9]+)\d+$/).required(),
    }),
  ),
  validator.headers(
    Joi.object().keys({
      "content-type": Joi.string()
        .valid('application/json').required(),
    }).unknown(),
  )
]
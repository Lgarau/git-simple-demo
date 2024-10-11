
import createValidator from '../validator/createValidator.js';
import updateValidator from '../validator/updateValidator.js';
import addController from './addController.js';
import retrieveController from  './retrieveController.js';
import removeController from './removeController.js';
import updateController from './updateController.js';

const setup = (app) => {
    app.get('/:id',retrieveController);
    app.post('/',createValidator, addController);
    app.patch('/:id',updateValidator,updateController);
    app.delete('/:id',removeController);
    //definire app.use dopo la route app.post, app.patch
    app.post('/user', createUserValidator, createUser)
    app.use((err,req,res,next) => {
        if (err && err.error && err.error.isJoi ) {
            res.status(400).json({
                type:err.type,
                message:err.error.toString()
            })
            
        }else {
            next(err);
        }
    })
}

export default setup;
import {Router} from "express";
import UserController from "../controllers/user.controller.js"
import { validate } from "../middleware/user.middleware.js";
import { signupSchema } from "../Validators/user.validator.js";

const router = Router();
router.route('/').get(UserController.home)
router.route('/register').post( validate(signupSchema) ,UserController.register)
router.route('/login').post(UserController.login)

export default router //(module js)
//module.exports = router(common js)

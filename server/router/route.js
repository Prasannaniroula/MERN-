import {Router} from "express";
import UserController from "../controllers/user.controller.js"
import { validate } from "../middleware/user.middleware.js";
import { signupSchema } from "../Validators/user.validator.js";
import userController from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js"

const router = Router();
router.route('/').get(UserController.home)
router.route('/register').post( validate(signupSchema) ,UserController.register)
router.route('/login').post(UserController.login)

router.route('/user').get(authMiddleware , userController.user)

export default router //(module js)
//module.exports = router(common js)

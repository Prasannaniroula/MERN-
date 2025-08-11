import {Router} from "express";
import UserController from "../controllers/user.controller.js"

const router = Router();
router.route('/').get(UserController.home)
router.route('/register').post(UserController.register)
router.route('/login').post(UserController.login)

export default router //(module js)
//module.exports = router(common js)

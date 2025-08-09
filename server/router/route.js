import {Router} from "express";
import UserController from "../controllers/user.controller.js"

const router = Router();
router.get('/',UserController.home)
router.get('/register',UserController.register)

export default router //(module js)
//module.exports = router(common js)

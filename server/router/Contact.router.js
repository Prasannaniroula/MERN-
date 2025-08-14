import {router} from "express";
import { contactForm } from "../controllers/contact.controller";


router.route("/contact",contactForm)

export  {router};
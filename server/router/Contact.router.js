import Router from "express";
import { contactForm } from "../controllers/contact.controller.js";

const contactRouter = Router();
contactRouter.route("/contact").post(contactForm)

export  {contactRouter};
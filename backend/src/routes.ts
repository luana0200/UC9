import { Router } from "express";
import { LoginController } from "./controller/Login/LoginController";

const router = Router()

//Login
router.post('/Login', new LoginController().handle)

export { router }
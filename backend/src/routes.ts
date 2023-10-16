import { Router } from 'express'
import { LoginController } from './controller/Login/LoginController'
import { CriarUsuariosController } from './controller/Usuarios/CriarUuariosController'

const router = Router()

//Login
router.post('/Login', new LoginController().handle)

//usuarios
router.post('/CriarUsuarios', new CriarUsuariosController().handle)

export { router }
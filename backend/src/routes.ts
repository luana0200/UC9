import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

import { isAutenticado } from './middleware/isAutenticado'

import { CriarCategoriasController } from './controller/Categorias/CriarCategoriasController'
import { CriarProdutosController } from './controller/Produtos/CriarProdutosController'
import { CriarUsuariosController } from './controller/Usuarios/CriarUuariosController'

import { LoginController } from './controller/Login/LoginController'

import { ListarCategoriasController } from './controller/Categorias/ListarCategoriasController'
import { ListarProdutosController } from './controller/Produtos/ListarProdutosController'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//Login
router.post('/LoginUsuarios', new LoginController().handle)

//usuarios
router.post('/CriarUsuarios', new CriarUsuariosController().handle)

//categorias
router.post('/CriarCategorias', isAutenticado, new CriarCategoriasController().handle)
router.get('/ListarCategorias', new ListarCategoriasController().handle)

//produtos
router.post('/CriarProdutos', isAutenticado, upload.single('file'), new CriarProdutosController().handle)
router.get('/ListarProdutos', isAutenticado, new ListarProdutosController().handle)


export { router }
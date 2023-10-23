import { Router } from 'express'
import { CriarCategoriasController } from './controller/Categorias/CriarCategoriasController'
import { ListarCategoriasController } from './controller/Categorias/ListarCategoriasController'
import { LoginController } from './controller/Login/LoginController'
import { CriarProdutosController } from './controller/Produtos/CriarProdutosController'
import { CriarUsuariosController } from './controller/Usuarios/CriarUuariosController'

const router = Router()

//Login
router.post('/LoginUsuarios', new LoginController().handle)

//usuarios
router.post('/CriarUsuarios', new CriarUsuariosController().handle)

//categorias
router.post('/CriarCategorias', new CriarCategoriasController().handle)
router.get('/ListarCategorias', new ListarCategoriasController().handle)

//produtos
router.post('/CriarProdutos', new CriarProdutosController().handle)
export { router }
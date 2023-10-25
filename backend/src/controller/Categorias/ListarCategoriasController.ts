import { Request, Response } from 'express'
import { ListarCategoriasServices } from '../../services/Categorias/ListarCategoriasServices'


class ListarCategoriasController {
    async handle(req: Request, res: Response) {
        const listarCategoriasServices = new ListarCategoriasServices()
        const resposta = await listarCategoriasServices.execute()
        return(resposta)
    }
}

export { ListarCategoriasController }
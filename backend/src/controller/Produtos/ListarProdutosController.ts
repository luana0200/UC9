import { Request, Response } from 'express'
import { ListarProdutosServices } from '../../services/Produtos/ListarProdutosServices'


class ListarProdutosController {
    async handle(req: Request, res: Response) {
        const listarProutosServices = new ListarProdutosServices()
        const response = await listarProutosServices.execute()

        return res.json(response)
    }
}

export { ListarProdutosController }
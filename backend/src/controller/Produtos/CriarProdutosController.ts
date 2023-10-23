import { Request, Response } from 'express'
import { CriarProdutosServices } from '../../services/Produtos/CriarProdutosServices'

class CriarProdutosController {
    async handle(req: Request, res: Response) {
        const { nome, fabricante, quantidade, preco, banner, categoriasId } = req.body
        const criarProdutosServices = new CriarProdutosServices()
        const resposta = await criarProdutosServices.execute({
            nome,
            fabricante,
            quantidade,
            preco,
            banner,
            categoriasId
        })

        return res.json(resposta)
    }
}

export { CriarProdutosController }
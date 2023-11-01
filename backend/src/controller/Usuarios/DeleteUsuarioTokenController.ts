import { Request, Response } from 'express'
import { DeleteUsuarioTokenServices } from '../../services/Usuarios/DeleteUsuarioTokenServices'


class DeleteUsuarioTokenController {
    async handle(req: Request, res: Response) {
        const { remove } = req.body

        const deleteUsuarioToken = new DeleteUsuarioTokenServices()
        const resposta = await deleteUsuarioToken.execute({
            remove
        })
        return res.json(resposta)
    }
}

export { DeleteUsuarioTokenController }
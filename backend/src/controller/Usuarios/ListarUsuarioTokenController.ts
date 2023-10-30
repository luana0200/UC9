import { Request, Response } from 'express'
import { ListarUsuarioTokenServices } from '../../services/Usuarios/ListarUsuarioTokenServices'


class ListarUsuarioTokenController {
    async handle(req: Request, res: Response) {
        const id = req.user_id
        const listarUsuarioToken = new ListarUsuarioTokenServices()
        const resposta = await listarUsuarioToken.execute({
            id
        })

        return res.json(resposta)

    }
}

export { ListarUsuarioTokenController }
import { Request, Response } from 'express'

class LoginController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body
        console.log(email, senha)
    }
}
export { LoginController }

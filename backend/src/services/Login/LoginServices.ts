import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'

interface LoginUsuarios {
    email: string
    password: string
}
class LoginServices {
    async execute({ email, password }: LoginUsuarios) {
        const usuario = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (!usuario) {
            throw new Error('Usuário/Senha Incorretos')
        }

        const autenticado = await compare(password, usuario.senha)
        if (!autenticado) {
            throw new Error('Usuário/Senha Incorretos')
        }
    }
}

export { LoginServices }
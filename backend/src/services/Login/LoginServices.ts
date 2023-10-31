import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

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

        const autenticado = await compare(password, usuario.senha)//cryptografa a senha 
        if (!autenticado) {
            throw new Error('Usuário/Senha Incorretos')
        }

        //criando o token
        const token = sign({ // a estrutura do token gera uma hash grande
            id: usuario.id,
            email: usuario.email
        },
            process.env.JWT_SECRET, //jwt_secret vem da hash do env
            {
                subject: usuario.id,
                expiresIn: "2h"
            }
        )

        return { //oq retorna pro front-end
            id: usuario.id,
            email: usuario.email,
            token: token

        }

    }
}

export { LoginServices }
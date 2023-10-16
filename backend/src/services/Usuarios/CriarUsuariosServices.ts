import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface CriarUsuarios {
    nome: string
    email: string
    password: string
}

class CriarUsuariosServices {
    async execute({ nome, email, password }: CriarUsuarios) {
        if (!nome || !email || !password) {
            throw new Error('Existem Campos em Branco')
        }

        const emailExiste = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (emailExiste) {
            throw new Error('Email já Cadastrado')
        }

        const senhaCrypt = await hash(password, 8)

        const resposta = await prismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })

        return resposta
    }
}

export { CriarUsuariosServices }

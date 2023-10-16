import prismaClient from '../../prisma'

interface CriarUsuarios {
    nome: string
    email: string
    password: string
}

class CriarUsuariosServices {
    async execute({ nome, email, password }: CriarUsuarios) {
        console.log(nome, email, password)
    }
}

export { CriarUsuariosServices }
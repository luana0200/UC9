import prismaClient from '../../prisma'

interface CriarCategorias {
    nome: string
}

class CriarCategoriasServices {
    async execute({ nome }: CriarCategorias) {
        const CateCadastrado = await prismaClient.categorias.findFirst({
            where: {
                nome: nome
            }
        })

        if (CateCadastrado) {
            throw new Error('Este Nome já esta Cadastrado')
        }

        const resposta = await prismaClient.categorias.create({
            data: {
                nome: nome
            }
        })

        return resposta
    }
}

export { CriarCategoriasServices }
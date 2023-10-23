import prismaClient from '../../prisma'


class ListarCategoriasServices {
    async execute() {
        const response = await prismaClient.categorias.findMany({})
        return response
    }
}

export { ListarCategoriasServices }
import prismaClient from "../../prisma";


class ListarProdutosServices {
    async execute() {
        const resposta = await prismaClient.produtos.findMany({})

        return resposta
    }
}

export { ListarProdutosServices }
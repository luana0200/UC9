import prismaClient from '../../prisma'

interface CriarProdutos {
    nome: string
    fabricante: string
    quantidade: string
    preco: string
    categoriasId: string
    banner: string
}

class CriarProdutosServices {
    async execute({ nome, fabricante, quantidade, preco, categoriasId, banner }: CriarProdutos) {
        // if (!nome || !fabricante || !quantidade || !preco  || !categoriasId) {
        //     throw new Error('Campos em Branco não são Permitidos')
        // }

        const cadastrado = await prismaClient.produtos.findFirst({
            where: {
                nome: nome
            }
        })

        if (cadastrado) {
            throw new Error('Este Nome já esta Cadastrado')
        }

        const produtos = await prismaClient.produtos.create({
            data: {
                nome: nome,
                fabricante: fabricante,
                quantidade: quantidade,
                preco: preco,
                categoriasId: categoriasId,
                banner: banner
            }
        })

        return produtos

    }
}

export { CriarProdutosServices }
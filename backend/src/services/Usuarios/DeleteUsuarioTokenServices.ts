import prismaClient from "../../prisma";

interface DeleteToken {
    remove: string
}

class DeleteUsuarioTokenServices {
    async execute({ remove }: DeleteToken) {

        await prismaClient.usuario.delete({
            where: {
                id: remove
            }
        })

        return { dados: 'Token Removido Com Sucesso' }

    }
}

export { DeleteUsuarioTokenServices }
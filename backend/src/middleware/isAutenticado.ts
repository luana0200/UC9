import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

interface AuthT {
    sub: string
}

export function isAutenticado(
    req: Request,
    res: Response,
    next: NextFunction) {  //nextfunction da continuidade na acao

    const authToken = req.headers.authorization

    if (!authToken) {
        // return res.status(401).end
        return res.json({ dados: 'Token Inválido' })
    }

    const [, token] = authToken.split(' ') //split quebra o array em posicoes

    try {
        const { sub } = verify(  //sub: vem com o token, ou seja, descontroi as informacoes vinda do token e salva no SUB
            token,
            process.env.JWT_SECRET
        ) as AuthT
        req.user_id = sub
        return next()
    } catch (err) {
        // return res.status(401).end
        return res.json({ dados: 'Token  Expirado' })
    }

}
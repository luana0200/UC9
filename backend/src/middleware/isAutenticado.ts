import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

import { ListarCategoriasServices } from '../services/Categorias/ListarCategoriasServices'

interface AuthT {
    sub: string
}

export function isAutenticado(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).end
    }

    const [, token] = authToken.split(' ') //split quebra o array em posicoes
    
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as AuthT
      
        return next()
    } catch (err) {
        return res.status(401).end
    }

}
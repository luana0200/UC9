import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

interface AuthT {
    sub: string
}

export function isAutenticado(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).end
    }

    const [, token] = authToken.split(' ')

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as AuthT
        return next()
        // console.log(sub)
    } catch (err) {
        return res.status(401).end
    }
}
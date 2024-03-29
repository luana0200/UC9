import express, { Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './routes'
import path from 'path'

const app = express()
app.use(express.json())// aderindo o express ao json
app.use(cors()) //tem o parenteses pois é uma função
app.use(router)

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use((err: Error, req: Request, res: Response) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }


    return res.status(500).json({
        status: 'Erro',
        message: 'Erro Interno do Servidor'
    })
})

app.listen(3333, () => console.log('Servidor Rodando na Porta 3333'))
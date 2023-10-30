// crateContext uma biblioteca para a manipulacao de dados entre arquivos dentro da aplicacao
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import apiLocal from '../API/apiLocal/api'

export const AuthContext = createContext()

//children é uma palavra reservada
export default function AuthProvider({ children }) {

    const [user, setUser] = useState('')
    // const [token, setToken] = useState('')

    const isAutenticated = !!user
    
    const iToken = localStorage.getItem('@tklogin2023')
    const token = JSON.parse(iToken)

    async function loginToken() { //verifica se o token é valido
        try {
            const resposta = await apiLocal.get('/ListarUsuarioToken', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            console.log(resposta)
        } catch (err) {

        }
    }


    // se utiliza as chaves para DESCONSTRUIR os arquivos json para usar as informações dentro dele
    async function signIn({ email, password }) {
        try {
            const resposta = await apiLocal.post('/LoginUsuarios', {
                email, password
            })

            const token = localStorage.setItem('@tklogin2023', JSON.stringify(resposta.data.token))
            return resposta

        } catch (err) {

        }
    }
    return (
        <AuthContext.Provider value={{ signIn, loginToken }}>
            {children}
        </AuthContext.Provider>
    )
}
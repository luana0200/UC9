// crateContext uma biblioteca para a manipulacao de dados entre arquivos dentro da aplicacao
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import apiLocal from '../API/apiLocal/api'

export const AuthContext = createContext()

//children é uma palavra reservada
export default function AuthProvider({ children }) {

    const [user, setUser] = useState('')
    const [token, setToken] = useState('')

    const isAutenticated = !!user

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
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
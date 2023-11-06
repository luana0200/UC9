import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../Contexts/AuthContext'
import apiLocal from '../API/apiLocal/api'
import './inicio.estilo.scss'

export default function Login() {

    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    const iToken = localStorage.getItem('@tklogin2023')
    const token = JSON.parse(iToken)

    useEffect(() => {
        if (!token) { //se token for vazio(falso) ent continua na tela de login
            navigation('/')
            return
        } else if (token) { //se token for verdadeiro ent ele vai consultar o back para ver se é valido
            async function verificaToken() {
                const resposta = await apiLocal.get('/ListarUsuarioToken', {
                    headers: {
                        Authorization: 'Bearer ' + `${token}`
                    }
                })
                if (resposta.data.dados) {
                    navigation('/')
                    // alert('Token Inválido')
                    return
                }
                // console.log(resposta) //para verificar como recebo a informaç~qo quando nao tem token 
            }
            verificaToken()
        }
    }, [])

    async function handleLogin(e) {
        e.preventDefault()
        let data = {
            email,
            password
        }

        const resposta = await signIn(data)

        if (!resposta) {
            toast.error('Erro de Login')
            return
            
        } else if (resposta.status === 200) {
            const token = resposta.data.token
            localStorage.setItem('@tklogin2023', JSON.stringify(token)) //stringify= para converter em string
            toast.success('Login Efetuado com Sucesso')
            navigation('/Dashboard')
        }
    }

    return (
        <div>
            <div className='loginInicio'>
                <h1>Login</h1>
            </div>

            <div className='formInicio'>
                <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Enviar</button>
                </form>
                <p>Para se cadastrar clique <Link to='/CriarUsuarios'>AQUI</Link></p>
            </div>

        </div>
    )
}
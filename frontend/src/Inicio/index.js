import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'
import './inicio.estilo.scss'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    async function handleLogin(e) {
        e.preventDefault()
        console.log(email, password)

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
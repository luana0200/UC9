import 'react-dom'
import { Link } from 'react-router-dom'
import './inicio.estilo.scss'

export default function Login() {
    return (
        <div>
            <div className='loginInicio'>
                <h1>Login</h1>
            </div>

            <div className='formInicio'>
                <form>
                    <label>Email:</label>
                    <input
                        type="text" />

                    <label>Senha:</label>
                    <input
                        type="password" />
                    <button>Enviar</button>
                </form>
                <p>Para se cadastrar clique <Link to='/Login'>AQUI</Link></p>
            </div>

        </div>
    )
}
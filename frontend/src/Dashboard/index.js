import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

export default function Dashboard() {

    const { loginToken } = useContext(AuthContext)
    loginToken()
    
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to='/Produtos'>Cadastrar Produtos</Link>


        </div>
    )
}
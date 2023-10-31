import { useContext, useEffect } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

export default function Dashboard() {
    const navigation = useNavigate()
    const { loginToken } = useContext(AuthContext)

    useEffect(() => {
        const iToken = localStorage.getItem('tklogin2023')
        const token = JSON.parse(iToken)

        if (token) {
            navigation('/')
            return
        } else if(!token){
            
        }
        loginToken()
    }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            <Link to='/Produtos'>Cadastrar Produtos</Link>


        </div>
    )
}
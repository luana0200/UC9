import { useContext, useEffect } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import apiLocal from '../API/apiLocal/api'
// import { AuthContext } from '../Contexts/AuthContext'

export default function Dashboard() {
    const navigation = useNavigate()

    function handleSair() {  //acionada atraves do botao (evento)
        localStorage.removeItem('@tklogin2023') //apagar o token
        navigation('/')
    }

    const iToken = localStorage.getItem('@tklogin2023')
    const token = JSON.parse(iToken)
    useEffect(() => {  //ciclo de vida

        if (!token) {
            navigation('/')
            return
        } else if (token) {
            async function verificaToken() {
                const resposta = await apiLocal.get('/ListarUsuarioToken', {
                    headers: {
                        Authorization: 'Bearer ' + `${token}`
                    }
                })

                if (resposta.data.dados) {
                    navigation('/')
                    return
                }
                console.log(resposta)
            }
            verificaToken()
        }
    }, [token])


    return (
        <div>
            <h1>Dashboard</h1>
            <Link to='/Produtos'>Cadastrar Produtos</Link> <br />
            <Link to='/Categorias'>Cadastrar Categorias</Link> <br />
            <button onClick={handleSair}>Sair</button>

        </div>
    )
}
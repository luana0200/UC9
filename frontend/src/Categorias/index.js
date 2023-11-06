import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import apiLocal from "../API/apiLocal/api";
import './categoria.scss'

export default function Categorias() {

    const navigation = useNavigate()

    const [nome, setNome] = useState('')
    
            const iToken = localStorage.getItem('@tklogin2023')  // pegando o token
            const token = JSON.parse(iToken)

    useEffect(() => {

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

    async function cadastroCategoria(e) {

        try {
            e.preventDefault()
            const resposta = await apiLocal.post('/CriarCategorias', {
                nome
            })

            console.log(token)
            return resposta

        } catch (err) {

        }
    }


    return (
        <div className='containerProdutosCadastro'>
            <div>
                <h1>Categorias</h1>
            </div>

            <div>
                <form onSubmit={cadastroCategoria}>
                    <label>Nome:</label>
                    <input type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} />

                    <br />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import apiLocal from "../API/apiLocal/api";
import './categoria.scss'

export default function Categorias() {

    const navigation = useNavigate()

    const [nome, setNome] = useState('')

    useEffect(() => {

        const iToken = localStorage.getItem('@tklogin2023')  // pegando o token
        const token = JSON.parse(iToken)

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
    }, [])

    async function cadatroCategoria(e) {
        e.preventDefault()
        if (nome === '') {
            toast.error('Campos em Branco não são Permitidos')
            return
        }
        apiLocal.post('/CriarCategorias', {
            nome
            
        })
        toast.success('Cadastro Feito com Sucesso')
    }
    // async function cadatroCategoria(e) {
    //     try {
    //         e.preventDefault()
    //         if (nome === '') {
    //             toast.error('Campos em Branco não são Permitidos')
    //             return
    //         }
    //         const resposta = await apiLocal.post('/CriarCategorias', {
    //             nome
    //         })
    //         toast.success('Enviado com Sucesso')
    //         console.log(resposta)

    //     } catch (err) {
    //         console.log(err)
    //     }

    //     setNome('')
    // }


    return (
        <div className='containerProdutosCadastro'>
            <div>
                <h1>Categorias</h1>
            </div>

            <div>
                <form onSubmit={cadatroCategoria}>
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
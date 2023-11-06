import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import apiLocal from '../API/apiLocal/api'
import './produto.estilo.scss'

export default function Produtos() {
    const navigation = useNavigate()

    const [categorias, setCategorias] = useState([''])
    const [nome, setNome] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')

    const [idCategoria, setIdCategoria] = useState('')
    const [imagem, setImagem] = useState(null)

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
    }, [])

    useEffect(() => {
        async function listarCategorias() {
            const resposta = await apiLocal.get('/ListarCategorias', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            setCategorias(resposta.data) // retorna oq esta dentro de DATA
        }
        listarCategorias()
    }, [categorias])


    function handleImagem(e) {
        if (!e.target.files) {
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg') {
            setImagem(image)
        }
    }

    async function handleCadastro(e) {
        try {
            e.preventDefault()
            const categoriaId = idCategoria
            const data = new FormData()

            data.append('nome', nome)
            data.append('fabricante', fabricante)
            data.append('quantidade', quantidade)
            data.append('preco', preco)
            data.append('categoriasId', categoriaId)
            data.append('file', imagem)

            const resposta = await apiLocal.post('/CriarProdutos', data, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            
            // toast.success('Enviado com Sucesso')
            console.log(resposta)

        } catch (err) {
            console.log(err)

        }
    }

    return (
        <div className='containerProdutosCadastro'>
            <div>
                <h1>Produtos</h1>
            </div>

            <div>
                <form onSubmit={handleCadastro}>
                    <select
                        value={idCategoria}
                        onChange={(e) => setIdCategoria(e.target.value)}>

                        <option >Selecione...</option>
                        {categorias.map((item) => { //mapear os seus itens
                            return (
                                <option value={item.id} key={item.id} >{item.nome}</option>
                            )
                        })}
                    </select>

                    <label>Nome:</label>
                    <input type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <label>Fabricante:</label>
                    <input type='text'
                        value={fabricante}
                        onChange={(e) => setFabricante(e.target.value)}
                    />
                    <label>Quantidade:</label>
                    <input type='text'
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                    <label>Preço:</label>
                    <input type='text'
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />

                    <label>Imagem:</label>
                    <input
                        type="file"

                        accept='image/jpeg, image/png'
                        onChange={handleImagem}
                    />

                    <br />
                    <button type='submit'>Enviar</button>

                </form>
            </div>
        </div>
    )
}
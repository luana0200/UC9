import React, { useState, useEffect } from 'react'
import apiLocal from '../API/apiLocal/api'
import './produto.estilo.scss'

export default function Produtos() {

    const [categorias, setCategorias] = useState([''])
    const [idCategoria, setIdCategoria] = useState('')

    const [nome, setNome] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')


    useEffect(() => {
        async function listarCategorias() {
            const resposta = await apiLocal.get('/ListarCategorias')
            setCategorias(resposta.data) // retorna oq esta dentro de DATA

        }
        listarCategorias()
    }, [categorias])

    async function handleCadastro(e) {
        e.preventDefault()
        console.log(nome, fabricante, quantidade, preco)
        console.log(idCategoria)
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
                        type='file'
                    />

                    <br />
                    <button type='submit'>Enviar</button>

                </form>
            </div>
        </div>
    )
}
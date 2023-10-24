import React, { useState, useEffect } from 'react'
import apiLocal from '../API/apiLocal/api'
import './produto.estilo.scss'

export default function Produtos() {

    const [categorias, setCategorias] = useState([''])

    useEffect(() => {
        async function listarCategorias() {
            const resposta = await apiLocal.get('/ListarCategorias')
            setCategorias(resposta.data) // retorna oq esta dentro de DATA

        }
        listarCategorias()
    }, [categorias])

    return (
        <div className='containerProdutosCadastro'>
            <div>
                <h1>Produtos</h1>
            </div>

            <div>
                <form>
                    <select >
                        <option >Selecione...</option>
                        {categorias.map((categorias) => {
                            return (
                                <option >{categorias.nome}</option>
                            )
                        })}
                    </select>

                    <label>Nome:</label>
                    <input type='text'
                    />
                    <label>Fabricante:</label>
                    <input type='text' />
                    <label>Quantidade:</label>
                    <input type='text' />
                    <label>Preço:</label>
                    <input type='text' />
                    <label>Imagem:</label>
                    <input type='file' />

                </form>
            </div>
        </div>
    )
}
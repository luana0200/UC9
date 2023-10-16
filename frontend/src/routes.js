import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './Inicio/index'
import Dashboard from './Dashboard/index'
import Produtos from './Produtos/index'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Produtos' element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    )
}
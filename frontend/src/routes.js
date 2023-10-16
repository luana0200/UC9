import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './pages/Inicio/index'
import Login from './pages/Usuario/Login'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
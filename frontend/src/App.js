import Rotas from './routes'
import './App.scss'
import AuthProvider from './Contexts/AuthContext'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <AuthProvider>
      <div className='container-fluid'>
        <Rotas />
        <ToastContainer
          autoClose={3000}
          theme="colored"
        />
      </div>
    </AuthProvider>
  )
}



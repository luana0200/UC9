import Rotas from './routes'
import './App.scss'
import  AuthProvider  from './Contexts/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <div className='container-fluid'>
        <Rotas />
      </div>
    </AuthProvider>
  )
}



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Importa nossos estilos globais

// Importa o BrowserRouter para habilitar o roteamento no lado do cliente
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* O BrowserRouter envolve toda a aplicação, 
        dando a todos os componentes acesso às funcionalidades de roteamento. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { CartProvider } from './Pages/Component/Context/CartContext.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
  // ReactDOM.render(
    const container = document.getElementById('root');
    const root = createRoot(container); // createRoot is from 'react-dom/client'
    root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)

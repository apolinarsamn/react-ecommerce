import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //Bootstrap JS
import '@fortawesome/fontawesome-free/css/all.min.css'; //FontAwesome CSS
import './index.css'; //Optional custom styles
import CartProvider from './context/CartContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
  </StrictMode>,
)

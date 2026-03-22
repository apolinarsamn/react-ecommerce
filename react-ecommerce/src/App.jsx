import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Context Provider
import CartProvider from './context/CartContext'; 

// Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Policies from './pages/Policies';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Cart from './context/Cart'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // DARK MODE
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <CartProvider>
      <Router>
        <Header />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main className="min-vh-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </main>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
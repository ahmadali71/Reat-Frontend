import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Policies from './pages/Policies';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import { CartProvider } from './context/CartContext';
import './index.css';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <CartDrawer />
          <Toast />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collections/:id" element={<Collection />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<Policies />} />
              <Route path="/refund-policy" element={<Policies />} />
              <Route path="/shipping-policy" element={<Policies />} />
              <Route path="/terms-of-service" element={<Policies />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

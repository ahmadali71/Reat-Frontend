import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <p>FREE SHIPPING ALL OVER PAKISTAN ABOVE PKR 2990</p>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container flex items-center justify-between">
          
          <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          <Link to="/" className="logo">
            <h2>ZAHRA STORES</h2>
          </Link>

          <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="flex items-center gap-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections/kitchenware">Kitchenware</Link></li>
              <li><Link to="/collections/home-decor">Home Decor</Link></li>
              <li><Link to="/collections/sale">Sale</Link></li>
            </ul>
          </nav>

          <div className="header-actions flex items-center gap-4">
            <button className="action-btn"><Search size={20} /></button>
            <button className="action-btn hidden-mobile"><User size={20} /></button>
            <button className="action-btn cart-btn" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart size={20} />
              <span className="cart-count">{getCartCount()}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

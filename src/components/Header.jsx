import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X, ArrowRight, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MOCK_PRODUCTS } from '../data/mockData';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount, setIsCartOpen, wishlist } = useCart();
  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/collections/kitchenware', label: 'Kitchenware' },
    { to: '/collections/home-decor', label: 'Home Decor' },
    { to: '/collections/sale', label: 'Mega Sale' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' }
  ];

  const searchResults = searchQuery.trim() === ''
    ? []
    : MOCK_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.vendor.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      <header className={`header${isScrolled ? ' scrolled' : ''}`}>
        <div className="header-top">
          <div className="container flex items-center justify-between">
            <div className="top-badge-wrap">
              <span className="top-pill">SPECIAL OFFER</span>
              <span>FREE DELIVERY NATIONWIDE ON ORDERS ABOVE PKR 2,990</span>
            </div>
            <div className="top-right-info hidden-mobile">
              <span>🇵🇰 Cash on Delivery Available</span>
              <span className="divider">|</span>
              <Link to="/contact" className="top-link">Helpline: +92 300 1234567</Link>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container flex items-center justify-between">

            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link to="/" className="logo">
              <span className="logo-z">Z</span>AHRA<span className="logo-dot">·</span>STORES
            </Link>

            <nav className={`desktop-nav${isMobileMenuOpen ? ' mobile-open' : ''}`}>
              <ul>
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={location.pathname === link.to ? 'active' : ''}
                    >
                      {link.label}
                      {link.label === 'Mega Sale' && <span className="nav-tag-sale">Hot</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions flex items-center gap-2">
              <button
                className="action-btn"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search store"
                title="Search products"
              >
                <Search size={19} />
              </button>

              <Link
                to="/collections/all"
                className="action-btn wishlist-header-btn"
                aria-label="Wishlist"
                title="Wishlist"
              >
                <Heart size={19} />
                {wishlist.length > 0 && (
                  <span className="wishlist-count">{wishlist.length}</span>
                )}
              </Link>

              <button
                className="action-btn cart-btn"
                onClick={() => setIsCartOpen(true)}
                aria-label="Open Shopping Bag"
              >
                <ShoppingCart size={19} />
                {getCartCount() > 0 && (
                  <span className="cart-count">{getCartCount()}</span>
                )}
              </button>
            </div>

          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />
        )}
      </header>

      {/* ── Search Modal ─────────────────────────────── */}
      {isSearchOpen && (
        <div className="search-modal-overlay" onClick={() => setIsSearchOpen(false)}>
          <div className="search-modal-card animate-fade-in-scale" onClick={e => e.stopPropagation()}>
            <div className="search-modal-header">
              <div className="search-input-wrapper">
                <Search size={20} className="search-modal-icon" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search kitchenware, cutlery, decor, sets..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="search-modal-input"
                />
                {searchQuery && (
                  <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                    <X size={16} />
                  </button>
                )}
              </div>
              <button className="search-modal-close" onClick={() => setIsSearchOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="search-modal-body">
              {searchQuery.trim() === '' ? (
                <div className="search-suggestions">
                  <p className="search-suggest-title">Popular Searches</p>
                  <div className="search-tags">
                    {['Cookware Set', 'Cutlery', 'Spice Jar', 'Food Chopper', 'Wall Planters', 'Sale'].map(tag => (
                      <button
                        key={tag}
                        className="search-tag-chip"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="search-results-list">
                  <p className="search-results-count">Found {searchResults.length} matching products</p>
                  <div className="search-results-grid">
                    {searchResults.map(product => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="search-result-item"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <img src={product.image} alt={product.name} className="search-result-img" />
                        <div className="search-result-info">
                          <span className="search-result-vendor">{product.vendor}</span>
                          <h4 className="search-result-name">{product.name}</h4>
                          <div className="search-result-price">
                            <span className="current">Rs. {product.price.toLocaleString()}</span>
                            {product.comparePrice && (
                              <span className="compare">Rs. {product.comparePrice.toLocaleString()}</span>
                            )}
                          </div>
                        </div>
                        <ArrowRight size={16} className="search-result-arrow" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="search-empty">
                  <p>No products found matching "<strong>{searchQuery}</strong>"</p>
                  <span>Try searching for cookware, utensils, dinnerware, or spice jars.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

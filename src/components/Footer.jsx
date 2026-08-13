import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="container">
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-col footer-brand">
              <Link to="/" className="footer-logo">
                <span className="footer-logo-z">Z</span>AHRA<span className="footer-logo-dot">·</span>STORES
              </Link>
              <p className="footer-text">
                Premium kitchenware, kitchen tools, cutlery, and home decor. Delivered across Pakistan with Cash on Delivery.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FacebookIcon /></a>
                <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                <a href="#" aria-label="TikTok"><TikTokIcon /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/collections/kitchenware">Kitchenware</Link></li>
                <li><Link to="/collections/home-decor">Home Decor</Link></li>
                <li><Link to="/collections/sale">Sale</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div className="footer-col">
              <h4 className="footer-heading">Policies</h4>
              <ul className="footer-links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/refund-policy">Refund Policy</Link></li>
                <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={16} />
                  <span>Karachi, Pakistan</span>
                </li>
                <li>
                  <Phone size={16} />
                  <span>+92 300 1234567</span>
                </li>
                <li>
                  <Mail size={16} />
                  <span>info@zahrastores.pk</span>
                </li>
              </ul>
              <div className="footer-payment">
                <span>We Accept</span>
                <div className="payment-badges">
                  <span className="pay-badge">COD</span>
                  <span className="pay-badge">JazzCash</span>
                  <span className="pay-badge">EasyPaisa</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Zahra Stores. All rights reserved. Made with ♥ in Pakistan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

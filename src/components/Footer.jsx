import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const FacebookIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">ZAHRA STORES</h3>
            <p className="footer-text">
              Buy Online Kitchenware, Kitchen Tools, Cutlery, and Kitchen Gadgets. We Offer Cash on Delivery Service All Across Pakistan.
            </p>
            <div className="social-links flex gap-4 mt-4">
              <a href="#" aria-label="Facebook"><FacebookIcon size={20} /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon size={20} /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections/kitchenware">Kitchenware</Link></li>
              <li><Link to="/collections/home-decor">Home Decor</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Policies</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li className="flex items-center gap-4">
                <MapPin size={18} />
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} />
                <span>info@zahrastores.pk</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zahra Stores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

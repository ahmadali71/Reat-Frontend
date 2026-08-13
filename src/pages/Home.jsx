import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Clock, CreditCard, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../data/mockData';
import './Home.css';

const InstagramIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Home = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);
  const newArrivals = MOCK_PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>PREMIUM KITCHENWARE</h1>
          <p>Upgrade your cooking experience with our luxury collection</p>
          <Link to="/collections/kitchenware" className="btn-primary mt-4">Shop Now</Link>
        </div>
      </section>

      {/* Trust Features / Value Proposition */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <Truck size={36} className="feature-icon" />
              <h3>Free Shipping</h3>
              <p>On orders above PKR 2990</p>
            </div>
            <div className="feature-item">
              <ShieldCheck size={36} className="feature-icon" />
              <h3>Secure Checkout</h3>
              <p>100% Secure payment process</p>
            </div>
            <div className="feature-item">
              <Clock size={36} className="feature-icon" />
              <h3>24/7 Support</h3>
              <p>We are here to help you</p>
            </div>
            <div className="feature-item">
              <CreditCard size={36} className="feature-icon" />
              <h3>Cash on Delivery</h3>
              <p>Pay when you receive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-grid">
            <Link to="/collections/kitchenware" className="category-card">
              <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800" alt="Kitchenware" />
              <div className="category-overlay">
                <h3>Kitchenware</h3>
              </div>
            </Link>
            <Link to="/collections/home-decor" className="category-card">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" alt="Home Decor" />
              <div className="category-overlay">
                <h3>Home Decor</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Trending Now</h2>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/collections/all" className="btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <h2>MEGA SALE</h2>
          <p>Up to 50% off on selected kitchen gadgets and tools</p>
          <Link to="/collections/sale" className="btn-primary mt-4">Discover Deals</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars flex justify-center text-primary mb-4">
                <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
              </div>
              <p className="quote">"Absolutely love the cookware set I bought! The quality is unmatched and delivery was super fast."</p>
              <h4 className="author">- Fatima A.</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars flex justify-center text-primary mb-4">
                <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
              </div>
              <p className="quote">"Great home decor pieces that completely transformed my living room. Highly recommend Zahra Stores."</p>
              <h4 className="author">- Ali R.</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars flex justify-center text-primary mb-4">
                <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
              </div>
              <p className="quote">"The electric chopper is a lifesaver in the kitchen. Exactly as described. Great customer service!"</p>
              <h4 className="author">- Sana M.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">New Arrivals</h2>
          <div className="product-grid">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="instagram-section">
        <div className="container">
          <h2 className="section-title flex items-center justify-center gap-4">
            <InstagramIcon size={28} /> Follow Us on Instagram
          </h2>
          <div className="instagram-grid">
            <div className="insta-item"><img src="https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&q=80&w=400" alt="Instagram 1" /></div>
            <div className="insta-item"><img src="https://images.unsplash.com/photo-1584990347449-b59374468f76?auto=format&fit=crop&q=80&w=400" alt="Instagram 2" /></div>
            <div className="insta-item"><img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400" alt="Instagram 3" /></div>
            <div className="insta-item"><img src="https://images.unsplash.com/photo-1590794059220-37cb66b96e6d?auto=format&fit=crop&q=80&w=400" alt="Instagram 4" /></div>
            <div className="insta-item"><img src="https://images.unsplash.com/photo-1416879598555-25b410f93a9d?auto=format&fit=crop&q=80&w=400" alt="Instagram 5" /></div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section section">
        <div className="container">
          <div className="newsletter-box">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get the latest updates on new arrivals, sales, and special offers.</p>
            <form className="newsletter-form flex gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

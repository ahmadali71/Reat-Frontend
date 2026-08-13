import React from 'react';
import './StaticPage.css';

const AboutUs = () => {
  return (
    <div className="static-page animate-fade-in">
      <div className="collection-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
        </div>
      </div>
      <div className="container">
        <div className="static-content">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" alt="About Zahra Stores" className="about-hero-img" />
          
          <div className="content-wrapper mt-8">
            <h2>Welcome to Zahra Stores</h2>
            <p>
              Founded with a passion for bringing premium quality kitchenware and home decor to households across Pakistan, 
              Zahra Stores has quickly grown to become a trusted name in online retail.
            </p>
            <p>
              Our mission is simple: to provide our customers with top-tier, durable, and aesthetically pleasing products 
              that enhance their daily lives without breaking the bank. We believe that your home should be a reflection of your 
              taste, and your kitchen should be equipped with tools that make cooking a joy, not a chore.
            </p>
            
            <h3 className="mt-8">Why Choose Us?</h3>
            <ul>
              <li><strong>Quality Assurance:</strong> Every product we stock is rigorously tested for durability.</li>
              <li><strong>Nationwide Delivery:</strong> We deliver to every corner of Pakistan with a Cash on Delivery option.</li>
              <li><strong>Customer First:</strong> Our dedicated support team is always ready to assist you with any inquiries.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

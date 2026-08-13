import React from 'react';
import { heroKitchenware } from '../data/mockData';
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
          <img
            src={heroKitchenware}
            alt="About Zahra Stores – Premium Kitchenware"
            className="about-hero-img"
          />

          <div className="content-wrapper mt-8">
            <h2>Welcome to Zahra Stores</h2>
            <p>
              Founded with a passion for bringing premium quality kitchenware and home decor to households
              across Pakistan, Zahra Stores has quickly grown to become a trusted name in online retail.
            </p>
            <p>
              Our mission is simple: to provide our customers with top-tier, durable, and aesthetically pleasing
              products that enhance their daily lives without breaking the bank. We believe that your home should
              be a reflection of your taste, and your kitchen should be equipped with tools that make cooking a joy.
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li><strong>Quality Assurance:</strong> Every product we stock is rigorously tested for durability and performance.</li>
              <li><strong>Nationwide Delivery:</strong> We deliver to every corner of Pakistan with a hassle-free Cash on Delivery option.</li>
              <li><strong>Customer First:</strong> Our dedicated support team is always ready to assist you with any inquiries.</li>
              <li><strong>Best Prices:</strong> We negotiate directly with suppliers to give you the best prices on the market.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './StaticPage.css';

const ContactUs = () => {
  return (
    <div className="static-page animate-fade-in">
      <div className="collection-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
        </div>
      </div>
      <div className="container">
        <div className="static-content contact-layout">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="mb-4 text-muted">
              Have a question or need assistance with your order? Our support team is here to help!
            </p>
            
            <div className="info-card flex items-center gap-4 mt-4">
              <MapPin size={24} className="text-primary" />
              <div>
                <h4>Address</h4>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
            
            <div className="info-card flex items-center gap-4 mt-4">
              <Phone size={24} className="text-primary" />
              <div>
                <h4>Phone</h4>
                <p>+92 300 1234567</p>
              </div>
            </div>
            
            <div className="info-card flex items-center gap-4 mt-4">
              <Mail size={24} className="text-primary" />
              <div>
                <h4>Email</h4>
                <p>info@zahrastores.pk</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert("Message sent! We'll get back to you soon."); }}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" required placeholder="Your full name" />
              </div>
              <div className="form-group mt-4">
                <label>Email</label>
                <input type="email" required placeholder="Your email address" />
              </div>
              <div className="form-group mt-4">
                <label>Message</label>
                <textarea required rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn-primary mt-4 w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './StaticPage.css';

const Policies = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  
  let title = 'Policy';
  let content = null;

  if (path === 'privacy-policy') {
    title = 'Privacy Policy';
    content = (
      <>
        <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Zahra Stores.</p>
        <h3 className="mt-4">Personal Information We Collect</h3>
        <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
        <h3 className="mt-4">How Do We Use Your Personal Information?</h3>
        <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
      </>
    );
  } else if (path === 'refund-policy') {
    title = 'Refund Policy';
    content = (
      <>
        <p>We have a 7-day return policy, which means you have 7 days after receiving your item to request a return.</p>
        <h3 className="mt-4">Damages and issues</h3>
        <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>
        <h3 className="mt-4">Exchanges</h3>
        <p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>
      </>
    );
  } else if (path === 'shipping-policy') {
    title = 'Shipping Policy';
    content = (
      <>
        <p>We offer nationwide shipping across Pakistan.</p>
        <h3 className="mt-4">Processing Time</h3>
        <p>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.</p>
        <h3 className="mt-4">Shipping Rates & Delivery Estimates</h3>
        <p>Shipping charges for your order will be calculated and displayed at checkout. Standard delivery typically takes 3-5 business days.</p>
        <p><strong>Free shipping is available for all orders over PKR 2990.</strong></p>
      </>
    );
  } else if (path === 'terms-of-service') {
    title = 'Terms of Service';
    content = (
      <>
        <p>This website is operated by Zahra Stores. Throughout the site, the terms "we", "us" and "our" refer to Zahra Stores.</p>
        <h3 className="mt-4">Online Store Terms</h3>
        <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence.</p>
        <h3 className="mt-4">General Conditions</h3>
        <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
      </>
    );
  }

  return (
    <div className="static-page animate-fade-in">
      <div className="collection-header">
        <div className="container">
          <h1 className="page-title">{title}</h1>
        </div>
      </div>
      <div className="container mb-8">
        <div className="static-content policy-content">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Policies;

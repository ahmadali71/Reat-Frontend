import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Heart, Share2, ShieldCheck, Truck } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [currentImage, setCurrentImage] = useState(null);
  
  const { addToCart, setIsCartOpen } = useCart();
  
  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id)) || MOCK_PRODUCTS[0];
  
  // Set default main image
  const displayImage = currentImage || product.image;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleBuyNow = () => {
    addToCart(product, quantity);
    // In a real app, this would navigate to checkout
    // navigate('/checkout');
  };

  return (
    <div className="product-page animate-fade-in">
      <div className="container">
        <div className="breadcrumb mt-4 mb-4">
          <Link to="/">Home</Link> / <Link to={`/collections/${product.category}`}>{product.category.replace('-', ' ')}</Link> / <span className="current">{product.name}</span>
        </div>

        <div className="product-layout">
          {/* Product Images */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={displayImage} alt={product.name} />
              {product.isSale && <span className="badge sale-badge">Sale</span>}
              {product.isNew && <span className="badge new-badge">New</span>}
            </div>
            <div className="thumbnail-list">
              <div className={`thumbnail ${displayImage === product.image ? 'active' : ''}`} onClick={() => setCurrentImage(product.image)}>
                <img src={product.image} alt="Thumbnail 1" />
              </div>
              {product.hoverImage && (
                <div className={`thumbnail ${displayImage === product.hoverImage ? 'active' : ''}`} onClick={() => setCurrentImage(product.hoverImage)}>
                  <img src={product.hoverImage} alt="Thumbnail 2" />
                </div>
              )}
              <div className="thumbnail">
                <img src="https://images.unsplash.com/photo-1594958614742-b06cb87989d4?auto=format&fit=crop&q=80&w=200" alt="Thumbnail 3" />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details-container">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-vendor">By <span>{product.vendor}</span></p>
            
            <div className="product-price-large">
              <span className="current-price">Rs. {product.price}</span>
              {product.comparePrice && (
                <span className="compare-price">Rs. {product.comparePrice}</span>
              )}
            </div>
            
            <div className="product-inventory">
              <span className="in-stock">✓ In Stock, ready to ship</span>
            </div>

            <p className="product-short-desc">
              Experience the best with our premium {product.name}. Designed for everyday use and built to last.
              Enhance your kitchen experience with Zahra Stores' quality products.
            </p>

            <div className="product-form">
              <div className="quantity-selector">
                <span className="label">Quantity</span>
                <div className="quantity-controls">
                  <button type="button" onClick={handleDecrease}><Minus size={16} /></button>
                  <input type="number" value={quantity} readOnly />
                  <button type="button" onClick={handleIncrease}><Plus size={16} /></button>
                </div>
              </div>

              <div className="action-buttons">
                <button className="btn-add-cart" onClick={handleAddToCart}>
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="btn-buy-now" onClick={handleBuyNow}>Buy it now</button>
              </div>
              
              <div className="secondary-actions flex items-center gap-4 mt-4">
                <button className="flex items-center gap-2 btn-text"><Heart size={18} /> Add to Wishlist</button>
                <button className="flex items-center gap-2 btn-text"><Share2 size={18} /> Share</button>
              </div>
            </div>

            <div className="trust-badges mt-8">
              <div className="trust-item flex items-center gap-4">
                <ShieldCheck size={24} className="text-primary" />
                <div>
                  <h4>Secure Checkout</h4>
                  <p>100% secure checkout process</p>
                </div>
              </div>
              <div className="trust-item flex items-center gap-4 mt-4">
                <Truck size={24} className="text-primary" />
                <div>
                  <h4>Fast Delivery</h4>
                  <p>Cash on Delivery across Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="product-tabs-section mt-8">
          <div className="tabs-nav">
            <button 
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping & Returns
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-content animate-fade-in">
                <p>Welcome to Zahra Stores. We bring you the highest quality kitchenware and home decor.</p>
                <ul>
                  <li>Premium quality materials</li>
                  <li>Durable and long-lasting</li>
                  <li>Modern aesthetic design</li>
                  <li>Perfect for everyday use</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'shipping' && (
              <div className="shipping-content animate-fade-in">
                <p><strong>Shipping:</strong> We offer Cash on Delivery across Pakistan. Delivery typically takes 3-5 business days.</p>
                <p><strong>Returns:</strong> We have a 7-day return policy. If you are not satisfied with your purchase, you can return it within 7 days of receiving the order.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

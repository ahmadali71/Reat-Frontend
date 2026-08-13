import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Share2,
  ShieldCheck,
  Truck,
  Star,
  CheckCircle2,
  RefreshCw,
  Clock,
  ArrowRight
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [currentImage, setCurrentImage] = useState(null);
  const [copied, setCopied] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id)) || MOCK_PRODUCTS[0];
  const isWishlisted = isInWishlist(product.id);

  // Reset selected image when route changes
  useEffect(() => {
    setCurrentImage(null);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Dynamic gallery images (all local guaranteed assets)
  const galleryImages = [
    product.image,
    product.hoverImage,
    ...(MOCK_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 2).map(p => p.image))
  ].filter(Boolean);

  const displayImage = currentImage || product.image;

  const discountPercent = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : null;

  // Related items
  const relatedProducts = MOCK_PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

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
    addToCart(product, quantity, true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="product-page animate-fade-in">
      <div className="container">

        {/* ── Breadcrumb ───────────────────────────── */}
        <div className="breadcrumb mt-4 mb-4">
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <Link to={`/collections/${product.category}`}>
            {product.category.replace('-', ' ')}
          </Link>
          <span className="sep">/</span>
          <span className="current">{product.name}</span>
        </div>

        {/* ── Product Main Layout ──────────────────── */}
        <div className="product-layout">

          {/* Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={displayImage} alt={product.name} />

              <div className="product-badge-group">
                {discountPercent && (
                  <span className="badge sale-badge">Save {discountPercent}%</span>
                )}
                {product.isNew && <span className="badge new-badge">New</span>}
              </div>
            </div>

            <div className="thumbnail-list">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${displayImage === img ? 'active' : ''}`}
                  onClick={() => setCurrentImage(img)}
                >
                  <img src={img} alt={`View ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="product-details-container">
            <div className="product-header-meta">
              <span className="product-vendor">{product.vendor || 'Zahra Luxe'}</span>
              <div className="product-stars-row">
                <div className="stars flex">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} size={14} fill="#c6973f" color="#c6973f" />
                  ))}
                </div>
                <span className="rating-score">{product.rating || 4.9}</span>
                <span className="reviews-count">({product.reviewsCount || 48} verified reviews)</span>
              </div>
            </div>

            <h1 className="product-name">{product.name}</h1>

            <div className="product-price-large">
              <span className="current-price">Rs. {product.price.toLocaleString()}</span>
              {product.comparePrice && (
                <span className="compare-price">Rs. {product.comparePrice.toLocaleString()}</span>
              )}
              {discountPercent && (
                <span className="price-save-tag">Save Rs. {(product.comparePrice - product.price).toLocaleString()}</span>
              )}
            </div>

            <div className="product-inventory-box">
              <div className="stock-pill">
                <span className="pulse-dot"></span>
                <span>In Stock — Dispatched in 24 Hours</span>
              </div>
              <span className="delivery-note">🚚 Free Nationwide Shipping for this order</span>
            </div>

            <p className="product-short-desc">
              {product.description || `Experience the pinnacle of culinary quality with our signature ${product.name}. Designed for professional durability, effortless maintenance, and striking modern aesthetic.`}
            </p>

            {/* Product Key Highlights */}
            {product.features && (
              <div className="product-quick-features">
                {product.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="quick-feature-item">
                    <CheckCircle2 size={15} className="text-accent" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Form */}
            <div className="product-form">
              <div className="quantity-selector-row">
                <div className="quantity-controls">
                  <button type="button" onClick={handleDecrease} aria-label="Decrease quantity">
                    <Minus size={15} />
                  </button>
                  <input type="number" value={quantity} readOnly />
                  <button type="button" onClick={handleIncrease} aria-label="Increase quantity">
                    <Plus size={15} />
                  </button>
                </div>

                <div className="action-buttons">
                  <button className="btn-add-cart" onClick={handleAddToCart}>
                    <ShoppingBag size={18} />
                    Add to Bag
                  </button>
                  <button className="btn-buy-now" onClick={handleBuyNow}>
                    Buy It Now
                  </button>
                </div>
              </div>

              <div className="secondary-actions">
                <button
                  className={`btn-text wishlist-toggle ${isWishlisted ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product)}
                >
                  <Heart size={16} fill={isWishlisted ? '#e74c3c' : 'none'} color={isWishlisted ? '#e74c3c' : 'currentColor'} />
                  {isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                </button>

                <button className="btn-text" onClick={handleShare}>
                  <Share2 size={16} />
                  {copied ? 'Link Copied!' : 'Share Product'}
                </button>
              </div>
            </div>

            {/* Trust Assurance Grid */}
            <div className="trust-badges-grid">
              <div className="trust-badge-card">
                <Truck size={20} className="trust-icon" />
                <div>
                  <h4>Cash On Delivery</h4>
                  <p>Pay when you inspect at doorstep</p>
                </div>
              </div>
              <div className="trust-badge-card">
                <ShieldCheck size={20} className="trust-icon" />
                <div>
                  <h4>Authenticity Guaranteed</h4>
                  <p>100% genuine Zahra premium items</p>
                </div>
              </div>
              <div className="trust-badge-card">
                <RefreshCw size={20} className="trust-icon" />
                <div>
                  <h4>7-Day Free Replacement</h4>
                  <p>Easy exchanges on damaged items</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Product Tabs ─────────────────────────── */}
        <div className="product-tabs-section">
          <div className="tabs-nav">
            <button
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description & Craftsmanship
            </button>
            <button
              className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Specifications & Care
            </button>
            <button
              className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping & Cash on Delivery
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-content animate-fade-in">
                <p>
                  At Zahra Stores, every piece is curated to deliver unmatched aesthetic beauty and everyday durability.
                  Our {product.name} is constructed from premium grade materials engineered to withstand heavy daily use while retaining its pristine luster.
                </p>
                <p>
                  Whether upgrading your kitchen cookware or enhancing your dining ambiance, this piece brings restaurant-grade functionality to your home.
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-tab-content animate-fade-in">
                <ul>
                  {product.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  )) || (
                    <>
                      <li>Constructed from heavy-gauge food grade certified materials</li>
                      <li>Ergonomic design for effortless handling & cleaning</li>
                      <li>100% PFOA, Lead & Cadmium free</li>
                      <li>Wipe clean with mild detergent and soft sponge</li>
                    </>
                  )}
                </ul>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="shipping-content animate-fade-in">
                <div className="shipping-info-grid">
                  <div className="shipping-info-item">
                    <Clock size={20} className="text-accent" />
                    <div>
                      <strong>Delivery Timeline:</strong>
                      <p>2 to 4 business days for major cities (Karachi, Lahore, Islamabad), 3 to 6 days for other regions.</p>
                    </div>
                  </div>
                  <div className="shipping-info-item">
                    <Truck size={20} className="text-accent" />
                    <div>
                      <strong>Delivery Fee:</strong>
                      <p>FREE nationwide shipping on all orders PKR 2,990+. Standard flat PKR 250 for orders below.</p>
                    </div>
                  </div>
                  <div className="shipping-info-item">
                    <ShieldCheck size={20} className="text-accent" />
                    <div>
                      <strong>Payment Mode:</strong>
                      <p>Cash on Delivery (COD), JazzCash, EasyPaisa, or Online Bank Transfer.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Related Products ─────────────────────── */}
        {relatedProducts.length > 0 && (
          <div className="related-products-section">
            <div className="section-header-wrap">
              <span className="section-title">Complementary Pieces</span>
              <h2 className="section-heading">You May Also Like</h2>
            </div>

            <div className="product-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Product;

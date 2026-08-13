import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Star, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const discountPercent = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`} className="image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image primary-image"
            loading="lazy"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} lifestyle`}
              className="product-image secondary-image"
              loading="lazy"
            />
          )}
        </Link>

        {/* Badges */}
        <div className="card-badge-stack">
          {discountPercent ? (
            <span className="badge discount-badge">-{discountPercent}% OFF</span>
          ) : product.isSale ? (
            <span className="badge sale-badge">Sale</span>
          ) : null}
          {product.isNew && <span className="badge new-badge">New Arrival</span>}
        </div>

        {/* Wishlist button */}
        <button
          className={`card-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlist}
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          title={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
        >
          <Heart size={16} fill={isWishlisted ? '#e74c3c' : 'none'} color={isWishlisted ? '#e74c3c' : '#111'} />
        </button>

        {/* Hover Actions */}
        <div className="product-actions-hover">
          <button
            className="quick-add-btn"
            onClick={handleAddToCart}
          >
            <ShoppingBag size={16} /> Quick Add to Bag
          </button>
          <Link
            to={`/product/${product.id}`}
            className="quick-view-btn"
            title="View Details"
          >
            <Eye size={16} />
          </Link>
        </div>
      </div>

      <div className="product-info">
        <div className="product-meta-row">
          <span className="product-vendor">{product.vendor || 'Zahra Luxe'}</span>
          {product.rating && (
            <div className="product-card-rating">
              <Star size={12} fill="#c6973f" color="#c6973f" />
              <span>{product.rating}</span>
            </div>
          )}
        </div>

        <Link to={`/product/${product.id}`} className="product-title">
          <h3>{product.name}</h3>
        </Link>

        <div className="product-price">
          <span className="current-price">Rs. {product.price.toLocaleString()}</span>
          {product.comparePrice && (
            <span className="compare-price">Rs. {product.comparePrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`} className="image-wrapper">
          <img src={product.image} alt={product.name} className="product-image primary-image" />
          {product.hoverImage && (
            <img src={product.hoverImage} alt={`${product.name} hover`} className="product-image secondary-image" />
          )}
        </Link>
        {product.isSale && <span className="badge sale-badge">Sale</span>}
        {product.isNew && <span className="badge new-badge">New</span>}
        
        <div className="product-actions-hover">
          <button className="icon-btn" aria-label="Add to wishlist"><Heart size={18} /></button>
          <button className="icon-btn" aria-label="Quick add to cart" onClick={handleAddToCart}><ShoppingCart size={18} /></button>
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-vendor">{product.vendor || 'Zahra Stores'}</span>
        <Link to={`/product/${product.id}`} className="product-title">
          <h3>{product.name}</h3>
        </Link>
        <div className="product-price">
          {product.comparePrice && (
            <span className="compare-price">Rs. {product.comparePrice}</span>
          )}
          <span className="current-price">Rs. {product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

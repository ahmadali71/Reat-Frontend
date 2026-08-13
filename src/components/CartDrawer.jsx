import React from 'react';
import { X, Minus, Plus, ShoppingBag, Truck, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartDrawer.css';

const FREE_SHIPPING_THRESHOLD = 2990;

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  const subtotal = getCartTotal();
  const amountNeeded = FREE_SHIPPING_THRESHOLD - subtotal;
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <ShoppingBag size={18} className="text-accent" />
            <h2>Your Shopping Bag</h2>
            <span className="cart-header-count">({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
          </div>
          <button className="close-cart" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="shipping-meter-wrap">
          <div className="shipping-meter-text">
            <Truck size={16} className="text-accent" />
            {amountNeeded > 0 ? (
              <span>Add <strong>Rs. {amountNeeded.toLocaleString()}</strong> more for <strong>FREE DELIVERY</strong></span>
            ) : (
              <span className="free-shipping-unlocked">🎉 Congratulations! You unlocked <strong>FREE DELIVERY</strong></span>
            )}
          </div>
          <div className="shipping-progress-track">
            <div
              className="shipping-progress-bar"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart flex flex-col items-center justify-center">
              <div className="empty-cart-icon-box">
                <ShoppingBag size={36} />
              </div>
              <h3>Your bag is empty</h3>
              <p>Looks like you haven't added any luxury pieces yet.</p>
              
              <div className="empty-cart-links">
                <Link
                  to="/collections/kitchenware"
                  className="btn-primary"
                  onClick={() => setIsCartOpen(false)}
                >
                  Shop Kitchenware <ArrowRight size={14} />
                </Link>
                <Link
                  to="/collections/sale"
                  className="btn-outline empty-btn-sale"
                  onClick={() => setIsCartOpen(false)}
                >
                  View Mega Sale Deals 🔥
                </Link>
              </div>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <div className="cart-item-top-row">
                    <span className="cart-item-vendor">{item.vendor || 'Zahra Luxe'}</span>
                    <button
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)} className="cart-item-name">
                    <h4>{item.name}</h4>
                  </Link>

                  <div className="cart-item-bottom-row">
                    <div className="quantity-controls small">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease">
                        <Minus size={12} />
                      </button>
                      <input type="number" value={item.quantity} readOnly />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase">
                        <Plus size={12} />
                      </button>
                    </div>

                    <div className="cart-item-price-block">
                      <span className="cart-item-price">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                      {item.quantity > 1 && (
                        <small className="cart-item-unit-price">Rs. {item.price.toLocaleString()} each</small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal flex justify-between items-baseline">
              <span className="subtotal-label">Estimated Total</span>
              <span className="subtotal-amount">Rs. {subtotal.toLocaleString()}</span>
            </div>

            <div className="cart-delivery-status">
              <span>Delivery Charges:</span>
              <span className={amountNeeded <= 0 ? 'text-green font-bold' : ''}>
                {amountNeeded <= 0 ? 'FREE (Nationwide)' : 'PKR 250'}
              </span>
            </div>

            <button
              className="btn-primary w-100 btn-checkout"
              onClick={() => alert(`Order Confirmation: Total PKR ${(subtotal + (amountNeeded <= 0 ? 0 : 250)).toLocaleString()} with Cash on Delivery across Pakistan! Thank you.`)}
            >
              Proceed to Checkout (COD) <ArrowRight size={16} />
            </button>

            <div className="cart-trust-footer">
              <div className="cart-trust-pill">
                <ShieldCheck size={14} /> 100% Verified Secure
              </div>
              <div className="cart-trust-pill">
                🇵🇰 Cash on Delivery Available
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;

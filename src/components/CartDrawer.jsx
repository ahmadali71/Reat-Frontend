import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartDrawer.css';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart flex flex-col items-center justify-center">
              <ShoppingBag size={48} className="text-muted mb-4" />
              <p>Your cart is currently empty.</p>
              <button 
                className="btn-primary mt-4" 
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)}>
                    <h4>{item.name}</h4>
                  </Link>
                  <p className="cart-item-price">Rs. {item.price}</p>
                  
                  <div className="cart-item-actions flex items-center justify-between">
                    <div className="quantity-controls small">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                      <input type="number" value={item.quantity} readOnly />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                    </div>
                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold">Rs. {getCartTotal()}</span>
            </div>
            <p className="tax-note">Taxes and shipping calculated at checkout</p>
            <button className="btn-primary w-100" onClick={() => alert("Checkout functionality would go here!")}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

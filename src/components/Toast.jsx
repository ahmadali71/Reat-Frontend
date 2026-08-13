import React from 'react';
import { CheckCircle2, ShoppingBag, Heart, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Toast.css';

const Toast = () => {
  const { toast, setToast, setIsCartOpen } = useCart();

  if (!toast) return null;

  return (
    <div className="toast-container animate-fade-in-scale">
      <div className={`toast-card ${toast.type}`}>
        {toast.product?.image ? (
          <img src={toast.product.image} alt={toast.product.name} className="toast-img" />
        ) : (
          <div className="toast-icon-box">
            {toast.type === 'success' ? <CheckCircle2 size={20} /> : <Heart size={20} />}
          </div>
        )}

        <div className="toast-body">
          <p className="toast-title">
            {toast.type === 'success' ? 'Success' : 'Notice'}
          </p>
          <p className="toast-text">{toast.message}</p>
        </div>

        <div className="toast-actions">
          {toast.product && (
            <button
              className="toast-btn-view"
              onClick={() => {
                setIsCartOpen(true);
                setToast(null);
              }}
            >
              <ShoppingBag size={14} /> View Bag
            </button>
          )}
          <button className="toast-close" onClick={() => setToast(null)} aria-label="Close">
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;

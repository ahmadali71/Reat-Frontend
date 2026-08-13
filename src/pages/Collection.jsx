import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../data/mockData';
import { Filter, ChevronDown } from 'lucide-react';
import './Collection.css';

const Collection = () => {
  const { id } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  
  // Filter products by category if not 'all'
  const collectionProducts = id === 'all' || id === 'sale' 
    ? (id === 'sale' ? MOCK_PRODUCTS.filter(p => p.isSale) : MOCK_PRODUCTS)
    : MOCK_PRODUCTS.filter(p => p.category === id);
    
  const collectionTitle = id ? id.replace('-', ' ') : 'All Products';

  return (
    <div className="collection-page animate-fade-in">
      <div className="collection-header">
        <div className="container">
          <h1 className="page-title">{collectionTitle}</h1>
          <p className="breadcrumb">Home / Collections / <span className="current">{collectionTitle}</span></p>
        </div>
      </div>

      <div className="container collection-main">
        <div className="toolbar flex items-center justify-between">
          <button className="filter-toggle flex items-center gap-4">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          
          <div className="product-count">
            Showing {collectionProducts.length} results
          </div>

          <div className="sort-by flex items-center gap-4">
            <span>Sort by</span>
            <div className="sort-dropdown">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price, low to high</option>
                <option value="price-high">Price, high to low</option>
                <option value="newest">Newest in</option>
              </select>
              <ChevronDown size={16} className="dropdown-icon" />
            </div>
          </div>
        </div>

        <div className="collection-grid">
          {/* Sidebar Filters (Static for now) */}
          <aside className="filters-sidebar">
            <div className="filter-group">
              <h3>Categories</h3>
              <ul>
                <li><a href="/collections/kitchenware">Kitchenware</a></li>
                <li><a href="/collections/home-decor">Home Decor</a></li>
                <li><a href="/collections/sale">Sale</a></li>
              </ul>
            </div>
            
            <div className="filter-group">
              <h3>Price</h3>
              <ul>
                <li><label><input type="checkbox" /> Under Rs. 1000</label></li>
                <li><label><input type="checkbox" /> Rs. 1000 - Rs. 5000</label></li>
                <li><label><input type="checkbox" /> Over Rs. 5000</label></li>
              </ul>
            </div>
            
            <div className="filter-group">
              <h3>Availability</h3>
              <ul>
                <li><label><input type="checkbox" /> In Stock</label></li>
                <li><label><input type="checkbox" /> Out of Stock</label></li>
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="products-container">
            {collectionProducts.length > 0 ? (
              <div className="product-grid">
                {collectionProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>No products found in this collection.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

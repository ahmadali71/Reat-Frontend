import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS, heroKitchenware, heroHomeDecor, heroSale } from '../data/mockData';
import { Filter, ChevronDown, Check, SlidersHorizontal } from 'lucide-react';
import './Collection.css';

const COLLECTION_META = {
  kitchenware: {
    image: heroKitchenware,
    title: 'Gourmet Kitchenware',
    desc: 'Artisanal non-stick sets, precision cutlery, electric choppers & chef utensils engineered for culinary perfection.'
  },
  'home-decor': {
    image: heroHomeDecor,
    title: 'Home & Living Decor',
    desc: 'Warm aesthetic ceramic spice carousels, marble placemats & botanical wall planters to elevate your interiors.'
  },
  sale: {
    image: heroSale,
    title: 'Flash Mega Sale',
    desc: 'Up to 50% off select kitchen gadgets, cookware & decor. Exclusive discounts with cash on delivery across Pakistan.'
  },
  all: {
    image: heroKitchenware,
    title: 'All Products',
    desc: 'Explore the complete Zahra Stores collection of premium kitchen essentials and modern home aesthetics.'
  }
};

const Collection = () => {
  const { id } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceFilters, setPriceFilters] = useState({
    under2000: false,
    under5000: false,
    above5000: false
  });
  const [onlySale, setOnlySale] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const meta = COLLECTION_META[id] || COLLECTION_META.all;

  const togglePriceFilter = (key) => {
    setPriceFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const collectionProducts = useMemo(() => {
    let products = id === 'all'
      ? MOCK_PRODUCTS
      : id === 'sale'
        ? MOCK_PRODUCTS.filter(p => p.isSale)
        : MOCK_PRODUCTS.filter(p => p.category === id);

    // Apply Price Filters
    const anyPriceActive = Object.values(priceFilters).some(Boolean);
    if (anyPriceActive) {
      products = products.filter(p => {
        if (priceFilters.under2000 && p.price < 2000) return true;
        if (priceFilters.under5000 && p.price >= 2000 && p.price <= 5000) return true;
        if (priceFilters.above5000 && p.price > 5000) return true;
        return false;
      });
    }

    // Apply Sale filter
    if (onlySale) {
      products = products.filter(p => p.isSale);
    }

    // Apply Sorting
    if (sortBy === 'price-low') products = [...products].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') products = [...products].sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') products = [...products].filter(p => p.isNew);
    if (sortBy === 'rating') products = [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return products;
  }, [id, sortBy, priceFilters, onlySale]);

  const clearFilters = () => {
    setPriceFilters({ under2000: false, under5000: false, above5000: false });
    setOnlySale(false);
    setSortBy('featured');
  };

  const hasActiveFilters = Object.values(priceFilters).some(Boolean) || onlySale || sortBy !== 'featured';

  return (
    <div className="collection-page animate-fade-in">

      {/* ── Banner ───────────────────────────────── */}
      <div className="collection-hero" style={{ backgroundImage: `url('${meta.image}')` }}>
        <div className="collection-hero-overlay" />
        <div className="container">
          <p className="collection-eyebrow">
            <Link to="/">Home</Link> <span className="sep">/</span> <span>{meta.title}</span>
          </p>
          <h1 className="page-title">{meta.title}</h1>
          <p className="collection-desc">{meta.desc}</p>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────── */}
      <div className="container collection-main">

        {/* Toolbar */}
        <div className="toolbar flex items-center justify-between">
          <button
            className="filter-toggle flex items-center gap-2"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <SlidersHorizontal size={16} />
            <span>Filter Products</span>
          </button>

          <div className="product-count">
            Showing <strong>{collectionProducts.length}</strong> items
          </div>

          <div className="sort-by flex items-center gap-3">
            <span>Sort by</span>
            <div className="sort-dropdown">
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="featured">Featured Collection</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Arrivals</option>
              </select>
              <ChevronDown size={14} className="dropdown-icon" />
            </div>
          </div>
        </div>

        <div className="collection-grid">
          {/* Sidebar */}
          <aside className={`filters-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
            <div className="filter-header-mobile">
              <h3>Filter Products</h3>
              <button onClick={() => setIsMobileFilterOpen(false)}>Done</button>
            </div>

            <div className="filter-group">
              <h3>Collections</h3>
              <ul className="category-filter-links">
                <li><Link to="/collections/kitchenware" className={id === 'kitchenware' ? 'active' : ''}>Kitchenware & Cookware</Link></li>
                <li><Link to="/collections/home-decor" className={id === 'home-decor' ? 'active' : ''}>Home & Living Decor</Link></li>
                <li><Link to="/collections/sale" className={id === 'sale' ? 'active' : ''}>Mega Flash Sale 🔥</Link></li>
                <li><Link to="/collections/all" className={id === 'all' ? 'active' : ''}>All Catalog Items</Link></li>
              </ul>
            </div>

            <div className="filter-group">
              <h3>Price Filter</h3>
              <ul>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={priceFilters.under2000}
                      onChange={() => togglePriceFilter('under2000')}
                    />
                    <span>Under Rs. 2,000</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={priceFilters.under5000}
                      onChange={() => togglePriceFilter('under5000')}
                    />
                    <span>Rs. 2,000 – Rs. 5,000</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={priceFilters.above5000}
                      onChange={() => togglePriceFilter('above5000')}
                    />
                    <span>Over Rs. 5,000</span>
                  </label>
                </li>
              </ul>
            </div>

            <div className="filter-group">
              <h3>Special Offers</h3>
              <ul>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={onlySale}
                      onChange={() => setOnlySale(!onlySale)}
                    />
                    <span>Discounted Items Only</span>
                  </label>
                </li>
              </ul>
            </div>

            {hasActiveFilters && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Products */}
          <div className="products-container">
            {collectionProducts.length > 0 ? (
              <div className="product-grid">
                {collectionProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>No products match your selected filters.</p>
                <button className="btn-primary mt-4" onClick={clearFilters}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

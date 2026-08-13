import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  Clock,
  CreditCard,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Flame,
  Check
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import {
  MOCK_PRODUCTS,
  heroKitchenware,
  heroHomeDecor,
  heroSale,
  cookwareSet,
  cutlerySet,
  spiceJars,
  foodChopper,
  diningMats,
  utensilsSet,
  wallPlanters,
  oilDispenser
} from '../data/mockData';
import './Home.css';

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Home = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);
  const newArrivals = MOCK_PRODUCTS.filter(p => p.isNew).slice(0, 4);
  const saleProducts = MOCK_PRODUCTS.filter(p => p.isSale).slice(0, 4);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 18 });
  const revealRefs = useRef([]);

  // Live countdown timer for the Mega Sale
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      image: heroKitchenware,
      eyebrow: 'Artisanal Collection 2026',
      title: ['LUXURY', 'COOKWARE'],
      subtitle: 'Crafted with premium multi-layer stone & stay-cool gold hardware. Built to turn everyday cooking into an extraordinary ritual.',
      link: '/collections/kitchenware',
      cta: 'Explore Kitchenware',
      align: 'left',
      highlightTag: 'Flagship Edition'
    },
    {
      image: heroHomeDecor,
      eyebrow: 'Modern Aesthetics',
      title: ['ELEVATE', 'YOUR HOME'],
      subtitle: 'Sculptural vases, Nordic ceramic spice sets & geometric wall planters designed to bring serene warmth to every space.',
      link: '/collections/home-decor',
      cta: 'Shop Home Decor',
      align: 'center',
      highlightTag: 'Curated Living'
    },
    {
      image: heroSale,
      eyebrow: 'Limited Flash Sale',
      title: ['UP TO 50% OFF', 'MEGA SALE'],
      subtitle: 'Exclusive savings on luxury forged chef knives, electric processors, non-stick sets & gourmet dining accessories.',
      link: '/collections/sale',
      cta: 'Claim Sale Deals',
      align: 'center',
      isSaleSlide: true,
      highlightTag: 'Ends Tonight'
    }
  ];

  // Instagram gallery using 100% local, guaranteed-loaded high-res photos
  const instagramGallery = [
    { img: cookwareSet, tag: '#ZahraCookware' },
    { img: cutlerySet, tag: '#ZahraDining' },
    { img: spiceJars, tag: '#NordicKitchen' },
    { img: foodChopper, tag: '#ChefTools' },
    { img: diningMats, tag: '#LuxuryLiving' },
    { img: wallPlanters, tag: '#BotanicalDecor' }
  ];

  const testimonials = [
    {
      quote: 'The 12-piece matte black cookware set completely exceeded my expectations. Heat distribution is flawless, and the gold handles look breathtaking on our open shelves.',
      author: 'Fatima Al-Hassan',
      location: 'Karachi, Clifton',
      verified: true,
      product: 'Non-Stick Cookware Set'
    },
    {
      quote: 'The forged cutlery and ceramic spice rack set transformed our dining room. Super fast Cash on Delivery in Lahore, and packaging was top-tier luxury.',
      author: 'Kamran & Ayesha',
      location: 'Lahore, DHA Phase 6',
      verified: true,
      product: 'Mirror Cutlery 24pc'
    },
    {
      quote: 'The electric food chopper is pure power. Chops everything in seconds with zero mess. Easily the best kitchen gadget purchase this year!',
      author: 'Dr. Sana Mirza',
      location: 'Islamabad, F-7',
      verified: true,
      product: 'Food Chopper Pro 2.0L'
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const prevSlide = () => setCurrentSlide(p => (p - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide(p => (p + 1) % heroSlides.length);

  return (
    <div className="home-page">

      {/* ── 1. Hero Slider ───────────────────────────── */}
      <section className="hero" aria-label="Featured promotions">
        <div className="hero-slides">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`hero-slide${i === currentSlide ? ' active' : ''}${slide.align === 'left' ? ' align-left' : ''}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="hero-overlay" />
              <div className="container">
                <div className={`hero-content${i === currentSlide ? ' is-active' : ''}`}>
                  <div className="hero-eyebrow-row">
                    <span className="hero-eyebrow">{slide.eyebrow}</span>
                    <span className="hero-tag-badge">{slide.highlightTag}</span>
                  </div>

                  <h1>
                    {slide.title[0]}<br />
                    <span className="hero-title-accent">{slide.title[1]}</span>
                  </h1>

                  <p>{slide.subtitle}</p>

                  {/* Countdown for Sale Slide */}
                  {slide.isSaleSlide && (
                    <div className="hero-countdown-box">
                      <span className="countdown-label">Offers Expiring In:</span>
                      <div className="countdown-digits">
                        <div className="countdown-unit">
                          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                          <small>HRS</small>
                        </div>
                        <span className="colon">:</span>
                        <div className="countdown-unit">
                          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                          <small>MIN</small>
                        </div>
                        <span className="colon">:</span>
                        <div className="countdown-unit">
                          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                          <small>SEC</small>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="hero-cta-group">
                    <Link to={slide.link} className="btn-primary">
                      {slide.cta} <ArrowRight size={16} />
                    </Link>
                    <Link to="/collections/all" className="btn-outline">
                      Browse All ({MOCK_PRODUCTS.length})
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Controls */}
        <button className="hero-arrow hero-arrow-prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button className="hero-arrow hero-arrow-next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>

        <div className="hero-nav" role="tablist">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentSlide}
              className={`hero-dot${i === currentSlide ? ' active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>

        <div className="hero-progress">
          <div key={currentSlide} className="hero-progress-bar" />
        </div>
      </section>

      {/* ── 2. Trust Badges ─────────────────────────── */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {[
              { Icon: Truck, title: 'Nationwide Free Delivery', desc: 'Complimentary shipping on orders PKR 2,990+' },
              { Icon: ShieldCheck, title: '100% Quality Guaranteed', desc: 'Food-grade stainless steel & stone coating' },
              { Icon: CreditCard, title: 'Cash on Delivery', desc: 'Inspect parcel at your doorstep before paying' },
              { Icon: Clock, title: '7-Day Easy Returns', desc: 'Hassle-free exchanges and instant support' },
            ].map(({ Icon, title, desc }) => (
              <div className="feature-item" key={title}>
                <div className="feature-icon-wrap"><Icon size={26} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Categories ───────────────────────────── */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header-wrap reveal" ref={addReveal}>
            <span className="section-title">Curated Departments</span>
            <h2 className="section-heading">Shop By Collection</h2>
            <p className="section-subtext">Discover handpicked essentials designed for durability and enduring elegance</p>
          </div>

          <div className="category-grid">
            <Link to="/collections/kitchenware" className="category-card reveal" ref={addReveal}>
              <img src={heroKitchenware} alt="Kitchenware collection" loading="lazy" />
              <div className="category-overlay">
                <div className="category-card-content">
                  <span className="category-subtitle">50+ Products</span>
                  <div className="category-label">
                    <span>Premium Kitchenware</span>
                    <ArrowRight size={20} />
                  </div>
                  <p className="category-brief">Cookware sets, chef knives, silicone tools & smart dispensers</p>
                </div>
              </div>
            </Link>

            <Link to="/collections/home-decor" className="category-card reveal" ref={addReveal}>
              <img src={heroHomeDecor} alt="Home Decor collection" loading="lazy" />
              <div className="category-overlay">
                <div className="category-card-content">
                  <span className="category-subtitle">Artisanal Pieces</span>
                  <div className="category-label">
                    <span>Home & Living Decor</span>
                    <ArrowRight size={20} />
                  </div>
                  <p className="category-brief">Ceramic spice carousels, marble mats & succulent wall planters</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Trending Products ─────────────────────── */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header-wrap reveal" ref={addReveal}>
            <span className="section-title">Most Loved</span>
            <h2 className="section-heading">Trending Right Now</h2>
            <p className="section-subtext">Our top-rated essentials backed by hundreds of 5-star customer reviews</p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product, i) => (
              <div key={product.id} className="reveal" ref={addReveal} style={{ transitionDelay: `${i * 90}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 reveal" ref={addReveal}>
            <Link to="/collections/all" className="btn-primary">
              View Entire Catalog ({MOCK_PRODUCTS.length}) <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Flash Mega Sale Section ────────────────── */}
      <section className="mega-sale-section" style={{ backgroundImage: `url('${heroSale}')` }}>
        <div className="mega-sale-overlay" />
        <div className="container">
          <div className="mega-sale-container reveal" ref={addReveal}>
            <div className="mega-sale-badge-pill">
              <Flame size={16} color="#e74c3c" />
              <span>FLASH MEGA SALE</span>
            </div>

            <h2>UP TO 50% OFF<br /><span className="text-gold">GOURMET ESSENTIALS</span></h2>
            <p className="mega-sale-desc">
              Upgrade your kitchen with our heaviest discounts of the season. Limited stock available with cash on delivery across Pakistan.
            </p>

            <div className="sale-countdown-timer">
              <div className="timer-box">
                <span className="timer-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="timer-unit">Hours</span>
              </div>
              <span className="timer-sep">:</span>
              <div className="timer-box">
                <span className="timer-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="timer-unit">Minutes</span>
              </div>
              <span className="timer-sep">:</span>
              <div className="timer-box">
                <span className="timer-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="timer-unit">Seconds</span>
              </div>
            </div>

            <div className="mega-sale-actions">
              <Link to="/collections/sale" className="btn-primary btn-sale">
                Explore Mega Sale Deals <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. New Arrivals ──────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header-wrap reveal" ref={addReveal}>
            <span className="section-title">Fresh in Stock</span>
            <h2 className="section-heading">New Arrivals</h2>
            <p className="section-subtext">The latest additions to our culinary and home aesthetics line</p>
          </div>

          <div className="product-grid">
            {newArrivals.map((product, i) => (
              <div key={product.id} className="reveal" ref={addReveal} style={{ transitionDelay: `${i * 90}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Verified Customer Testimonials ─────────── */}
      <section className="section bg-light testimonials-section">
        <div className="container">
          <div className="section-header-wrap reveal" ref={addReveal}>
            <span className="section-title">Real Feedback</span>
            <h2 className="section-heading">Loved By Thousands</h2>
            <p className="section-subtext">See why over 15,000+ Pakistani homes choose Zahra Stores</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card reveal" ref={addReveal} style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="testimonial-card-top">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} size={15} fill="#c6973f" color="#c6973f" />
                    ))}
                  </div>
                  {t.verified && (
                    <span className="verified-badge">
                      <Check size={12} /> Verified Buyer
                    </span>
                  )}
                </div>

                <p className="quote">"{t.quote}"</p>

                <div className="author-info">
                  <div className="author-avatar">{t.author[0]}</div>
                  <div>
                    <h4 className="author">{t.author}</h4>
                    <span className="author-location">{t.location}</span>
                    <span className="author-product">Purchased: {t.product}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Instagram Grid (All Local Images) ──────── */}
      <section className="instagram-section">
        <div className="container">
          <div className="section-header-wrap reveal" ref={addReveal}>
            <span className="section-title">Follow Our Community</span>
            <h2 className="section-heading flex items-center justify-center gap-2">
              <InstagramIcon size={28} /> @ZahraStores.pk
            </h2>
            <p className="section-subtext">Tag us in your kitchen setups to get featured on our official page</p>
          </div>
        </div>

        <div className="instagram-grid">
          {instagramGallery.map((item, i) => (
            <a href="https://instagram.com" target="_blank" rel="noreferrer" key={i} className="insta-item" aria-label={`Instagram photo ${i + 1}`}>
              <img src={item.img} alt={`Zahra Stores community ${i + 1}`} loading="lazy" />
              <div className="insta-overlay">
                <InstagramIcon size={26} />
                <span className="insta-tag">{item.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── 9. Newsletter ────────────────────────────── */}
      <section className="newsletter-section section">
        <div className="container">
          <div className="newsletter-box reveal" ref={addReveal}>
            <span className="newsletter-pill">
              <Sparkles size={14} /> VIP MEMBER CLUB
            </span>
            <h2>Unlock 10% Off Your First Order</h2>
            <p>Subscribe to receive secret flash sale codes, new product drops & kitchen styling guides directly in your inbox.</p>
            <form className="newsletter-form" onSubmit={e => { e.preventDefault(); alert('Thank you for subscribing! Use code WELCOME10 at checkout.'); }}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn-primary">
                Get 10% Discount <ArrowRight size={16} />
              </button>
            </form>
            <span className="newsletter-guarantee">🔒 No spam ever. Unsubscribe at any time.</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

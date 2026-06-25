import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts, formatPrice } from '../data/products';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const { addToCart } = useAppContext();

  const categories = [
    {
      name: 'Wall Décor',
      slug: 'wall-decor',
      image: 'https://images.unsplash.com/photo-1704423896061-b0a1057e20a3?w=800&q=80',
      description: 'Hand-carved art pieces'
    },
    {
      name: 'Kitchenware',
      slug: 'kitchenware',
      image: 'https://images.unsplash.com/photo-1765120828282-63dc950b6f90?w=800&q=80',
      description: 'Serving bowls & boards'
    },
    {
      name: 'Furniture',
      slug: 'furniture',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      description: 'Tables, chairs & more'
    }
  ];

  const values = [
    {
      title: 'Sustainably Sourced',
      description: 'Every slab is ethically harvested from Kenyan forests with care for the land and community.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.5 3-4.5 4.5-4.5 9a4.5 4.5 0 109 0c0-4.5-3-6-4.5-9z" />
      )
    },
    {
      title: 'Handcrafted',
      description: 'Master artisans shape each piece using techniques passed down through generations.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0 0L12 12m0 0l2.879-2.879M12 12l2.879 2.879" />
      )
    },
    {
      title: 'Built to Last',
      description: 'Heirloom-quality joinery and finishes designed to age beautifully in your home.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      )
    }
  ];

  const stats = [
    { value: '15+', label: 'Years of craft' },
    { value: '40+', label: 'Local artisans' },
    { value: '100%', label: 'Sustainable wood' }
  ];

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  return (
    <div className="w-full bg-wood-bg bg-grain">
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&q=85"
          alt="Warm woodcraft interior"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wood-text/90 via-wood-text/70 to-wood-text/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-text/60 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-wood-clay/40 bg-wood-clay/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-wood-clay animate-pulse" />
              <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-wood-clay">
                Kenyan Artisan Woodcraft
              </span>
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-wood-bg mb-6 text-balance">
              Handcrafted Wood Art for Every Home
            </h1>

            <p className="font-sans text-lg md:text-xl text-wood-bg/85 mb-10 leading-relaxed max-w-xl">
              Discover premium, sustainably sourced pieces shaped by Kenyan artisans — 
              where natural grain, timeless design, and living craftsmanship meet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-wood-clay text-wood-text font-sans font-semibold rounded-sm hover:bg-wood-bg transition-all duration-300 shadow-lg shadow-wood-text/20"
              >
                Shop Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-wood-bg/40 text-wood-bg font-sans font-medium rounded-sm hover:bg-wood-bg/10 backdrop-blur-sm transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-wood-bg/15 bg-wood-text/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-3 divide-x divide-wood-bg/15">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-4">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-wood-bg">{stat.value}</p>
                  <p className="font-sans text-xs md:text-sm text-wood-bg/70 mt-1 tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-wood-clay/15 rounded-sm -z-10 translate-x-3 translate-y-3" />
              <img
                src="https://images.unsplash.com/photo-1497219055242-93359eeed651?w=900&q=80"
                alt="Artisan carving wood by hand"
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl shadow-wood-text/10"
              />
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-white px-6 py-4 rounded-sm shadow-xl border border-wood-text/5 max-w-[220px]">
                <p className="font-serif text-3xl font-bold text-wood-green">100%</p>
                <p className="font-sans text-sm text-wood-text/70 mt-1">Hand-finished by local master craftsmen</p>
              </div>
            </div>

            <div>
              <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-wood-green mb-4">
                The BoraBora Way
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-text mb-6 leading-tight">
                From Forest to Finished Piece
              </h2>
              <p className="font-sans text-wood-text/70 text-lg leading-relaxed mb-6">
                We work directly with coastal Kenyan woodworkers who select each timber slab 
                for its character, then shape it with hand tools and time-honored techniques. 
                No mass production — just honest craft you can feel in every grain.
              </p>
              <p className="font-sans text-wood-text/70 leading-relaxed mb-8">
                Whether it is a live-edge table anchoring your living room or a carved panel 
                warming your walls, every BoraBora piece is made to be lived with and loved for decades.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-sans font-semibold text-wood-green hover:text-wood-green-dark transition-colors group"
              >
                Meet our artisans
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white border-y border-wood-text/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wood-green/10 text-wood-green mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {value.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-wood-text mb-2">{value.title}</h3>
                <p className="font-sans text-sm text-wood-text/65 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-wood-green mb-3">
              Collections
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-text mb-4">
              Explore Our Categories
            </h2>
            <p className="font-sans text-wood-text/65 max-w-xl mx-auto">
              From statement wall pieces to functional kitchen essentials — find the perfect woodcraft for every corner of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/shop?category=${category.name}`}
                className="group relative overflow-hidden rounded-sm shadow-lg shadow-wood-text/5 ring-1 ring-wood-text/5"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-wood-text via-wood-text/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="font-serif text-2xl font-bold text-wood-bg mb-1 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="font-sans text-sm text-wood-bg/75 mb-3">{category.description}</p>
                  <span className="font-sans text-xs font-semibold tracking-widest uppercase text-wood-clay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Browse →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-wood-green mb-3">
                Curated Selection
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-text">
                Featured Products
              </h2>
            </div>
            <p className="font-sans text-wood-text/65 max-w-sm md:text-right">
              Our most beloved pieces, chosen for exceptional craftsmanship and timeless beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-wood-bg rounded-sm overflow-hidden ring-1 ring-wood-text/5 hover:ring-wood-clay/30 hover:shadow-xl hover:shadow-wood-text/5 transition-all duration-300"
              >
                <Link to={`/product/${product.id}`} className="block relative">
                  <div className="aspect-square overflow-hidden bg-wood-text/5">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm font-sans text-[10px] font-semibold tracking-widest uppercase text-wood-green rounded-sm">
                    Handcrafted
                  </span>
                </Link>
                <div className="p-5">
                  <Link to={`/product/${product.id}`} className="block">
                    <p className="font-sans text-[11px] tracking-widest uppercase text-wood-green font-medium mb-1.5">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-lg font-semibold text-wood-text mb-3 line-clamp-2 group-hover:text-wood-green transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-base font-semibold text-wood-text">
                      {formatPrice(product.price)}
                    </span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-wood-clay" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-sans text-sm text-wood-text/60">{product.rating}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full px-4 py-2.5 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded-sm hover:bg-wood-green-dark transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-wood-green text-wood-green font-sans font-semibold rounded-sm hover:bg-wood-green hover:text-wood-bg transition-all duration-300"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-24 bg-wood-green-dark text-wood-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-grain" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-10 h-10 text-wood-clay mx-auto mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.45l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621-.537-.278-1.24-.375-1.929-.311-2.352.218-4.012 2.086-4.012 4.513 0 2.425 1.865 4.492 4.363 4.492 2.422 0 4.012-1.732 4.012-4.137 0-2.312-.995-4.292-2.667-5.577zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.45l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621-.537-.278-1.24-.375-1.929-.311-2.352.218-4.012 2.086-4.012 4.513 0 2.425 1.865 4.492 4.363 4.492 2.422 0 4.012-1.732 4.012-4.137 0-2.312-.995-4.292-2.667-5.577z" />
          </svg>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 italic">
            "The live-edge table transformed our living room. You can see and feel the craftsmanship in every detail — it is truly an heirloom piece."
          </blockquote>
          <cite className="font-sans text-sm not-italic tracking-widest uppercase text-wood-clay">
            — Grace Wanjiku, Nairobi
          </cite>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-sm bg-wood-text px-8 py-14 md:px-16 md:py-20 text-center">
            <img
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1200&q=60"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-wood-text via-wood-text/95 to-wood-green-dark/80" />
            <div className="relative max-w-xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-wood-bg mb-4">
                Join Our Community
              </h2>
              <p className="font-sans text-wood-bg/80 mb-8 leading-relaxed">
                Exclusive offers, new arrivals, and expert woodcare tips — delivered to your inbox.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing! In production, this would connect to a newsletter service.');
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 rounded-sm font-sans text-wood-bg placeholder-wood-bg/40 focus:outline-none focus:border-wood-clay focus:ring-1 focus:ring-wood-clay transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-wood-clay text-wood-text font-sans font-semibold rounded-sm hover:bg-wood-bg transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="font-sans text-xs text-wood-bg/50 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

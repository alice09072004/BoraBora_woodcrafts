import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, formatPrice, isFlashSaleActive, getFlashSalePrice } from '../data/products';
import { useAppContext } from '../context/AppContext';
import CountdownTimer from '../components/CountdownTimer';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useAppContext();
  
  // Get initial filter and sort from URL params
  const initialCategory = searchParams.get('category') || 'all';
  const initialSort = searchParams.get('sort') || 'newest';
  const initialFlashSaleOnly = searchParams.get('flashSale') === 'true';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState(initialSort);
  const [flashSaleOnly, setFlashSaleOnly] = useState(initialFlashSaleOnly);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Available categories
  const categories = ['all', 'Wall Décor', 'Kitchenware', 'Furniture'];

  // Sort options
  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Apply flash sale filter
    if (flashSaleOnly) {
      result = result.filter(product => isFlashSaleActive(product));
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => getFlashSalePrice(a) - getFlashSalePrice(b));
        break;
      case 'price-high':
        result.sort((a, b) => getFlashSalePrice(b) - getFlashSalePrice(a));
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.id - a.id);
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, sortBy, flashSaleOnly]);

  // Update URL params when filters change
  useEffect(() => {
    const params = {};
    if (selectedCategory !== 'all') params.category = selectedCategory;
    if (sortBy !== 'newest') params.sort = sortBy;
    if (flashSaleOnly) params.flashSale = 'true';
    setSearchParams(params);
  }, [selectedCategory, sortBy, flashSaleOnly, setSearchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
  };

  const handleFlashSaleToggle = () => {
    setFlashSaleOnly(!flashSaleOnly);
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-wood-green text-wood-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Shop Our Collection</h1>
          <p className="font-sans text-wood-bg/90">
            Discover handcrafted wood art and heirloom furniture
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="font-serif text-xl font-bold text-wood-text mb-4">
                  Categories
                </h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-3 py-2 rounded font-sans text-sm transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-wood-green text-wood-bg font-medium'
                          : 'text-wood-text/70 hover:bg-wood-bg hover:text-wood-text'
                      }`}
                    >
                      {category === 'all' ? 'All Products' : category}
                    </button>
                  ))}
                </div>

                {/* Flash Sale Filter Toggle */}
                <div className="mt-6 pt-6 border-t border-wood-text/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg font-bold text-wood-text">
                      Active Flash Drops
                    </h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={flashSaleOnly}
                        onChange={handleFlashSaleToggle}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-wood-text/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-wood-green rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-wood-clay"></div>
                    </label>
                  </div>
                  <p className="font-sans text-xs text-wood-text/60">
                    Show only items currently on sale
                  </p>
                </div>

                {/* Mobile Category Filter - Shown on mobile */}
                <div className="mt-6 lg:hidden">
                  <h3 className="font-serif text-lg font-bold text-wood-text mb-3">
                    Filter by Category
                  </h3>
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-3 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:border-wood-green focus:ring-1 focus:ring-wood-green"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Products' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </aside>

            {/* Main Product Grid */}
            <div className="flex-1">
              {/* Sort Dropdown */}
              <div className="flex justify-between items-center mb-6">
                <p className="font-sans text-wood-text/70">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="flex items-center space-x-2">
                  <label htmlFor="sort" className="font-sans text-sm text-wood-text/70">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="px-3 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:border-wood-green focus:ring-1 focus:ring-wood-green"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => {
                    const hasFlashSale = isFlashSaleActive(product);
                    const displayPrice = getFlashSalePrice(product);
                    
                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      >
                        <Link to={`/product/${product.id}`} className="block relative">
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          {/* Flash Sale Badge */}
                          {hasFlashSale && (
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1.5 bg-red-600 text-white font-sans text-xs font-bold tracking-widest uppercase rounded-sm shadow-lg">
                                {product.flashSale.discountPercentage}% OFF
                              </span>
                            </div>
                          )}
                          {/* Countdown Badge for Flash Sale */}
                          {hasFlashSale && (
                            <div className="absolute top-3 right-3">
                              <div className="bg-wood-text/95 backdrop-blur-sm px-2 py-1 rounded-sm">
                                <CountdownTimer 
                                  targetDate={product.flashSale.endTime} 
                                  compact={true}
                                  className="text-wood-bg text-xs"
                                />
                              </div>
                            </div>
                          )}
                        </Link>
                        <div className="p-4">
                          <Link to={`/product/${product.id}`} className="block">
                            <p className="font-sans text-xs text-wood-green font-medium mb-1">
                              {product.category}
                            </p>
                            <h3 className="font-serif text-lg font-semibold text-wood-text mb-2 line-clamp-2 hover:text-wood-green transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="font-sans text-sm text-wood-text/60 mb-3 line-clamp-2">
                            {product.shortDescription}
                          </p>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className={`font-sans text-lg font-bold ${hasFlashSale ? 'text-red-600' : 'text-wood-text'}`}>
                                {formatPrice(displayPrice)}
                              </span>
                              {hasFlashSale && (
                                <span className="font-sans text-sm text-wood-text/50 line-through">
                                  {formatPrice(product.price)}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-1">
                              <svg
                                className="w-4 h-4 text-wood-clay"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="font-sans text-sm text-wood-text/70">
                                {product.rating}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full px-4 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 mx-auto text-wood-text/30 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="font-serif text-xl font-semibold text-wood-text mb-2">
                    No products found
                  </h3>
                  <p className="font-sans text-wood-text/70 mb-4">
                    Try selecting a different category or filter.
                  </p>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className="px-6 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

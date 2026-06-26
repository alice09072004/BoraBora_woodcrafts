import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useAppContext();
  const location = useLocation();
  const cartItemCount = getCartItemCount();

  // Navigation links
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
    { path: '/account', label: 'Account' }
  ];

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-wood-bg/95 backdrop-blur-sm border-b border-wood-text/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-wood-text tracking-tight">
                BoraBora Woodcrafts
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-sans text-sm font-medium transition-colors duration-200 hover:text-wood-green ${
                    location.pathname === link.path
                      ? 'text-wood-green'
                      : 'text-wood-text/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Cart Icon and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon with Badge */}
              <Link
                to="/cart"
                className="relative p-2 text-wood-text hover:text-wood-green transition-colors duration-200"
                aria-label="Shopping cart"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-wood-green text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-wood-text hover:text-wood-green transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-wood-text/10">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-sans text-sm font-medium transition-colors duration-200 hover:text-wood-green ${
                      location.pathname === link.path
                        ? 'text-wood-green'
                        : 'text-wood-text/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/account"
                  className="font-sans text-sm font-medium text-wood-text/80 hover:text-wood-green transition-colors duration-200"
                >
                  Account
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-wood-text text-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Manifesto Column */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold">BoraBora Woodcrafts</h3>
              <p className="font-sans text-sm leading-relaxed text-wood-bg/80">
                Handcrafted wood art and heirloom furniture, sustainably sourced from Kenya's coastal forests. 
                Each piece tells a story of tradition, craftsmanship, and ethical stewardship.
              </p>
              <div className="flex space-x-4 pt-2">
                {/* Social Media Icons (placeholder - in production, these would link to actual social media) */}
                <a href="#" className="text-wood-bg/80 hover:text-wood-clay transition-colors duration-200" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                </a>
                <a href="#" className="text-wood-bg/80 hover:text-wood-clay transition-colors duration-200" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.16,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                  </svg>
                </a>
                <a href="#" className="text-wood-bg/80 hover:text-wood-clay transition-colors duration-200" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.95,4.57a10,10,0,0,1-2.82.77,4.96,4.96,0,0,0,2.16-2.72,9.9,9.9,0,0,1-3.12,1.19,4.92,4.92,0,0,0-8.39,4.49A14,14,0,0,1,1.64,3.16,4.92,4.92,0,0,0,3.16,9.72,4.86,4.86,0,0,1,.96,9.11v.06a4.93,4.93,0,0,0,3.95,4.83,4.86,4.86,0,0,1-2.22.08,4.93,4.93,0,0,0,4.6,3.42A9.87,9.87,0,0,1,0,19.54a13.94,13.94,0,0,0,7.55,2.21A13.9,13.9,0,0,0,21.55,7.68c0-.21,0-.42,0-.63A10,10,0,0,0,24,4.59Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/shop"
                    className="font-sans text-sm text-wood-bg/80 hover:text-wood-clay transition-colors duration-200"
                  >
                    Shop All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-sans text-sm text-wood-bg/80 hover:text-wood-clay transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="font-sans text-sm text-wood-bg/80 hover:text-wood-clay transition-colors duration-200"
                  >
                    Blog & Journal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="font-sans text-sm text-wood-bg/80 hover:text-wood-clay transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account"
                    className="font-sans text-sm text-wood-bg/80 hover:text-wood-clay transition-colors duration-200"
                  >
                    My Account
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold">Stay Connected</h3>
              <p className="font-sans text-sm text-wood-bg/80">
                Subscribe to our newsletter for exclusive offers, new product announcements, and woodcraft tips.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // In production, this would submit to a newsletter API
                  alert('Thank you for subscribing! In production, this would connect to a newsletter service.');
                }}
                className="space-y-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 bg-wood-bg/10 border border-wood-bg/20 rounded font-sans text-sm placeholder-wood-bg/50 focus:outline-none focus:border-wood-clay focus:ring-1 focus:ring-wood-clay transition-all duration-200"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-wood-green hover:bg-wood-green-dark text-wood-bg font-sans text-sm font-medium rounded transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="mt-12 pt-8 border-t border-wood-bg/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="font-sans text-xs text-wood-bg/60">
                © {new Date().getFullYear()} BoraBora Woodcrafts. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="font-sans text-xs text-wood-bg/60 hover:text-wood-clay transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="font-sans text-xs text-wood-bg/60 hover:text-wood-clay transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="font-sans text-xs text-wood-bg/60 hover:text-wood-clay transition-colors duration-200">
                  Shipping Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

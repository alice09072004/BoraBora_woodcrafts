import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, formatPrice } from '../data/products';
import { useAppContext } from '../context/AppContext';

const Account = () => {
  const { wishlist, removeFromWishlist, addToCart, userProfile, updateUserProfile } = useAppContext();
  
  // Tab state management
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Profile form state
  const [profileForm, setProfileForm] = useState({
    name: userProfile.name || '',
    email: userProfile.email || '',
    phone: userProfile.phone || '',
    address: ''
  });
  
  // Order detail expansion state
  const [expandedOrder, setExpandedOrder] = useState(null);
  
  // Save success state
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Get wishlist products
  const wishlistProducts = products.filter(product => wishlist.includes(product.id));

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-wood-green/10 text-wood-green border-wood-green/20';
      case 'Dispatched':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'In Workshop':
        return 'bg-wood-clay/10 text-wood-clay border-wood-clay/20';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Handle profile form submission
  const handleProfileSave = (e) => {
    e.preventDefault();
    // Update user profile in context
    updateUserProfile(profileForm);
    // Show success message
    setSaveSuccess(true);
    // Hide success message after 3 seconds
    setTimeout(() => setSaveSuccess(false), 3000);
    
    // In production, this would make an API call to update the user profile
    // Example:
    // await fetch('/api/user/profile', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${authToken}`
    //   },
    //   body: JSON.stringify(profileForm)
    // });
  };

  // Handle move to cart from wishlist
  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  // Toggle order detail expansion
  const toggleOrderExpansion = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-wood-green text-wood-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">My Account</h1>
          <p className="font-sans text-wood-bg/90">
            Manage your account settings and view your order history
          </p>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tab Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="font-serif text-lg font-bold text-wood-text mb-4">
                  Account Menu
                </h2>
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center px-3 py-2 rounded font-sans text-sm transition-colors duration-200 ${
                      activeTab === 'dashboard'
                        ? 'bg-wood-green text-wood-bg font-medium'
                        : 'text-wood-text/70 hover:bg-wood-bg hover:text-wood-text'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1H9z" />
                    </svg>
                    Dashboard Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center px-3 py-2 rounded font-sans text-sm transition-colors duration-200 ${
                      activeTab === 'orders'
                        ? 'bg-wood-green text-wood-bg font-medium'
                        : 'text-wood-text/70 hover:bg-wood-bg hover:text-wood-text'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Order Tracking Log
                  </button>
                  <button
                    onClick={() => setActiveTab('wishlist')}
                    className={`w-full flex items-center px-3 py-2 rounded font-sans text-sm transition-colors duration-200 ${
                      activeTab === 'wishlist'
                        ? 'bg-wood-green text-wood-bg font-medium'
                        : 'text-wood-text/70 hover:bg-wood-bg hover:text-wood-text'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Artisan Wishlist
                    <span className="ml-auto bg-wood-clay text-wood-text text-xs font-bold px-2 py-0.5 rounded-full">
                      {wishlist.length}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center px-3 py-2 rounded font-sans text-sm transition-colors duration-200 ${
                      activeTab === 'settings'
                        ? 'bg-wood-green text-wood-bg font-medium'
                        : 'text-wood-text/70 hover:bg-wood-bg hover:text-wood-text'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Profile Security Settings
                  </button>
                </nav>
              </div>
            </div>

            {/* Tab Content Area */}
            <div className="lg:col-span-3">
              {/* Dashboard Overview Tab */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="font-serif text-2xl font-bold text-wood-text mb-2">
                      Welcome back, {userProfile.name}!
                    </h2>
                    <p className="font-sans text-wood-text/70">
                      Here's a summary of your account activity
                    </p>
                  </div>

                  {/* Summary Tiles */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-wood-green/10 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-wood-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-sans text-3xl font-bold text-wood-text mb-1">
                        {userProfile.orderHistory?.length || 0}
                      </p>
                      <p className="font-sans text-sm text-wood-text/60">
                        Total Orders
                      </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-wood-clay/10 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-wood-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-sans text-3xl font-bold text-wood-text mb-1">
                        {wishlist.length}
                      </p>
                      <p className="font-sans text-sm text-wood-text/60">
                        Wishlist Items
                      </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-wood-text/10 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-wood-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-sans text-3xl font-bold text-wood-text mb-1">
                        {userProfile.orderHistory?.length > 0 ? formatPrice(userProfile.orderHistory[0].totalAmount) : 'KES 0'}
                      </p>
                      <p className="font-sans text-sm text-wood-text/60">
                        Last Order Total
                      </p>
                    </div>
                  </div>

                  {/* Recent Activity Card */}
                  {userProfile.orderHistory?.length > 0 && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-serif text-xl font-bold text-wood-text mb-4">
                        Recent Transaction Activity
                      </h3>
                      <div className="border border-wood-text/10 rounded-lg overflow-hidden">
                        <div className="p-4 bg-wood-bg/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-sans text-sm text-wood-text/70">Order ID</span>
                            <span className="font-sans text-sm font-medium text-wood-text">
                              {userProfile.orderHistory[0].orderId}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-sans text-sm text-wood-text/70">Date</span>
                            <span className="font-sans text-sm text-wood-text">
                              {new Date(userProfile.orderHistory[0].date).toLocaleDateString('en-KE', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-sans text-sm text-wood-text/70">Status</span>
                            <span className={`px-2 py-1 text-xs font-medium rounded border ${getStatusColor(userProfile.orderHistory[0].status)}`}>
                              {userProfile.orderHistory[0].status}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-sm text-wood-text/70">Total</span>
                            <span className="font-sans text-sm font-bold text-wood-text">
                              {formatPrice(userProfile.orderHistory[0].totalAmount)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Order Tracking Log Tab */}
              {activeTab === 'orders' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                    Order Tracking Log
                  </h2>
                  
                  {userProfile.orderHistory?.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-wood-text/10">
                            <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                              Order ID
                            </th>
                            <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                              Date
                            </th>
                            <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                              Status
                            </th>
                            <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                              Total
                            </th>
                            <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {userProfile.orderHistory.map((order) => (
                            <React.Fragment key={order.orderId}>
                              <tr className="border-b border-wood-text/10 hover:bg-wood-bg/50 transition-colors">
                                <td className="font-sans text-sm text-wood-text py-4 px-4">
                                  {order.orderId}
                                </td>
                                <td className="font-sans text-sm text-wood-text/70 py-4 px-4">
                                  {new Date(order.date).toLocaleDateString('en-KE', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </td>
                                <td className="py-4 px-4">
                                  <span className={`px-2 py-1 text-xs font-medium rounded border ${getStatusColor(order.status)}`}>
                                    {order.status}
                                  </span>
                                </td>
                                <td className="font-sans text-sm font-medium text-wood-text py-4 px-4">
                                  {formatPrice(order.totalAmount)}
                                </td>
                                <td className="py-4 px-4">
                                  <button
                                    onClick={() => toggleOrderExpansion(order.orderId)}
                                    className="font-sans text-sm text-wood-green hover:text-wood-green-dark font-medium transition-colors"
                                  >
                                    {expandedOrder === order.orderId ? 'Hide Details' : 'View Receipts/Details'}
                                  </button>
                                </td>
                              </tr>
                              {expandedOrder === order.orderId && (
                                <tr className="bg-wood-bg/30">
                                  <td colSpan={5} className="py-4 px-4">
                                    <div className="border-l-2 border-wood-green pl-4">
                                      <h4 className="font-sans text-sm font-semibold text-wood-text mb-2">
                                        Order Items
                                      </h4>
                                      <ul className="space-y-2">
                                        {order.items.map((item, index) => (
                                          <li key={index} className="font-sans text-sm text-wood-text/70">
                                            {item.name} × {item.quantity} - {formatPrice(item.price)}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8">
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
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      <h3 className="font-serif text-xl font-semibold text-wood-text mb-2">
                        No orders yet
                      </h3>
                      <p className="font-sans text-wood-text/70 mb-4">
                        Start shopping to see your order history here.
                      </p>
                      <Link
                        to="/shop"
                        className="inline-block px-6 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Artisan Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                    Artisan Wishlist
                  </h2>
                  
                  {wishlistProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {wishlistProducts.map((product) => (
                        <div
                          key={product.id}
                          className="border border-wood-text/10 rounded-lg overflow-hidden"
                        >
                          <Link to={`/product/${product.id}`} className="block">
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              />
                            </div>
                          </Link>
                          <div className="p-4">
                            <Link to={`/product/${product.id}`} className="block">
                              <p className="font-sans text-xs text-wood-green font-medium mb-1">
                                {product.category}
                              </p>
                              <h3 className="font-serif text-base font-semibold text-wood-text mb-2 line-clamp-2 hover:text-wood-green transition-colors">
                                {product.name}
                              </h3>
                            </Link>
                            <p className="font-sans text-lg font-bold text-wood-text mb-3">
                              {formatPrice(product.price)}
                            </p>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleMoveToCart(product)}
                                className="flex-1 px-3 py-2 bg-wood-green text-wood-bg font-sans text-xs font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                              >
                                Move to Cart
                              </button>
                              <button
                                onClick={() => removeFromWishlist(product.id)}
                                className="px-3 py-2 border border-wood-text/30 text-wood-text font-sans text-xs font-medium rounded hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors duration-200"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <svg
                        className="w-16 h-16 mx-auto text-wood-text/20 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <p className="font-sans text-wood-text/70 mb-4">
                        Your wishlist is empty. Save items you love by clicking the heart icon on any product.
                      </p>
                      <Link
                        to="/shop"
                        className="inline-block px-6 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                      >
                        Explore Products
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Profile Security Settings Tab */}
              {activeTab === 'settings' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                    Profile Security Settings
                  </h2>
                  
                  {/* Success Message */}
                  {saveSuccess && (
                    <div className="mb-6 p-4 bg-wood-green/10 border border-wood-green/30 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-wood-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="font-sans text-sm text-wood-green font-medium">
                          Profile updated successfully!
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleProfileSave}>
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-20 h-20 bg-wood-clay/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-serif text-2xl font-bold text-wood-clay">
                          {userProfile.name?.charAt(0) || 'U'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-sm text-wood-text/70 mb-2">
                          Profile Avatar
                        </p>
                        <button
                          type="button"
                          className="px-4 py-2 border border-wood-text/20 text-wood-text font-sans text-sm font-medium rounded hover:bg-wood-bg transition-colors duration-200"
                        >
                          Change Photo
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={profileForm.name}
                          onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                          className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={profileForm.phone}
                          onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
                          className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
                        className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                        Delivery Address
                      </label>
                      <textarea
                        value={profileForm.address}
                        onChange={(e) => setProfileForm({...profileForm, address: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors resize-none"
                        placeholder="Enter your delivery address"
                      />
                    </div>

                    <div className="border-t border-wood-text/10 pt-6">
                      <h3 className="font-serif text-lg font-semibold text-wood-text mb-4">
                        Change Password
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={() => setProfileForm({
                          name: userProfile.name || '',
                          email: userProfile.email || '',
                          phone: userProfile.phone || '',
                          address: ''
                        })}
                        className="px-6 py-2 border border-wood-text/20 text-wood-text font-sans text-sm font-medium rounded hover:bg-wood-bg transition-colors duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;

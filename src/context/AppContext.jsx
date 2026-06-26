import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AppContext
const AppContext = createContext();

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// AppProvider component to wrap the application
export const AppProvider = ({ children }) => {
  // Cart state - array of items with product details and quantity
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem('borabora_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Wishlist state - array of product IDs
  const [wishlist, setWishlist] = useState(() => {
    // Initialize wishlist from localStorage if available
    const savedWishlist = localStorage.getItem('borabora_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // User profile state - mock authenticated artisan profile
  // In production, this would be fetched from a backend API using authentication tokens
  const [userProfile, setUserProfile] = useState(() => {
    // Initialize user profile from localStorage if available
    const savedProfile = localStorage.getItem('borabora_user_profile');
    if (savedProfile) {
      return JSON.parse(savedProfile);
    }
    // Default mock profile for demonstration
    return {
      name: 'Alice Nyambu',
      email: 'alice@example.com',
      phone: '0712345678',
      // Mock order history data - in production this would come from a database
      orderHistory: [
        {
          orderId: 'ORDER-1714528901',
          date: '2024-01-15',
          totalAmount: 45000,
          status: 'Delivered',
          items: [
            { name: 'Mvule Live-Edge Coffee Table', quantity: 1, price: 45000 }
          ]
        },
        {
          orderId: 'ORDER-1712345678',
          date: '2024-02-20',
          totalAmount: 12000,
          status: 'Dispatched',
          items: [
            { name: 'Mahogany Salad Bowls Set', quantity: 1, price: 12000 }
          ]
        },
        {
          orderId: 'ORDER-1713456789',
          date: '2024-03-10',
          totalAmount: 28000,
          status: 'In Workshop',
          items: [
            { name: 'Hand-Carved Wall Art Panel', quantity: 1, price: 28000 }
          ]
        }
      ]
    };
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('borabora_cart', JSON.stringify(cart));
  }, [cart]);

  // Persist wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('borabora_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Persist user profile to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('borabora_user_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item already exists, update quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      } else {
        // If item doesn't exist, add new item
        return [...prevCart, { ...product, qty: quantity }];
      }
    });
  };

  // Remove item from cart completely
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update item quantity in cart
  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // If quantity is 0 or negative, remove the item
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, qty: newQuantity }
          : item
      )
    );
  };

  // Increment item quantity by 1
  const incrementCartItem = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // Decrement item quantity by 1
  const decrementCartItem = (productId) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId) {
          const newQty = item.qty - 1;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      }).filter(item => item.qty > 0) // Remove items with quantity 0
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  // Calculate cart item count (total number of items, not unique products)
  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.qty, 0);
  };

  // Add product to wishlist
  const addToWishlist = (productId) => {
    setWishlist(prevWishlist => {
      if (!prevWishlist.includes(productId)) {
        return [...prevWishlist, productId];
      }
      return prevWishlist;
    });
  };

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(id => id !== productId));
  };

  // Toggle product in wishlist (add if not present, remove if present)
  const toggleWishlist = (productId) => {
    setWishlist(prevWishlist => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter(id => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };

  // Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  // Update user profile
  const updateUserProfile = (updatedProfile) => {
    setUserProfile(prevProfile => ({
      ...prevProfile,
      ...updatedProfile
    }));
  };

  // Add order to user's order history
  const addOrderToHistory = (order) => {
    setUserProfile(prevProfile => ({
      ...prevProfile,
      orderHistory: [order, ...prevProfile.orderHistory]
    }));
  };

  // Calculate estimated shipping (in production, this would come from an API)
  const getShippingCost = () => {
    const cartTotal = getCartTotal();
    // Free shipping for orders over KES 50,000
    if (cartTotal >= 50000) {
      return 0;
    }
    // Flat rate shipping fee for orders under KES 50,000
    return 1500;
  };

  // Context value object
  const value = {
    // Cart state and functions
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    incrementCartItem,
    decrementCartItem,
    clearCart,
    getCartTotal,
    getCartItemCount,
    
    // Wishlist state and functions
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    
    // User profile state and functions
    userProfile,
    updateUserProfile,
    addOrderToHistory,
    
    // Shipping calculation
    getShippingCost,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
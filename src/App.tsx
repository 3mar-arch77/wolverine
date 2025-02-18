import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CartModal } from './components/CartModal';
import { AuthModal } from './components/AuthModal';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Brands } from './pages/Brands';
import { products } from './data/mockData';
import { Toaster } from 'react-hot-toast';
import type { Product } from './types';

function App() {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [cartItems, setCartItems] = useState<Map<string, number>>(new Map());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const newCart = new Map(prev);
      newCart.set(product.id, (prev.get(product.id) || 0) + 1);
      return newCart;
    });
  }, []);

  const handleUpdateCartQuantity = useCallback((productId: string, delta: number) => {
    setCartItems(prev => {
      const newCart = new Map(prev);
      const currentQuantity = prev.get(productId) || 0;
      const newQuantity = currentQuantity + delta;
      
      if (newQuantity <= 0) {
        newCart.delete(productId);
      } else {
        newCart.set(productId, newQuantity);
      }
      
      return newCart;
    });
  }, []);

  const handleToggleWishlist = useCallback((product: Product) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(product.id)) {
        newWishlist.delete(product.id);
      } else {
        newWishlist.add(product.id);
      }
      return newWishlist;
    });
  }, []);

  const cartItemsCount = Array.from(cartItems.values()).reduce((sum, quantity) => sum + quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-center" />
        <Navbar 
          onOpenCart={() => setIsCartOpen(true)} 
          cartItemsCount={cartItemsCount}
          onOpenAuth={() => setIsAuthOpen(true)}
        />
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          products={products}
          onUpdateQuantity={handleUpdateCartQuantity}
        />
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            } 
          />
          <Route 
            path="/categories" 
            element={
              <Categories 
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            } 
          />
          <Route 
            path="/brands" 
            element={
              <Brands 
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
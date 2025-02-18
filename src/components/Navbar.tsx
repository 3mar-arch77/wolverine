import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, User } from 'lucide-react';

interface NavbarProps {
  onOpenCart: () => void;
  cartItemsCount: number;
  onOpenAuth: () => void;
}

export function Navbar({ onOpenCart, cartItemsCount, onOpenAuth }: NavbarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              FreshCart
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/categories" className={`${isActive('/categories')} transition-colors duration-200`}>
              Categories
            </Link>
            <Link to="/brands" className={`${isActive('/brands')} transition-colors duration-200`}>
              Brands
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Heart className="h-6 w-6" />
            </button>
            <button 
              className="text-gray-700 hover:text-gray-900 relative"
              onClick={onOpenCart}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button 
              className="text-gray-700 hover:text-gray-900"
              onClick={onOpenAuth}
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
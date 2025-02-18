import React from 'react';
import { Heart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: boolean;
}

export function ProductCard({ product, onAddToCart, onToggleWishlist, isInWishlist }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
          <button 
            onClick={() => onToggleWishlist(product)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <Heart 
              className={`h-5 w-5 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">${product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
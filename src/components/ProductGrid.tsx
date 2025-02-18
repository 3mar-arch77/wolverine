import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  wishlist: Set<string>;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export function ProductGrid({ products, wishlist, onAddToCart, onToggleWishlist }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={wishlist.has(product.id)}
        />
      ))}
    </div>
  );
}
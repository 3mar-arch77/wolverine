import React from 'react';
import { categories, products } from '../data/mockData';
import { ProductGrid } from '../components/ProductGrid';
import type { Product } from '../types';

interface CategoriesProps {
  wishlist: Set<string>;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export function Categories({ wishlist, onAddToCart, onToggleWishlist }: CategoriesProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category.name
        );

        return (
          <section key={category.id} className="mb-12">
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white">{category.name}</h2>
              </div>
            </div>
            
            {categoryProducts.length > 0 ? (
              <ProductGrid
                products={categoryProducts}
                wishlist={wishlist}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
              />
            ) : (
              <p className="text-center text-gray-500">No products found in this category.</p>
            )}
          </section>
        );
      })}
    </div>
  );
}
import React from 'react';
import { brands, products } from '../data/mockData';
import { ProductGrid } from '../components/ProductGrid';
import type { Product } from '../types';

interface BrandsProps {
  wishlist: Set<string>;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export function Brands({ wishlist, onAddToCart, onToggleWishlist }: BrandsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {brands.map((brand) => {
        const brandProducts = products.filter(
          (product) => product.brand === brand.name
        );

        return (
          <section key={brand.id} className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center gap-6">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <h2 className="text-3xl font-bold text-gray-900">{brand.name}</h2>
              </div>
            </div>
            
            {brandProducts.length > 0 ? (
              <ProductGrid
                products={brandProducts}
                wishlist={wishlist}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
              />
            ) : (
              <p className="text-center text-gray-500">No products found for this brand.</p>
            )}
          </section>
        );
      })}
    </div>
  );
}
import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { CategoryCard } from '../components/CategoryCard';
import { BrandCard } from '../components/BrandCard';
import { products, categories, brands } from '../data/mockData';
import type { Product } from '../types';

interface HomeProps {
  wishlist: Set<string>;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export function Home({ wishlist, onAddToCart, onToggleWishlist }: HomeProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Brands */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
        <ProductGrid
          products={products}
          wishlist={wishlist}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
        />
      </section>
    </main>
  );
}
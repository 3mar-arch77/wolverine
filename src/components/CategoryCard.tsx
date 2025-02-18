import React from 'react';
import type { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={category.image} 
        alt={category.name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold text-white">{category.name}</h3>
        </div>
      </div>
    </div>
  );
}
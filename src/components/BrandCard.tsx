import React from 'react';
import type { Brand } from '../types';

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="aspect-square relative mb-4">
        <img 
          src={brand.logo} 
          alt={brand.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold text-center text-gray-900">{brand.name}</h3>
    </div>
  );
}
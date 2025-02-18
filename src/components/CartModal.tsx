import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import type { Product } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: Map<string, number>;
  products: Product[];
  onUpdateQuantity: (productId: string, delta: number) => void;
}

export function CartModal({ isOpen, onClose, items, products, onUpdateQuantity }: CartModalProps) {
  if (!isOpen) return null;

  const cartProducts = Array.from(items.entries()).map(([id, quantity]) => ({
    product: products.find(p => p.id === id)!,
    quantity
  }));

  const total = cartProducts.reduce((sum, { product, quantity }) => 
    sum + (product.price * quantity), 0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5" />
            </button>
          </div>

          {cartProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 p-6">
              <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4">
                {cartProducts.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-4 border-b py-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-20 w-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{product.title}</h3>
                      <p className="text-sm text-gray-500">{product.brand}</p>
                      <p className="font-semibold mt-1">${product.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(product.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t p-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
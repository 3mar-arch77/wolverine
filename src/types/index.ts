export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
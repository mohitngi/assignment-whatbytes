export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  description: string;
};

export const products: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    image: '/file.svg',
    category: 'Clothing',
    brand: 'Nike',
    rating: 4.5,
    description: 'Comfortable running shoes for everyday use.',
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 199,
    image: '/globe.svg',
    category: 'Electronics',
    brand: 'Sony',
    rating: 4.7,
    description: 'Noise-cancelling wireless headphones with long battery life.',
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    image: '/window.svg',
    category: 'Clothing',
    brand: 'Adidas',
    rating: 4.2,
    description: 'Durable backpack for travel and daily use.',
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    image: '/vercel.svg',
    category: 'Electronics',
    brand: 'Apple',
    rating: 4.8,
    description: 'Feature-rich smartwatch with health tracking.',
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    image: '/next.svg',
    category: 'Clothing',
    brand: 'Ray-Ban',
    rating: 4.3,
    description: 'Stylish sunglasses with UV protection.',
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    image: '/globe.svg',
    category: 'Electronics',
    brand: 'Canon',
    rating: 4.6,
    description: 'High-resolution digital camera for photography.',
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    image: '/file.svg',
    category: 'Clothing',
    brand: 'Uniqlo',
    rating: 4.1,
    description: 'Soft cotton t-shirt in various colors.',
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    image: '/window.svg',
    category: 'Electronics',
    brand: 'Samsung',
    rating: 4.9,
    description: 'Latest generation smartphone with advanced features.',
  },
]; 
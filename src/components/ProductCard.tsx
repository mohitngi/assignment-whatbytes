import { Star } from 'lucide-react';
import type { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-28 h-28 object-contain mb-2" />
      <div className="font-semibold text-center">{product.title}</div>
      <div className="text-blue-800 font-bold mb-1">${product.price}</div>
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`}
            fill={i < Math.round(product.rating) ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <button className="bg-blue-700 text-white rounded-md px-4 py-2 mt-auto hover:bg-blue-800 transition">Add to Cart</button>
    </div>
  );
} 
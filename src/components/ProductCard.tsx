import { Star } from 'lucide-react';
import type { Product } from '../data/products';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../app/AppShell';
import Image from 'next/image';

export default function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const { addToCart } = useContext(CartContext);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  if (featured) {
    return (
      <Link href={`/product/${product.id}`} className="block" tabIndex={-1}>
        <div className="bg-white rounded-lg shadow p-6 flex flex-row items-center min-h-[420px] w-full max-w-md mx-auto cursor-pointer hover:shadow-lg transition">
          <Image
            src={product.image}
            alt={product.title}
            width={160}
            height={320}
            className="w-36 h-64 object-contain mr-8"
          />
          <div className="flex-1 flex flex-col justify-center h-full min-w-0">
            <div>
              <div className="font-bold text-black text-2xl mb-1 leading-tight break-words">{product.title}</div>
              <div className="text-blue-800 font-bold text-xl mb-2 break-words">${product.price}</div>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(product.rating) ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`}
                    fill={i < Math.round(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <div className="text-gray-700 mb-2 text-base break-words">Lorem ipsum dolor amet, consectetur eiusangend.</div>
              <div className="text-sm text-gray-500 mb-4 break-words">Category <br /><span className="font-semibold">{product.category}</span></div>
            </div>
            <button
              className="bg-blue-700 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-800 transition w-full font-bold text-lg"
              onClick={handleButtonClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/product/${product.id}`} className="block" tabIndex={-1}>
      <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition">
        <Image 
          src={product.image} 
          alt={product.title} 
          width={320}
          height={320}      
          className="w-28 h-28 object-contain mb-2" 
        />
        <div className="font-semibold text-center text-black">{product.title}</div>
        <div className="text-blue-800 font-bold mb-1">${product.price}</div>
        <button
          className="bg-blue-700 text-white rounded-md px-4 py-2 mt-auto hover:bg-blue-800 transition w-full"
          onClick={handleButtonClick}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
} 
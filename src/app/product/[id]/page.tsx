"use client";
import { products } from '../../../data/products';
import { notFound } from 'next/navigation';
import { useState, useContext } from 'react';
import { CartContext } from '@/app/AppShell';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  if (!product) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
      <p className="text-gray-500">Sorry, we couldn't find that product.</p>
    </div>
  );

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 py-12">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="w-80 h-80 object-contain rounded-lg bg-white shadow" />
      </div>
      {/* Details Section */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <div className="text-blue-800 text-2xl font-bold mb-2">${product.price}</div>
        <div className="text-gray-600 mb-2">{product.description}</div>
        <div className="text-sm text-gray-500 mb-2">Category: <span className="font-semibold">{product.category}</span></div>
        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold">Quantity:</span>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            className="w-16 px-2 py-1 border rounded"
          />
        </div>
        <button 
          className="bg-blue-700 text-white rounded-md px-6 py-3 font-semibold hover:bg-blue-800 transition w-fit"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
} 
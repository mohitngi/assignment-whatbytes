"use client";
import { products, Product } from '../../../data/products';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '@/app/AppShell';
import Image from 'next/image';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const loadProduct = async () => {
      const resolvedParams = await params;
      const foundProduct = products.find((p) => p.id === resolvedParams.id);
      setProduct(foundProduct || null);
    };
    loadProduct();
  }, [params]);

  if (!product) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4">Loading...</h1>
    </div>
  );

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 py-12">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <Image 
          src={product.image} 
          alt={product.title} 
          width={320}
          height={320}
          className="object-contain rounded-lg bg-white shadow" 
        />
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
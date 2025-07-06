"use client";
import { useContext } from "react";
import { CartContext } from "../AppShell";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="space-y-6">
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} className="flex items-center gap-6 bg-white rounded-lg shadow p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={80}
                height={80}
                className="w-20 h-20 object-contain rounded"
              />
              <div className="flex-1">
                <div className="font-semibold">{product.title}</div>
                <div className="text-blue-800 font-bold mb-1">${product.price}</div>
                <div className="flex items-center gap-2 mt-2">
                  <span>Qty:</span>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={e => updateQuantity(product.id, Number(e.target.value))}
                    className="w-16 px-2 py-1 border rounded"
                  />
                  <button
                    className="ml-4 text-red-600 hover:underline"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="font-bold text-lg">${product.price * quantity}</div>
            </div>
          ))}
          <div className="flex justify-end mt-8">
            <div className="bg-blue-100 rounded-lg px-8 py-4 text-xl font-bold">
              Total: ${getCartTotal()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

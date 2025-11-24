"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useShop } from "@/context/context";

export default function AddCartItems({ cartItems }) {
  const { addToCart, removeFromCart, totalItems } = useShop();
  const router = useRouter();
  const itemKeys = Object.keys(cartItems || {});

  const subtotal = itemKeys.reduce(
    (sum, key) =>
      sum + (cartItems[key]?.price || 0) * (cartItems[key]?.quantity || 1),
    0
  );
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => router.push("/")}
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-xl font-bold">
          Shopping Cart ({cartItems.length} Items)
        </h2>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          onClick={() => router.push("/")}
        >
          Home
        </button>
      </div>

      {/* CART ITEMS */}
      {cartItems.map((item) => {
        const isGrocery = item?.category === "groceries";

        return (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item?.thumbnail || item?.images?.[0]}
                alt={item?.title}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div>
                <h3 className="text-lg font-semibold text-black">{item?.title}</h3>

                {isGrocery ? (
                  <div className="text-sm text-gray-600">
                    <p>Category: {item?.category}</p>
                    <p>Rating: {item?.rating}</p>
                  </div>
                ) : (
                  <div className="text-sm text-gray-600">
                    <p>Brand: {item?.brand}</p>
                    <p>Category: {item?.category}</p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col items-end gap-3">
              <p className="text-lg font-semibold text-green-700">
                ${item?.price}
              </p>

              <div className="flex items-center gap-3">
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>

                <span className="text-lg font-medium text-black">{item?.quantity}</span>

                <button
                  className="px-3 py-1 bg-green-600 text-white rounded-full hover:bg-green-700"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* SUBTOTAL */}
      <div className="text-right text-xl font-semibold">
        Sub Total: <span className="text-green-700">${subtotal}</span>
      </div>

      <button className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700">
        Continue to Payment
      </button>
    </div>
  );
}

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useShop } from "@/context/context";

export default function ProductCard({ item }) {
  const router = useRouter();
  const { cartItems, addToCart, removeFromCart } = useShop();

  if (!item) return null;
  const handleAddToCart = () => {
    addToCart(item);
  };

  const productKey = Number(item.id);

  const cartItem = cartItems.find((p) => p.id === productKey);
  const quantity = cartItem?.quantity || 0;

  const displayImage =
    (Array.isArray(item?.images) && item.images[0]) ||
    item?.thumbnail ||
    item?.image ||
    "/placeholder.png";

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 w-full max-w-[260px]">
      <div className="w-full h-40 sm:h-52 md:h-60 lg:h-64 flex items-center justify-center bg-white p-4">
        <img
          src={displayImage}
          alt={item?.title}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="px-3 py-4 text-black text-center">
        <h3 className="font-bold text-xs sm:text-sm md:text-base leading-tight">
          {item?.title}
        </h3>

        <p className="text-sm sm:text-base mt-2 font-semibold">
          ${item?.price}
        </p>
      </div>

      <div className="flex justify-end pb-3 px-3">
        {quantity === 0 ? (
          <button
            type="button"
            onClick={handleAddToCart}
            className="text-white bg-black border border-black hover:bg-white hover:text-black transition duration-300 text-[10px] font-light px-2 py-1 rounded"
          >
            Add to cart
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => removeFromCart(productKey)}
              className="text-black px-2 py-1 border border-black rounded"
            >
              -
            </button>

            <span className="text-black">{quantity}</span>

            <button
              onClick={handleAddToCart}
              className="text-black px-2 py-1 border border-black rounded"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import React, { useEffect } from "react";
import useProducts from "@/hook/useProducts";
import { useShop } from "@/context/context";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Footer from "../../../components/Footer/Footer";
import { useRouter } from "next/navigation";

export default function Groceries() {
  const router = useRouter();
  const { cartItems, addToCart, removeFromCart, products, loadingProducts } =
    useShop();

  const groceries = products.filter((item) => item?.category === "groceries");

  useEffect(() => {
    const user = localStorage.getItem("email");
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <div className="bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-18 text-black text-center tracking-wide">
          Groceries
        </h1>

        {loadingProducts && (
          <p className="text-black flex justify-center items-center py-10 mt-20">
            <AiOutlineLoading3Quarters className="animate-spin text-3xl" />
          </p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-14 max-w-7xl mx-auto px-4">
          {groceries?.map((item) => {
            // ✅ FIX — Correct quantity for each product
            const cartItem = cartItems.find((p) => p.id === item.id);
            const quantity = cartItem?.quantity || 0;

            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="w-full h-40 sm:h-52 md:h-60 lg:h-64 bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={
                      Array.isArray(item.images) && item.images.length > 0
                        ? item.images[0]
                        : item.image || "/placeholder.png"
                    }
                    alt={item.title || item.name || "Product"}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="px-4 py-4 flex-1 text-black">
                  <h3 className=" text-black font-semibold text-xs sm:text-sm md:text-base leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base mt-2 font-semibold text-gray-900">
                    ${item.price}
                  </p>
                </div>

                <div className="flex justify-end pb-3 px-3">
                  {quantity === 0 ? (
                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      className="text-white bg-black border border-black hover:bg-white hover:text-black transition duration-300 text-[10px] font-light px-2 py-1 rounded"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 py-1 border border-black rounded text-black"
                      >
                        -
                      </button>

                      <span className="text-black">{quantity}</span>

                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 py-1 border border-black rounded text-black"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

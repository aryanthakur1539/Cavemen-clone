"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import useProducts from "@/hook/useProducts";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Products() {
  const { products, loading } = useProducts();

  const router = useRouter();

  const beauty = products?.filter((item) => item?.category === "beauty") || [];
  const fragrances =
    products?.filter((item) => item?.category === "fragrances") || [];
  const groceries =
    products?.filter((item) => item?.category === "groceries") || [];
  const furniture =
    products?.filter((item) => item?.category === "furniture") || [];

  if (loading)
    return (
      <p className="flex justify-center items-center py-10">
        <AiOutlineLoading3Quarters className="animate-spin text-3xl" />
      </p>
    );

  return (
    <div className="bg-white w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* -------- Beauty Section -------- */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 mt-10 border-l-4 border-black pl-2 text-black">
          Beauty
        </h1>

        <div className="w-full">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {beauty.slice(0, 3).map((item, index) => (
              <ProductCard key={index} item={item} viewAllPath="/beauty" />
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => router.push("/beauty")}
              className="px-4 py-2 text-sm border border-black rounded bg-black text-white hover:bg-white hover:text-black transition"
            >
              View All
            </button>
          </div>
        </div>

        {/* -------- Fragrances Section -------- */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 mt-10 border-l-4 border-black pl-2 text-black">
          Fragrances
        </h1>

        <div className="w-full">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {fragrances.slice(0, 3).map((item, index) => (
              <ProductCard key={index} item={item} viewAllPath="/fragrances" />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => router.push("/fragrances")}
              className="px-4 py-2 text-sm border border-black rounded bg-black text-white hover:bg-white hover:text-black transition"
            >
              View All
            </button>
          </div>
        </div>

        {/* -------- Groceries Section -------- */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 mt-10 border-l-4 border-black pl-2 text-black">
          Groceries
        </h1>

        <div className="w-full">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {groceries.slice(0, 3).map((item, index) => (
              <ProductCard key={index} item={item} viewAllPath="/groceries" />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => router.push("/groceries")}
              className="px-4 py-2 text-sm border border-black rounded bg-black text-white hover:bg-white hover:text-black transition"
            >
              View All
            </button>
          </div>
        </div>

        {/* -------- Furniture Section -------- */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 mt-10 border-l-4 border-black pl-2 text-black">
          Furniture
        </h1>

        <div className="w-full">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {furniture.slice(0, 3).map((item, index) => (
              <ProductCard key={index} item={item} viewAllPath="/furniture" />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => router.push("/furniture")}
              className="px-4 py-2 text-sm border border-black rounded bg-black text-white hover:bg-white hover:text-black transition"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

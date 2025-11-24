"use client";
import { useEffect, useState } from "react";
import { service } from "@/service/service";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await service();

        const arr = Array.isArray(data?.products)
          ? data.products
          : Array.isArray(data)
          ? data
          : [];

        setProducts(arr);
      } catch (err) {
        console.log(err, "err");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { products, loading };
}

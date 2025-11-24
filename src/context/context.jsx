"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { service } from "@/service/service";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  // ---------------------------------------------------------
  // PRODUCTS STATE
  // ---------------------------------------------------------
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  // ---------------------------------------------------------
  // LOAD PRODUCTS  (Your useProducts Hook moved here)
  // ---------------------------------------------------------
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
        setLoadingProducts(false);
        console.error("Error fetching products:", err);
      } finally {
        setLoadingProducts(false);
      }
    }

    load();
  }, []);

  // ---------------------------------------------------------
  // CART STATE
  // ---------------------------------------------------------
  const [cartItems, setCartItems] = useState([]);

  // ---------------------------------------------------------
  // ADD TO CART
  // ---------------------------------------------------------
  const addToCart = (item) => {
    const key = Number(item.id);

    const index = cartItems.findIndex((p) => p.id === key);
    const newItems = [...cartItems];

    if (index !== -1) newItems[index].quantity += 1;
    if (index !== -1) {
      setCartItems(newItems);
    } else {
      setCartItems((prev) => {
        return [...prev, { ...item, id: key, quantity: 1 }];
      });
    }
  };

  // ---------------------------------------------------------
  // REMOVE FROM CART
  // ---------------------------------------------------------

  const removeFromCart = (id) => {
    const key = Number(id);

    const index = cartItems.findIndex((p) => p.id === key);
    const newItems = [...cartItems];

    if (index !== -1) newItems[index].quantity -= 1;

    if (index !== -1) {
      setCartItems(newItems);
      if (newItems[index].quantity === 0) {
        newItems.splice(index, 1);
        setCartItems(newItems);
      }
    } else {
      setCartItems((prev) => {
        return [...prev, { id: key, quantity: 1 }];
      });
    }
  };

  // ---------------------------------------------------------
  // TOTAL ITEMS IN CART
  // ---------------------------------------------------------
  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  // ---------------------------------------------------------
  // RETURN PROVIDER
  // ---------------------------------------------------------
  return (
    <ShopContext.Provider
      value={{
        // product
        products,
        loadingProducts,

        // cart
        cartItems,
        addToCart,
        removeFromCart,
        totalItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

// Custom Hook
export const useShop = () => useContext(ShopContext);

"use client";
import React from "react";
import AddCartItem from "../../../components/AddCartItem/AddCart";
import { useShop } from "@/context/context";

export default function AddCartPage() {
  const { cartItems } = useShop();
  const itemKeys = Object.keys(cartItems || {});

  if (itemKeys.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Your cart is empty 🛒</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart Items 🛍️</h1>
      <AddCartItem cartItems={cartItems} />
    </div>
  );
}

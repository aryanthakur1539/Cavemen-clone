"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../../../components/HeroSection/HeroSection";
import Middle from "../../../components/Middle/Middle";
import Collection from "../../../components/Collection/Collection";
import Footer from "../../../components/Footer/Footer";
import Products from "../../../components/Products/Products";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("email");
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <HeroSection />
      <Products />
      <Middle />
      <Collection />
      <Footer />
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../../../components/HeroSection/HeroSection";
import Middle from "../../../components/Middle/Middle";
import Collection from "../../../components/Collection/Collection";
import Footer from "../../../components/Footer/Footer";
import Products from "../../../components/Products/Products";

export default function Home() {

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

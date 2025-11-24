"use client";
import { useShop } from "@/context/context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useShop();
  const router = useRouter();

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-7xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
          {/* LOGO */}
          <button
            onClick={() => router.push("/")}
            className="flex items-center space-x-3"
          >
            <img src="logo.caveman.avif" className="h-10" alt="Caveman Logo" />
          </button>

          {/* MOBILE MENU BTN */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>

          {/* MENU LINKS */}
          <div
            className={`${open ? "block" : "hidden"} w-full md:flex md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-0 font-semibold text-black p-4 md:p-0">
              <li>
                <button
                  className="block py-2 px-3 hover:text-amber-600"
                  onClick={() => router.push("/beauty")}
                >
                  Beauty
                </button>
              </li>
              <li>
                <button
                  className="block py-2 px-3 hover:text-amber-600"
                  onClick={() => router.push("/fragrances")}
                >
                  Fragrances
                </button>
              </li>
              <li>
                <button
                  className="block py-2 px-3 hover:text-amber-600"
                  onClick={() => router.push("/furniture")}
                >
                  Furniture
                </button>
              </li>
              <li>
                <button
                  className="block py-2 px-3 hover:text-amber-600"
                  onClick={() => router.push("/groceries")}
                >
                  Groceries
                </button>
              </li>
              <li>
                <a className="block py-2 px-3 hover:text-amber-600" href="#">
                  BLOG
                </a>
              </li>
              <li>
                <a className="block py-2 px-3 hover:text-amber-600" href="#">
                  CONTATTI
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="hidden min-[1100px]:flex space-x-4 text-black">
            <span className="text-sm font-semibold flex items-center space-x-1 cursor-pointer hover:text-amber-600">
              <span>ITALIA | EUR €</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </span>

            <span className="text-sm font-semibold flex items-center space-x-1 cursor-pointer hover:text-amber-600">
              <span>ITALIANO</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </span>

            {/* SEARCH ICON */}
            <svg
              className="w-6 h-6 cursor-pointer hover:text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5 5a7.5 7.5 0 0 0 11.65 11.65Z"
              />
            </svg>

            {/* PROFILE ICON */}
            <svg
              className="w-6 h-6 cursor-pointer hover:text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z"
              />
            </svg>

            {/* 🛒 CART ICON WITH BADGE */}
            <div
              className="relative cursor-pointer hover:text-amber-600"
              onClick={() => router.push("/add-cart")}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293A1 1 0 0 0 6.618 17h11.764M7 13l-.894-4.47M17 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

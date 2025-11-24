"use client";
import { useShop } from "@/context/context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function TopBar() {
  // const [open, setOpen] = useState(false);
  const { totalItems } = useShop();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { products } = useShop();

  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

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
               <button
                  className="block py-2 px-3 hover:text-amber-600"
                  onClick={() => router.push("/contact")}
                >
                  Contact us
                </button>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="hidden min-[1100px]:relative min-[1100px]:block text-black">
            {!open && (
              <AiOutlineSearch
                onClick={() => {
                  setOpen(true);
                  setSearch(""); 
                }}
                className="w-6 h-6 cursor-pointer text-black hover:text-amber-600"
              />
            )}

            {open && (
              <input
                type="text"
                placeholder="Search..."
                value={search}
                autoFocus
                onChange={(e) => setSearch(e.target.value)}
                onBlur={() => {
                  if (search.length === 0) {
                    setOpen(false);
                  }
                }}
                className="absolute top-0 left-0 border p-1 px-2 rounded w-48 bg-white shadow text-black 
                 placeholder:text-gray-500"
              />
            )}

            {open && search.length > 0 && (
              <ul
                className="absolute top-10 left-0 w-60 bg-white shadow-lg rounded p-2 space-y-2 
                   z-50 text-black max-h-60 overflow-y-auto"
              >
                {filtered.length > 0 ? (
                  filtered.map((item, i) => (
                    <li
                      key={i}
                      className="p-2 bg-gray-100 rounded text-black hover:bg-gray-200 cursor-pointer"
                    >
                      {item.title}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No results found</li>
                )}
              </ul>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <svg
              className="text-black hidden min-[1100px]:block w-6 h-6 cursor-pointer hover:text-amber-600"
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

            {/* 🛒 CART ICON → ALWAYS VISIBLE */}
            <div
              className=" text-black relative cursor-pointer hover:text-amber-600"
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

import React from "react";

export default function Center() {
  return (
    <section
      className="relative w-full h-[80vh] md:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/Banner.webp')",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-xl">
          CAVEMAN
        </h1>

        <p className="mt-3 text-white text-sm sm:text-base md:text-xl lg:text-2xl font-semibold tracking-widest">
          ONE CREW FOR DIFFERENT VIEWS
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-900 duration-200">
            BUY NOW
          </button>

          <button className="px-8 py-3 bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-900 duration-200">
            Button label
          </button>
        </div>
      </div>
    </section>
  );
}

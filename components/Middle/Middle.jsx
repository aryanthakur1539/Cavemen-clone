import React from "react";

export default function Middle() {
  const items = [
    {
      img: "truck.webp",
      title: "FREE SHIPPING",
      text: "Pair text with an image to highlight your chosen product, collection, or blog post. Add details about availability, style, or a review.",
    },
    {
      img: "5.webp",
      title: "SAFE PURCHASES",
      text: "Pair text with an image to highlight your chosen product, collection, or blog post. Add details about availability, style, or a review.",
    },
    {
      img: "6.webp",
      title: "PRODUCT QUALITY",
      text: "Pair text with an image to highlight your chosen product, collection, or blog post. Add details about availability, style, or a review.",
    },
    {
      img: "7.webp",
      title: "ASSISTANCE AND SUPPORT",
      text: "Pair text with an image to highlight your chosen product, collection, or blog post. Add details about availability, style, or a review.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8] bg-repeat">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center tracking-widest mb-12 text-black">
        MULTICOLUMN
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center px-4"
          >
            <img
              src={item.img}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
              alt={item.title}
            />

            <h3 className="mt-4 text-lg sm:text-xl font-black tracking-widest text-black">
              {item.title}
            </h3>

            <p className="text-[#4d4d4d] mt-3 leading-relaxed text-sm sm:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <button
          disabled
          className=" px-8 py-3 bg-[#4a4a4a] text-white shadow-md  hover:bg-black duration-300 disabled:bg-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed text-sm sm:text-base tracking-wide"
        >
          Button label
        </button>
      </div>
    </section>
  );
}

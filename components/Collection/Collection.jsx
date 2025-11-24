import Image from "next/image";

export default function Collection() {
  const products = [
    {
      id: 1,
      image: "1-2.webp",
      discount: "-30%",
      title: "NITRO ALTERNATOR - MEN'S SNOWBOARD 2024/25",
      oldPrice: "€589,90 EUR",
      price: "€412,93 EUR",
    },
    {
      id: 2,
      image: "1-3.webp",
      discount: "-30%",
      title: "NITRO OPTISYM - MEN'S SNOWBOARD 2024/25",
      oldPrice: "€549,90 EUR",
      price: "€384,93 EUR",
    },
    {
      id: 3,
      image: "1-4.webp",
      discount: "-30%",
      title: "NITRO LECTRA - WOMEN'S SNOWBOARD 2024/25",
      oldPrice: "€399,90 EUR",
      price: "€279,93 EUR",
    },
    {
      id: 4,
      image: "1-5.webp",
      discount: "-30%",
      title: "MONS ROYALE MCCLOUD BEANIE - UNISEX BLACK HAT",
      oldPrice: "€35,90 EUR",
      price: "€24,90 EUR",
    },
  ];

  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-10 py-10 font-sans w-full">
      {/* HEADINGS */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center md:text-left">
        FEATURED COLLECTION
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">
        OFFERS
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {/* IMAGE */}
            <div className="relative w-full h-40 sm:h-52 md:h-60 mb-4 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-full"
              />
            </div>

            {/* DETAILS */}
            <span className="bg-pink-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded">
              {item.discount}
            </span>

            <p className="font-semibold mt-2 text-xs sm:text-sm leading-tight min-h-32px">
              {item.title}
            </p>

            <p className="text-gray-500 line-through text-[11px] sm:text-sm">
              {item.oldPrice}
            </p>
            <p className="font-bold text-sm sm:text-base">{item.price}</p>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 border border-black rounded-full text-sm sm:text-base hover:bg-black hover:text-white transition">
          View all
        </button>
      </div>
    </div>
  );
}

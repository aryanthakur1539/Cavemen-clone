import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-[18px] font-semibold tracking-wide uppercase mb-6">
            Account
          </h3>
          <ul className="space-y-4 text-[16px] text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Sign in
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                My orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cart
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold tracking-wide uppercase mb-6">
            Agency
          </h3>
          <ul className="space-y-4 text-[16px] text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Who we are
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our brands
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Are you a reseller?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold tracking-wide uppercase mb-6">
            Help
          </h3>
          <ul className="space-y-4 text-[16px] text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                How to place an order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery and return times
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payments
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold tracking-wide uppercase mb-6">
            Contacts
          </h3>

          <ul className="space-y-4 text-[16px] text-gray-300">
            <li>
              <a href="#" className="underline">
                (+39) 327 937 9370
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Tik Tok
              </a>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <p>
              <a href="#" className="underline">
                Read our
              </a>
            </p>
            <p>
              <a href="#" className="underline">
                21 reviews on Trustpilot
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-16"></div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div>
          <h3 className="uppercase text-[14px] tracking-wide mb-3">Language</h3>

          <select className="border border-gray-600 bg-transparent text-gray-300 px-4 py-3 rounded-md w-40">
            <option className="text-black">English</option>
            <option className="text-black">Italian</option>
          </select>
        </div>

        <p className="text-gray-400 text-[14px] mt-10 leading-relaxed">
          © 2025, Caveman Outdoor Shop Powered by Shopify · Privacy policy ·
          Refund policy · Terms of service · Shipping policy · Contact
          information · Legal notice
        </p>
      </div>
    </footer>
  );
}

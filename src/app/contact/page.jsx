import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 mt-18">
      <form
        action="https://formsubmit.co/aryanthakur1539@gmail.com"
        method="POST"
        className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Contact Me
        </h2>

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
          type="password"
          name="password"
          placeholder="Your Password"
          required
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <textarea
          name="body"
          placeholder="Message"
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none text-black"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

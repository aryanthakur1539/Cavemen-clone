"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Contact() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    router.push("/");
  };

  const isDisabled =
    !form.name.trim() ||
    !form.email.trim() ||
    !form.subject.trim() ||
    !form.message.trim();

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
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
          title="Please enter a valid email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="hidden"
          name="_redirect"
          value="https://cavemen-clone.vercel.app/"
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />

        <textarea
          name="body"
          placeholder="Message"
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none text-black"
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />


        <button
          onClick={handleSubmit}
          disabled={isDisabled}
          className="w-full py-3 rounded-lg font-semibold transition bg-amber-500 text-white hover:bg-amber-600"
        >
          {isDisabled ? "Disabled" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

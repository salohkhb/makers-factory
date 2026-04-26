"use client";

import { useState } from "react";
import Image from "next/image";

export default function TshirtPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    quantity: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await fetch("https://script.google.com/macros/s/AKfycbzaS-MmcdJa0P4UzRsuqyxD5ZKCpX10M1oHkl-cr7qjlU16abCH18KezKvpm9xWOsaZ/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(form),
    });

    setSuccess(true);
    setLoading(false);

    setForm({
      name: "",
      phone: "",
      type: "",
      quantity: "",
      details: "",
    });
  };

  return (
    <main className="bg-white text-[#080C34]">

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          T-Shirts Printing & Embroidery
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Create your brand with premium printing and embroidery.
          High quality, clean finition, and professional result.
        </p>
      </section>

      {/* GALLERY */}
      <section className="grid md:grid-cols-3 gap-4 px-6 max-w-6xl mx-auto mb-16">
        {[
          "/products/tshirt1.jpg",
          "/products/tshirt2.jpg",
          "/products/tshirt3.jpg",
        ].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="tshirt"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        ))}
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">
          What we offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="font-bold">Embroidery</h3>
            <p className="opacity-80">Clean and premium stitching</p>
          </div>

          <div>
            <h3 className="font-bold">Printing</h3>
            <p className="opacity-80">Puff, screen & DTF printing</p>
          </div>

          <div>
            <h3 className="font-bold">Private Label</h3>
            <p className="opacity-80">Your brand, your identity</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 px-6 flex justify-center">
        <div className="w-full max-w-xl bg-gray-50 p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-bold mb-4 text-center">
            Start Your Project
          </h2>

          {success && (
            <p className="text-green-600 text-center mb-4">
              ✅ Request sent successfully
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border p-3 rounded"
            />

            <input
              name="phone"
              placeholder="WhatsApp Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="border p-3 rounded"
            />

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
              className="border p-3 rounded"
            >
              <option value="">Type</option>
              <option>Embroidery</option>
              <option>Printing</option>
              <option>Both</option>
            </select>

            <select
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              required
              className="border p-3 rounded"
            >
              <option value="">Quantity</option>
              <option>10</option>
              <option>30</option>
              <option>50+</option>
            </select>

            <textarea
              name="details"
              placeholder="Describe your idea"
              value={form.details}
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#080C34] text-white py-3 rounded-lg"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}
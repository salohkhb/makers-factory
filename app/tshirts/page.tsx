"use client";

import { useState } from "react";
import Image from "next/image";

export default function TshirtPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    details: "",
  });

  const [options, setOptions] = useState({
    logo: false,
    design: false,
    logoType: "",
    designType: "",
    quantity: 10,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const basePrice = 900;

  const calculatePrice = () => {
    let price = basePrice;

    if (options.logo) {
      if (options.logoType === "embroidery") price += 300;
      if (options.logoType === "print") price += 150;
    }

    if (options.design) {
      if (options.designType === "embroidery") price += 400;
      if (options.designType === "print") price += 200;
    }

    if (options.quantity >= 50) price *= 0.85;
    else if (options.quantity >= 30) price *= 0.9;

    return Math.round(price);
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await fetch("https://script.google.com/macros/s/AKfycbzaS-MmcdJa0P4UzRsuqyxD5ZKCpX10M1oHkl-cr7qjlU16abCH18KezKvpm9xWOsaZ/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        details: form.details,

        logo: options.logo,
        design: options.design,
        designType: options.designType,

        quantity: options.quantity,
        price: calculatePrice(),
        total: calculatePrice() * options.quantity,
      })
    });

    setSuccess(true);
    setLoading(false);
  };

  return (
    <main className="bg-white text-[#080C34]">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Premium T-Shirts
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Printing & embroidery for brands. Clean finition, premium quality.
        </p>
      </section>

      {/* GALLERY */}
      <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {["tshirt1.jpg","tshirt2.jpg","tshirt3.jpg"].map((img, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow hover:scale-105 transition">
            <Image
              src={`/products/${img}`}
              width={400}
              height={400}
              alt="tshirt"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </section>

      

      {/* CONFIGURATOR */}
      <section className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-3xl shadow-xl border">

        <h2 className="text-2xl font-bold mb-8 text-center">
          Customize Your T-Shirt
        </h2>

        {/* LOGO */}
        <div className="mb-6">
          <label className="flex justify-between items-center">
            <span className="font-medium">Add Logo</span>
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#080C34]"
              onChange={(e) =>
                setOptions({ ...options, logo: e.target.checked })
              }
            />
          </label>

          {options.logo && (
            <select
              className="w-full mt-3 p-3 border rounded-xl focus:ring-2 focus:ring-[#080C34]"
              onChange={(e) =>
                setOptions({ ...options, logoType: e.target.value })
              }
            >
              <option value="">Logo Type</option>
              <option value="print">Print</option>
              <option value="embroidery">Embroidery</option>
            </select>
          )}
        </div>

        {/* DESIGN */}
        <div className="mb-6">
          <label className="flex justify-between items-center">
            <span className="font-medium">Add Design</span>
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#080C34]"
              onChange={(e) =>
                setOptions({ ...options, design: e.target.checked })
              }
            />
          </label>

          {options.design && (
            <select
              className="w-full mt-3 p-3 border rounded-xl focus:ring-2 focus:ring-[#080C34]"
              onChange={(e) =>
                setOptions({ ...options, designType: e.target.value })
              }
            >
              <option value="">Design Type</option>
              <option value="print">Print</option>
              <option value="embroidery">Embroidery</option>
            </select>
          )}
        </div>

        {/* QUANTITY */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Quantity</label>
          <input
            type="number"
            value={options.quantity}
            min={1}
            onChange={(e) =>
              setOptions({ ...options, quantity: Number(e.target.value) })
            }
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#080C34]"
          />
        </div>

        {/* PRICE CARD */}
        <div className="bg-[#080C34] text-white p-6 rounded-2xl text-center">
          <p className="opacity-80 text-sm">Price per piece</p>
          <p className="text-3xl font-bold">
            {calculatePrice()} DA
          </p>

          <p className="mt-3 opacity-80 text-sm">Total</p>
          <p className="text-2xl font-semibold">
            {calculatePrice() * options.quantity} DA
          </p>
        </div>

      </section>

      {/* URGENCY */}
      <section className="bg-[#080C34] text-white text-center py-10 mt-16">
        <h2 className="text-xl font-bold">
          ⚠️ Limited Production Slots Available
        </h2>
        <p className="opacity-80">
          We only accept a few projects each month
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-xl mx-auto p-8 mt-10">

        {success && (
          <p className="text-green-600 text-center mb-4">
            ✅ Request sent successfully
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="border p-3 rounded-xl focus:ring-2 focus:ring-[#080C34]"
          />

          <input
            name="phone"
            placeholder="WhatsApp Number"
            onChange={handleChange}
            required
            className="border p-3 rounded-xl focus:ring-2 focus:ring-[#080C34]"
          />

          <textarea
            name="details"
            placeholder="Describe your idea"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <button className="bg-[#080C34] text-white py-3 rounded-xl hover:opacity-90 transition">
            {loading ? "Sending..." : "Start Your Project"}
          </button>

        </form>
      </section>

      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/213662250526?text=Salam%20I%20want%20to%20order%20t-shirts"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

    </main>
  );
}
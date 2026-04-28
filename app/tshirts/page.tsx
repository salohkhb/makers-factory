"use client";

import { useState } from "react";
import Image from "next/image";

export default function TshirtPage() {
  // ================= FORM =================
  const [form, setForm] = useState({
    name: "",
    phone: "",
    details: "",
  });

  // ================= OPTIONS =================
  const [options, setOptions] = useState({
    logo: false,
    design: false,
    logoType: "",
    designType: "",
    quantity: 10,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ================= PRICING =================
  const basePrice = 800;

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

  // ================= HANDLERS =================
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
        ...form,
        ...options,
        price: calculatePrice(),
        total: calculatePrice() * options.quantity,
      }),
    });

    setSuccess(true);
    setLoading(false);
  };

  return (
    <main className="bg-white text-[#080C34]">

      {/* HERO */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">
          T-Shirts Printing & Embroidery
        </h1>
        <p className="opacity-70 mt-2">
          Create your brand with premium quality
        </p>
      </section>

      {/* GALLERY */}
      <section className="grid md:grid-cols-3 gap-4 px-6 max-w-6xl mx-auto">
        {["tshirt1.jpg","tshirt2.jpg","tshirt3.jpg"].map((img, i) => (
          <Image
            key={i}
            src={`/products/${img}`}
            width={400}
            height={400}
            alt="tshirt"
            className="rounded-xl"
          />
        ))}
      </section>


      {/* PRICING CONFIGURATOR */}
      <section className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl">

        <h2 className="text-xl font-bold mb-4">
          Customize Your T-Shirt
        </h2>

        {/* LOGO */}
        <label className="block">
          <input
            type="checkbox"
            onChange={(e) =>
              setOptions({ ...options, logo: e.target.checked })
            }
          />
          Add Logo
        </label>

        {options.logo && (
          <select
            className="border p-2 w-full mt-2"
            onChange={(e) =>
              setOptions({ ...options, logoType: e.target.value })
            }
          >
            <option>Logo Type</option>
            <option value="print">Print</option>
            <option value="embroidery">Embroidery</option>
          </select>
        )}

        {/* DESIGN */}
        <label className="block mt-4">
          <input
            type="checkbox"
            onChange={(e) =>
              setOptions({ ...options, design: e.target.checked })
            }
          />
          Add Design
        </label>

        {options.design && (
          <select
            className="border p-2 w-full mt-2"
            onChange={(e) =>
              setOptions({ ...options, designType: e.target.value })
            }
          >
            <option>Design Type</option>
            <option value="print">Print</option>
            <option value="embroidery">Embroidery</option>
          </select>
        )}

        {/* QUANTITY */}
        <input
          type="number"
          value={options.quantity}
          min={1}
          className="border p-2 w-full mt-4"
          onChange={(e) =>
            setOptions({ ...options, quantity: Number(e.target.value) })
          }
        />

        {/* PRICE */}
        <div className="mt-4 font-bold text-lg">
          Price: {calculatePrice()} DA / piece
        </div>

        <div className="font-bold text-xl">
          Total: {calculatePrice() * options.quantity} DA
        </div>

      </section>

      {/* URGENCY */}
      <section className="bg-[#080C34] text-white text-center py-6 mt-10">
        Limited production slots available
      </section>

      {/* FORM */}
      <section className="max-w-xl mx-auto p-6">
        {success && <p className="text-green-600">Sent successfully</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="name" placeholder="Name" onChange={handleChange} required className="border p-2"/>
          <input name="phone" placeholder="Phone" onChange={handleChange} required className="border p-2"/>
          <textarea name="details" placeholder="Details" onChange={handleChange} className="border p-2"/>

          <button className="bg-[#080C34] text-white p-3">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/213662250526"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full"
      >
        💬
      </a>

    </main>
  );
}
"use client";

import { useState } from "react";

export default function StartPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    budget: "",
    design: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("YOUR_SCRIPT_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setSuccess(true);

      // Reset form
      setForm({
        name: "",
        phone: "",
        product: "",
        quantity: "",
        budget: "",
        design: "",
        description: "",
      });
    } catch (error) {
      alert("❌ Error sending form. Check connection or script.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gray-50 text-[#080C34]">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Start Your Clothing Brand
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Fill this form and we will guide you step by step
        </p>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            ✅ Your request has been sent. We will contact you soon.
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#080C34]"
          />

          <input
            name="phone"
            placeholder="WhatsApp Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#080C34]"
          />

          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          >
            <option value="">Select Product</option>
            <option>T-shirt</option>
            <option>Hoodie</option>
            <option>Tracksuit</option>
            <option>Linen</option>
            <option>Abaya</option>
            <option>Uniforms</option>
          </select>

          <select
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          >
            <option value="">Quantity</option>
            <option>30</option>
            <option>50</option>
            <option>100+</option>
          </select>

          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          >
            <option value="">Budget</option>
            <option>Less than 50k DA</option>
            <option>50k - 100k DA</option>
            <option>100k+ DA</option>
          </select>

          <select
            name="design"
            value={form.design}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          >
            <option value="">Do you have a design?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <textarea
            name="description"
            placeholder="Describe your idea"
            value={form.description}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#080C34] text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Submit & Start"}
          </button>
        </form>
      </div>
    </main>
  );
}
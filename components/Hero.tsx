export default function Hero({ title, subtitle }: any) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">{subtitle}</p>

      <div className="flex gap-4">
        <a
          href="https://wa.me/213662250526?text=Hello%20I%20want%20to%20start%20my%20brand"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Start Now
        </a>
        <a href="#contact" className="border px-6 py-3 rounded-xl">
          Contact
        </a>
      </div>
    </section>
  );
}
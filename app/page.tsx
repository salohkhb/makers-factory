import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <header className="w-full flex justify-between items-center px-6 py-0 border-b">

        {/* LOGO */}
        <div className="flex items-center gap-1">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={40}
          />
          <span className="font-semibold text-lg">
            Makers Factory
          </span>
        </div>

        {/* CTA */}
        <a href="#contact" className="bg-black text-white px-4 py-2 rounded-lg">
          Contact
        </a>

      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Launch Your Clothing Brand With Us
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          اطلق ماركة الملابس تاعك معانا
        </p>

        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Private label manufacturing with low MOQ and premium quality
        </p>
        <p className="text-sm text-gray-500 mb-6">
          تصنيع خاص بكمية قليلة وجودة عالية
        </p>

        <div className="flex gap-4">
          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-xl">
            Start Your Brand
          </a>

          <a href="#contact" className="border border-black px-6 py-3 rounded-xl">
            Contact Us
          </a>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          What We Offer
        </h2>
        <p className="text-sm text-gray-500 text-center mb-10">
          الخدمات اللي نقدموها
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="font-semibold text-xl">Streetwear Production</h3>
            <p className="text-sm text-gray-500 mb-1">تصنيع ستريتوير</p>
            <p className="text-gray-600">
              Hoodies, T-shirts, joggers, tracksuits
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Modest Wear</h3>
            <p className="text-sm text-gray-500 mb-1">ملابس محتشمة</p>
            <p className="text-gray-600">
              Abayas, dresses, hijab sets
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Linen Collections</h3>
            <p className="text-sm text-gray-500 mb-1">أطقم لينن</p>
            <p className="text-gray-600">
              Summer sets, breathable premium fabrics
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Custom Branding</h3>
            <p className="text-sm text-gray-500 mb-1">تخصيص البراند</p>
            <p className="text-gray-600">
              Printing, embroidery, labels, packaging
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Custom Uniforms & Aprons</h3>
            <p className="text-sm text-gray-500 mb-1">أزياء عمل و مآزر</p>
            <p className="text-gray-600">
              Professional workwear for cafés, restaurants, and businesses
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Our Products
        </h2>
        <p className="text-sm text-gray-500 text-center mb-10">
          منتجاتنا
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[
            "/products/hoodie.jpg",
            "/products/tshirt.jpg",
            "/products/linen.jpg",
            "/products/abaya.jpg",
            "/products/tracksuit.jpg",
            "/products/apron.jpg",
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <Image
                src={src}
                alt="product"
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          How It Works
        </h2>
        <p className="text-sm text-gray-500 text-center mb-10">
          كيفاش نخدمو
        </p>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="font-semibold">1. Share Idea</h3>
            <p className="text-sm text-gray-500">عطينا الفكرة</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Development</h3>
            <p className="text-sm text-gray-500">نحضرو العينة</p>
          </div>
          <div>
            <h3 className="font-semibold">3. Production</h3>
            <p className="text-sm text-gray-500">نصنعو المنتجات</p>
          </div>
          <div>
            <h3 className="font-semibold">4. Delivery</h3>
            <p className="text-sm text-gray-500">توصلك واجدة للبيع</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Launch Your Brand?
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          جاهز تبدا ماركتك؟
        </p>

        <a href="#contact" className="bg-black text-white px-8 py-4 rounded-xl">
          Start Now
        </a>
      </section>
      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Contact Us
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          تواصل معنا
        </p>

        <p className="text-gray-600 mb-8">
          Ready to start your clothing brand or need more information?
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/213662250526"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            WhatsApp Us
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/makers.label/"
            target="_blank"
            className="border border-black px-6 py-3 rounded-xl"
          >
            Instagram
          </a>

          {/* Email */}
          <a
            href="mailto:makerslabel01@gmail.com"
            className="underline text-gray-700"
          >
            makerslabel01@gmail.com
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t">
        <p className="text-gray-500">
          Makers Factory © 2026
        </p>
      </footer>

    </main>
  );
}
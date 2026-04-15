import Image from "next/image";

export default function Gallery() {
  const images = [
    "/products/hoodie.jpg",
    "/products/tshirt.jpg",
    "/products/linen.jpg",
    "/products/abaya.jpg",
    "/products/tracksuit.jpg",
    "/products/apron.jpg",
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="product"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}
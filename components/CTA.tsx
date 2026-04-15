export default function CTA({ text }: any) {
  return (
    <section id="contact" className="py-20 text-center bg-black text-white">
      <h2 className="text-3xl font-bold mb-4">{text}</h2>

      <a
        href="https://wa.me/213662250526?text=Hello%20I%20want%20to%20start%20my%20brand"
        className="bg-white text-black px-8 py-4 rounded-xl"
      >
        WhatsApp Us
      </a>
    </section>
  );
}
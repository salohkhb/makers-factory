export default function Packages({ data }: any) {
  return (
    <section className="py-20 px-6 bg-gray-50 text-blue">
      <h2 className="text-3xl font-bold text-center mb-10">
        {data.title}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.items.map((p: any, i: number) => (
          <div key={i} className="p-6 border rounded-2xl bg-white shadow">
            <h3 className="font-bold text-xl mb-2">{p.name}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <ul className="text-sm mb-4">
              {p.features.map((f: string, j: number) => (
                <li key={j}>✔ {f}</li>
              ))}
            </ul>
            <a
              href="https://wa.me/213662250526?text=Hello%20I%20want%20to%20start%20my%20brand"
              className="block text-center bg-black text-white py-2 rounded-xl"
            >
              Start
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
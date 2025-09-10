export default function Services() {
  const services = [
    "Safari Adventures",
    "Beach Holidays",
    "Mountain Treks",
    "Cultural Tours",
    "Luxury Travel",
    "Budget Safaris",
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/serengeti.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-lg bg-white/10 p-6 shadow hover:bg-white/20 transition"
            >
              <h3 className="text-lg font-semibold">{s}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

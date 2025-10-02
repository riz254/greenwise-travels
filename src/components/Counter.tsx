// components/StatsSection.tsx
import Image from "next/image";

export default function Counter() {
  const stats = [
    { value: "200+", label: "Travels" },
    { value: "500+", label: "Clients" },
    { value: "30", label: "Employees" },
    { value: "20", label: "Countries" },
  ];

  return (
    <section
      className="relative py-24 h-60 center bg-fixed bg-center bg-cover"
      style={{ padding: "50px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Visit-Rwanda-Crater-Lake-Volcanoes-e1533416621808-1920x1267.jpg" // put your image inside /public/images
          alt="Background"
          fill
          className="object-cover center"
          priority
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((stat, i) => (
            <div key={i}>
              <h2 className="text-5xl font-bold drop-shadow-lg">
                {stat.value}
              </h2>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

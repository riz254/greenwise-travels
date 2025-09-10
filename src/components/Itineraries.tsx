export default function Itineraries() {
  const itineraries = [
    {
      img: "/images/safari.jpg",
      title: "7-Day Kenya Safari",
      desc: "Explore the Maasai Mara and Amboseli.",
      price: "$1,200",
    },
    {
      img: "/images/beach.jpg",
      title: "5-Day Zanzibar Holiday",
      desc: "Relax on white sandy beaches.",
      price: "$800",
    },
    {
      img: "/images/mountains.jpg",
      title: "10-Day Kilimanjaro Trek",
      desc: "Conquer Africa’s tallest mountain.",
      price: "$2,000",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          Featured Itineraries
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {itineraries.map((i, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={i.img}
                alt={i.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-semibold text-xl">{i.title}</h3>
                <p className="mt-2 text-gray-600">{i.desc}</p>
                <p className="mt-4 font-bold text-green-600">{i.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

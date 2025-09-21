export default function Itineraries() {
  const itineraries = [
    {
      img: "/images/images/safari.jpg",
      title: "7-Day Kenya Safari",
      desc: "Explore the Maasai Mara and Amboseli.",
      price: "$1,200",
    },
    {
      img: "/images/images/beach.jpg",
      title: "5-Day Zanzibar Holiday",
      desc: "Relax on white sandy beaches.",
      price: "$800",
    },
    {
      img: "/images/images/mountains.jpg",
      title: "10-Day Kilimanjaro Trek",
      desc: "Conquer Africa’s tallest mountain.",
      price: "$2,000",
    },
    {
      img: "/images/images/mountains.jpg",
      title: "10-Day Kilimanjaro Trek",
      desc: "Conquer Africa’s tallest mountain.",
      price: "$2,000",
    },
    {
      img: "/images/images/mountains.jpg",
      title: "10-Day Kilimanjaro Trek",
      desc: "Conquer Africa’s tallest mountain.",
      price: "$2,000",
    },
    {
      img: "/images/images/mountains.jpg",
      title: "10-Day Kilimanjaro Trek",
      desc: "Conquer Africa’s tallest mountain.",
      price: "$2,000",
    },
  ];

  return (
    <section className="">
      <div
        className=" mt-24 mx-auto px-6 text-center "
        style={{ padding: "100px" }}
      >
        <h2 className="text-3xl mb-10 font-bold text-green-700">
          Featured Itineraries
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {itineraries.map((i, idx) => (
            <div
              key={idx}
              className="relative h-72 w-full overflow-hidden rounded-lg shadow-lg group"
            >
              {/* Background Image */}
              <img
                src={i.img}
                alt={i.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 p-6 text-left text-white">
                <h3 className="text-xl font-semibold">{i.title}</h3>
                <p className="mt-1 text-sm">{i.desc}</p>
                <p className="mt-3 font-bold text-green-300">{i.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

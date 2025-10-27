"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Mountain } from "lucide-react"; // icons ✨

const itineraries = [
  {
    title: "Bale Mt National Park",
    location: "Ethiopia",
    image: "/images/images/baleMountains.jpg",
    duration: "5 Days",
    description:
      "Home to stunning highlands, rare Ethiopian wolves, and breathtaking hiking trails.",
    difficulty: "Hard",

    link: "EthiopiaBaleMNP.html",
  },
  {
    title: "Ethiopian History Tour",
    description:
      "Journey from Lalibela’s rock-hewn churches to Gondar’s royal castles and Axum’s ancient obelisks.",
    image: "/images/images/ETH_Lalibela_JPEG_Hero_ETH_Lalibela-1.jpg",
    duration: "9 Days",
    difficulty: "Easy",
    location: "Lallibela",

    link: "EthiopiaHistoryTrip.html",
  },
  {
    title: "3 Days in Ethiopia ",
    description:
      "Experience Ethiopia's rich culture, historic sites, and vibrant markets in a short trip.",
    image: "/images/images/Ethiopia.png",
    duration: "3 Days",
    difficulty: "Easy",
    location: "Ethiopia",

    link: "EthiopiaHistoryTrip.html",
  },

  {
    title: "Migration Safari",
    image: "/images/images/maraMigration.jpg",
    location: "Masai Mara",
    duration: "13 Days ",
    difficulty: "Medium",
    description: "Experience Nature’s grandest migration",
  },
];

export default function ItinerarySection() {
  return (
    <section className="relative !py-20 bg-gradient-to-b from-green-50 to-green-100/30 overflow-hidden">
      <div className="container !mx-auto !px-4">
        <h2 className="text-center text-5xl md:!text-5xl font-extrabold text-lime-950 !mb-14">
          Featured Itineraries
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {itineraries.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              // transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative  rounded-xl overflow-auto  shadow-sm  shadow-green-950 bg-green-100 group cursor-pointer"
            >
              {/* Image with overlay */}
              <div className="relative h-96">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent  "></div>

                {/* Floating Info Icons */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                  <span className="flex items-center gap-1 ">
                    <MapPin size={16} /> {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mountain size={16} /> {item.difficulty}
                  </span>
                </div>
              </div>

              {/* Text Section */}
              <div className="!m-5 flex flex-col justify-between  h-48">
                <div>
                  <h1 className="text-lg !font-semibold text-gray-700 !mb-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 !text-lg leading-relaxed ">
                    {item.description}
                  </p>
                  <button className="!mt-4 self-start bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold !px-5 !py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

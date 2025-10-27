"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Mountain } from "lucide-react"; // icons ✨

const itineraries = [
  {
    title: "Uganda Flying Safari",
    image: "/images/images/UgandaFlying.png",
    location: "Uganda",
    duration: "9 Days",
    difficulty: "Easy",
    price: "$520.00",
    description:
      "Soar across Uganda’s skies on this unforgettable flying safari. Explore breathtaking parks, wildlife, and scenic landscapes.",
  },
  {
    title: "Gorilla Trek Safari",
    image:
      "/images/images/UgandaGorilla-or-Rwanda-which-country-is-better-for-safari-960x720.webp",
    location: "Bwindi",
    duration: "5 Days",
    difficulty: "Hard",
    price: "$520.00",
    description:
      "Embark on an extraordinary adventure trekking through Uganda’s lush rainforests in search of majestic mountain gorillas.",
  },
  {
    title: "Uganda Wildlife Safari",
    image: "/images/images/queen-elizabeth-uganda-1024x681.jpg",
    location: "Queen Elizabeth National Park",
    duration: "13 Days",
    difficulty: "Hard",
    price: "$520.00",
    description:
      "Experience Uganda’s diverse wildlife and landscapes on this extended journey through its premier national parks.",
  },
  {
    title: "Rwenzori Mountains Trek",
    image: "/images/images/Ruwenzori-Mountains-National-Park.jpg",
    location: "Rwenzori Mountains",
    duration: "10 Days",
    date: "Nov 10 - Nov 20",
    price: "$640.00",
    difficulty: "Hard",
    description:
      "Challenge yourself with an exhilarating trek through the mystical Rwenzori Mountains .",
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
              <div className="!m-5 flex flex-col justify-between  h-52">
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

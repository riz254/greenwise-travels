"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Explore the Eiffel Tower",
    description:
      "Visit Paris and marvel at the iconic Eiffel Tower. Enjoy breathtaking views of the city from the top and experience the romantic atmosphere of this beautiful destination.",
    image: "/images/images/eiffelTower.jpg",
  },
  {
    title: "Relax in Bali's Beaches",
    description:
      "Unwind on the stunning beaches of Bali, where you can enjoy sunbathing, surfing, and exploring vibrant beach clubs and local markets.",
    image: "/images/images/BaliIndonesia.jpg",
  },
  {
    title: "Experience Times Square",
    description:
      "Visit New York City and soak in the vibrant energy of Times Square, known for its bright lights, theaters, and bustling atmosphere.",
    image: "/images/images/timesSquare.png",
  },
  {
    title: "Discover Ancient Rome",
    description:
      "Explore the rich history of Rome by visiting the Colosseum, Vatican City, and the beautiful streets filled with art and culture.",
    image: "/images/images/Rome.jpg",
  },
  {
    title: "Experience Tokyo's Culture",
    description:
      "Immerse yourself in the vibrant culture of Tokyo, from traditional temples to futuristic technology and delicious cuisine.",
    image: "/images/images/tokyoJapan.jpg",
  },
  {
    title: "Hike to Machu Picchu",
    description:
      "Trek the Inca Trail in Peru to reach the iconic Machu Picchu, immersing yourself in breathtaking views and ancient history.",
    image: "/images/images/Machu-Picchu-terrace-864x1080.jpg.png",
  },
];

export default function WhatToDo() {
  const [hovered, setHovered] = useState<any>(null);

  return (
    <section className="relative !py-20 bg-gradient-to-b from-green-50 to-green-100/30 overflow-hidden">
      <div className="container !mx-auto !px-4">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-green-700 !mb-14">
          WHAT TO DO
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background Image */}
              <div className="relative h-[65vh] w-full shadow-2xl shadow-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/40 to-black/80"></div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 !p-10 text-white text-center bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="!text-3xl md:text-xl font-bold">{item.title}</h3>
              </div>

              {/* Hover Popup */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm text-white !p-6 flex flex-col justify-center items-center text-center rounded-3xl"
                  >
                    <h3 className="!text-3xl font-bold ">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-100 !mb-4">
                      {item.description}
                    </p>
                    <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold !px-6 !py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                      Explore
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

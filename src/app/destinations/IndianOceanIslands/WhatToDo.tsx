"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Traditional Dhoni Sailing",
    description: `	Experience the charm of sailing on a traditional dhoni boat in the turquoise waters of
								the Maldives, enjoying breathtaking views and local marine life.`,
    image: "/images/images/maldivesBoat.jpg",
  },
  {
    title: "Explore Spice Plantations",
    description: `Visit the famous spice plantations in Zanzibar and learn about the
								cultivation and history of spices like cloves, nutmeg, and vanilla.`,
    image: "/images/images/zanzibarSpices.jpg",
  },
  {
    title: "Cultural Festivals",
    description: `Participate in vibrant cultural festivals like the Sauti za Busara
								music festival in Zanzibar or the Sega music and dance in Mauritius.`,
    image: "/images/images/zanzibarFest.jpg",
  },
  {
    title: "Visit the Unique Tsingy Forests",
    description: `Discover the extraordinary limestone formations of the Tsingy de
								Bemaraha in Madagascar, a UNESCO World Heritage site filled with unique wildlife and
								hiking opportunities.`,

    image: "/images/images/le-grand-tsingy-tsingyMadagascar.jpg",
  },
  {
    title: "Lemur Watching",
    description: `Join guided tours in Madagascar to observe lemurs in their natural
								habitat, including the famous ring-tailed lemurs and sifakas.`,
    image: "/images/images/madagascarLemurs.jpg",
  },
  {
    title: "Kite Surfing and Windsurfing",
    description: `Enjoy thrilling water sports like kite surfing and windsurfing in the
								strong winds and warm waters of Mauritius and the Seychelles. `,
    image: "/images/images/sports-nautiques-tanzanie-planche-a-voile.jpg",
  },
];

export default function WhatToDo() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative !py-20 bg-gradient-to-b from-green-50 to-green-100/30 overflow-hidden">
      <div className="container !mx-auto !px-4">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-lime-950 !mb-14">
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

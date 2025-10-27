"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Mountain Hiking",
    description:
      "Home to the iconic Mount Kilimanjaro, Africa’s highest peak — Tanzania offers both challenging climbs and breathtaking views.",
    image: "/images/images/climb-kilimanjaro-how-many-days-1536x1152-1.jpg",
  },
  {
    title: "Wildlife Safaris",
    description:
      "From spotting lions, elephants, and leopards, to witnessing the Great Migration — Tanzania’s wildlife ensures every game drive is an unforgettable adventure.",
    image: "/images/images/ngorongoro-plains.jpg",
  },
  {
    title: "Relax and Unwind",
    description:
      "Relax by the ocean, snorkel coral reefs, or explore the vibrant local culture — Tanzania’s coastline and Zanzibar’s islands are an ideal getaway.",
    image: "/images/images/kenya-diani-beach.jpg",
  },
  {
    title: "Chimpanzee Trekking",
    description:
      "Encounter chimpanzees in their natural forest habitats — a once-in-a-lifetime experience surrounded by Tanzania’s untouched wilderness.",
    image: "/images/images/chimpanzees-meet-our-ancestors-panel-d.jpg",
  },
  {
    title: "Water Sports & Diving",
    description:
      "Dive into the Indian Ocean to explore coral reefs, swim with dolphins, or go kite surfing in Zanzibar’s turquoise waters.",
    image: "/images/images/sports-nautiques-tanzanie-planche-a-voile.jpg",
  },
  {
    title: "Cultural Experiences",
    description:
      "Immerse yourself in Tanzania’s rich heritage — join Maasai ceremonies and learn about the traditions that shape local life.",
    image: "/images/images/P1060535.jpg",
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

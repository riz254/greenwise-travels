"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Boat Safaris",
    description:
      "Explore Rwanda's Akagera National Park from the water with a serene boat safari. Spot hippos, crocodiles, and a variety of bird species while cruising on Lake Ihema.",
    image: "/images/images/Akagera-Boat-Trips-300x200.jpg",
  },
  {
    title: "Explore Musanze Caves",
    description:
      "Step into history with a visit to Musanze Caves, a natural formation that spans 2 kilometers, offering a glimpse into Rwanda's volcanic past and cultural heritage.",
    image: "/images/images/Musanze-Caves-600x450.jpg",
  },
  {
    title: "Cycling Adventures",
    description:
      "Take part in a cycling tour through Rwanda's Thousand Hills. Whether along the Congo Nile Trail or through local villages, cycling offers a unique way to experience the country's stunning landscapes.",
    image: "/images/images/CONGO-NILE-TRAIL-1-768x512.png",
  },
  {
    title: "Tea Plantation Tours",
    description:
      "Visit Rwanda’s picturesque tea plantations, such as Gisakura, and learn about the tea-making process while enjoying sweeping views of the surrounding countryside.",
    image: "/images/images/gisakura-tea-plantation.png",
  },
  {
    title: "Golden Monkey Tracking",
    description:
      "Trek through Volcanoes National Park to encounter the rare and playful golden monkeys, an endangered species that inhabits the bamboo forests of Rwanda.",
    image:
      "/images/images/Visit-Rwanda-Crater-Lake-Volcanoes-e1533416621808-1920x1267.jpg",
  },
  {
    title: "Cultural Heritage",
    description:
      "Dive into Rwanda’s rich history by visiting cultural landmarks like the King's Palace Museum and local artisan markets, where you can learn about traditional crafts and Rwanda's royal past.",
    image: "/images/images/king-palace-museum.png",
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Wildlife Safaris",
    description:
      "From spotting Ethiopian wolves in the Bale Mountains to exploring the Simien Mountains, Ethiopia offers unique wildlife encounters in stunning landscapes.",
    image: "/images/images/Ethiopian Wolf Field Project.jpeg",
    link: "contact.html",
  },
  {
    title: "Waterfalls and Hiking",
    description:
      "Experience the beauty of the Blue Nile Falls, Ethiopia’s iconic natural wonder, or hike through lush valleys and explore Ethiopia's diverse landscapes.",
    image: "/images/images/blue-nile-falls.jpg",
    link: "contact.html",
  },
  {
    title: "Cultural Immersion in Omo Valley",
    description:
      "Meet Ethiopia's diverse tribes in the Omo Valley, where ancient traditions and vibrant communities create a unique cultural experience.",
    image: "/images/images/omo-valley.jpg",
    link: "contact.html",
  },
  {
    title: "Explore Ancient Churches",
    description:
      "Visit the famous rock-hewn churches of Lalibela, where ancient religious architecture and spirituality captivate travelers from all over the world.",
    image: "/images/images/ETH_Lalibela_JPEG_Hero_ETH_Lalibela-1.jpg",
    link: "contact.html",
  },
  {
    title: "Explore the Danakil Depression",
    description:
      "Discover one of the hottest and most remote places on earth, the Danakil Depression, with its striking landscapes of salt flats, lava lakes, and sulfur springs.",
    image: "/images/images/danakil-depression.jpg",
    link: "contact.html",
  },
  {
    title: "Visit Historic Harar",
    description:
      "Walk through the ancient walled city of Harar, explore its vibrant streets, and witness the unique tradition of feeding wild hyenas at night.",
    image: "/images/images/harar.png",
    link: "contact.html",
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

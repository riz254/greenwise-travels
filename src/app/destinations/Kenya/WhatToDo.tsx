"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Twin Migration",
    description:
      "Experience Kenya's wonders as humpback whales traverse the ocean near the reef, and the great wildebeest migration unfolds in the Mara.",
    image: "/images/Heritage Migration Jpeg.jpg",
  },
  {
    title: "Animal Orphanage Visit",
    description:
      "Get up close and personal with giraffes at the Giraffe Centre and David Sheldrick Wildlife Trust to see orphaned elephants.",
    image: "/images/images/david-sheldrick-orphanage.jpg",
  },
  {
    title: "Wildlife Safaris",
    description:
      "Delight in a firsthand encounter with Kenya's diverse wildlife as you explore one of the country's 21 world-class National Parks.",
    image: "/images/safari.jpg",
  },
  {
    title: "Mountain Hiking & Rock Climbing",
    description:
      "Embark on a trek to the summit of Mount Kenya or Mount Longonot for a challenging and rewarding hiking experience.",
    image: "/images/mt-kenya.jpg",
  },
  {
    title: "Experience Culture",
    description:
      "Immerse yourself in local cultures by visiting traditional villages, interacting with indigenous communities, and witnessing traditional dances and ceremonies.",
    image: "/images/images/culture kenya.jpg",
  },
  {
    title: "Hot Air Balloon Safaris",
    description:
      "Experience the thrill of a hot air balloon safari over the expansive landscapes, providing a unique perspective on wildlife and scenery.",
    image: "/images/images/experience4-768x457.jpg",
  },
];

export default function WhatToDo() {
  const [hovered, setHovered] = useState<number | null>(null);

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

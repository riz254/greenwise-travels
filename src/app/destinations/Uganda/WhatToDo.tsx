"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Relax by Lake Bunyonyi",
    image: "/images/images/lake-bunyonyi-safaris-700x466.jpg",
    description:
      "Known for its tranquil waters and scenic beauty — enjoy canoeing, swimming, or simply relaxing by the lakeside surrounded by rolling hills.",
  },
  {
    title: "Ruwenzori Mountains Hike",
    image: "/images/images/Ruwenzori-Mountains-National-Park.jpg",
    description:
      "Trek the legendary Mountains of the Moon and explore breathtaking landscapes, diverse vegetation, and snow-capped peaks.",
  },
  {
    title: "Gorilla Trekking",
    image:
      "/images/images/UgandaGorilla-or-Rwanda-which-country-is-better-for-safari-960x720.webp",
    description:
      "Embark on a life-changing trek through the misty forests of Bwindi or Mgahinga to see the endangered mountain gorillas.",
  },
  {
    title: "Discover Ugandan Culture",
    image: "/images/images/UgandaCulture.jpeg",
    description:
      "Immerse yourself in Uganda’s vibrant traditions through music, dance, cuisine, and authentic community experiences.",
  },
  {
    title: "Explore The Source of The Nile",
    image: "/images/images/Sourcre-of-the-Nile-750x450.jpg",
    description:
      "Stand at the source of the Nile in Jinja and experience white-water rafting or serene boat rides on the world’s longest river.",
  },
  {
    title: "Bird Watching",
    image: "/images/images/Red-billed_hornbill.jpg",
    description:
      "Discover rare bird species like the ibis, speckled mousebird, and fire finch at Mgahinga Gorilla National Park’s lush wetlands.",
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

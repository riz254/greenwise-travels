"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const stays = [
  {
    name: "One & Only Nyungwe House",
    description:
      "Nestled in a tea plantation near Nyungwe Forest, this luxury lodge offers an immersive experience with chimpanzee trekking, nature walks, and five-star accommodations.",
    image: "/images/images/one-and-only-nyungwe.jpg",
  },
  {
    name: "Virunga Lodge",
    description:
      "Overlooking the Virunga Volcanoes, this eco-lodge offers breathtaking views, luxurious bandas, and easy access to Volcanoes National Park for gorilla trekking.",
    image: "/images/images/virunga-lodge.png",
  },
  {
    name: "Bisate Lodge",
    description:
      "Situated near Volcanoes National Park, Bisate Lodge combines sustainable luxury with local culture and provides a perfect base for gorilla trekking adventures.",
    image: "/images/images/wilderness-bisate-591723-original.png",
  },
  {
    name: "Magashi Camp",
    description:
      "Located in Akagera National Park, this intimate camp offers spectacular wildlife viewing with luxury tented accommodations overlooking Lake Rwanyakazinga.",
    image: "/images/images/Magashi-Campfire.jpg",
  },
  {
    name: "Sabyinyo Silverback Lodge",
    description:
      "Located at the foothills of the Virunga Volcanoes, this lodge provides luxurious accommodations and is the perfect gateway to gorilla tracking experiences.",
    image: "/images/images/Sabyinyo-silver-back-lodge3-1024x494.jpg",
  },
  {
    name: "Heaven Boutique Hotel",
    description:
      "Located in Kigali’s heart, Heaven Boutique Hotel offers beautiful views, a tranquil garden, and a fine dining experience with locally inspired cuisine — ideal for a city retreat.",
    image: "/images/images/HeavenBoutiqueHotel.jpeg",
  },
];

export default function WhereToStay() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % stays.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + stays.length) % stays.length);

  const current = stays[index];

  return (
    <section className="relative bg-green-50/30 !py-16 overflow-hidden rounded-xl">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-green-800 !mb-10">
        WHERE TO STAY
      </h2>

      {/* Slider Container */}
      <div className="relative w-full !mx-auto h-[75vh] rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl bg-green-100/20">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.image})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full !px-10 md:!px-20 text-white">
              {/* Left Text */}
              <div className="max-w-xl md:w-1/2">
                <motion.h2
                  key={current.name}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-4xl font-extrabold !mb-9"
                >
                  {current.name}
                </motion.h2>

                <motion.p
                  key={current.description}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl  drop-shadow-lg shadow-black !mb-10"
                >
                  {current.description}
                </motion.p>

                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-green-400 via-green-500
                   to-lime-400 
                   bg-[length:200%_200%] !text-emerald-950
                    text-lg font-black
                    rounded-2xl \
                    !px-8 !py-3 
                    shadow-md transition-all 
                    duration-500 ease-in-out
                     border-lime-200 border-1 
                     will-change-transform hover:scale-105
                      hover:shadow-lg 
                  hover:text-xl hover:shadow-lime-950
                   hover:bg-[position:right_center]"
                >
                  Contact Us
                </Link>
              </div>

              {/* Small Preview Cards */}
              <div className="hidden md:grid grid-cols-3 gap-4 w-1/2 justify-end">
                {[
                  stays[(index + 1) % stays.length],
                  stays[(index + 2) % stays.length],
                  stays[(index + 3) % stays.length],
                ].map((place, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="h-[50vh] w-60 rounded-xl overflow-hidden relative cursor-pointer grid"
                    onClick={() => setIndex((index + i + 1) % stays.length)}
                    style={{
                      backgroundImage: `url(${place.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 flex items-center justify-center text-center !p-2">
                      <p className="text-white place-self-end text-sm font-semibold">
                        {place.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 w-full text-center z-20 flex justify-center gap-6">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-r from-lime-600 to-green-700 text-white w-12 h-12 rounded-full shadow-lg"
          >
            ←
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-r from-green-600 to-emerald-700 text-white w-12 h-12 rounded-full shadow-lg"
          >
            ➜
          </motion.button>
        </div>
      </div>
    </section>
  );
}

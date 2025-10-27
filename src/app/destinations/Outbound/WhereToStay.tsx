"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const stays = [
  {
    name: "Burj Al Arab, Dubai",
    description:
      "A symbol of modern Dubai, Burj Al Arab offers unparalleled luxury and world-class service in the shape of a sail, making it one of the most iconic hotels in the world.",
    image: "/images/images/Burj-Arab.png",
  },
  {
    name: "Château de Mont Blanc, France",
    description:
      "Located in the French Alps, this hotel offers breathtaking views and an unforgettable blend of luxury and mountain adventure.",
    image: "/images/images/mont-blanc.png",
  },
  {
    name: "Park Hyatt Sydney, Australia",
    description:
      "Set on the edge of the Sydney Harbour, Park Hyatt offers luxury with a front-row view of the Sydney Opera House and Harbour Bridge.",
    image: "/images/images/sydney-park-hyatt.png",
  },
  {
    name: "Ritz Paris, France",
    description:
      "A symbol of elegance and sophistication, Ritz Paris offers supreme comfort and service in the heart of the city of lights.",
    image: "/images/images/Ritz-Paris.png",
  },
  {
    name: "Le Sirenuse, Amalfi Coast, Italy",
    description:
      "Overlooking the stunning Amalfi Coast, this charming hotel combines luxurious accommodation with breathtaking views of the Mediterranean Sea.",
    image: "/images/images/Le-Sirenuse,-Amalfi-Coast.jpg",
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

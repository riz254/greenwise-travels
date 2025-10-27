"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatToDo from "./WhatToDo";
import WhereToStay from "./WhereToStay";
import Itineraries from "./Itineraries";

const destinations = [
  {
    name: "Kruger National Park",
    description:
      "Explore one of Africa's largest game reserves, famous for its diverse wildlife and the Big Five. Experience thrilling safari adventures in a stunning natural setting.",
    image: "/images/images/KrugerNP.jpg",
  },
  {
    name: "Victoria Falls",
    description:
      "One of the largest and most famous waterfalls in the world, Victoria Falls is a breathtaking sight. Enjoy white-water rafting, bungee jumping, and helicopter tours.",
    image: "/images/images/VictoriaFallsSouthernAfrica.jpg",
  },
  {
    name: "Table Mountain",
    description:
      "Iconic to Cape Town, Table Mountain offers stunning views and a unique ecosystem. Hike or take the cable car to the summit for an unforgettable experience.",
    image: "/images/images/tableMountain.jpg",
  },
  {
    name: "Etosha National Park",
    description:
      "Known for its salt pans and diverse wildlife, Etosha offers excellent game viewing opportunities, especially during the dry season.",
    image: "/images/images/etosha.jpg",
  },
  {
    name: "Sossusvlei",
    description:
      "Famous for its towering sand dunes, Sossusvlei is a must-visit for photography enthusiasts and adventure seekers alike.",
    image: "/images/images/namibia-sossuvlei.jpg",
  },
  {
    name: "Blyde River Canyon",
    description:
      "One of the largest canyons in the world, Blyde River Canyon offers stunning views and numerous hiking trails for nature lovers.",
    image: "/images/images/blyde-river-canyon.jpg",
  },
  {
    name: "Namib Desert",
    description:
      "Home to some of the highest dunes in the world, the Namib Desert provides a surreal landscape and unique experiences for travelers.",
    image: "/images/images/namibDesert.jpg",
  },
];

export default function GreenwiseDifference() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = destinations[currentIndex];
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );

  return (
    <>
      <Navbar />

      {/* Showcase Section */}
      <section className="h-[85vh] flex items-center justify-center text-center text-white overflow-hidden w-full relative">
        <Image
          src="/images/images/VictoriaFallsSouthernAfrica.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">SOUTHERN AFRICA</h2>
          <p className="text-lg">
            A land where the thrill of safaris meets the serenity of nature in
            perfect harmony
          </p>
        </div>
      </section>

      <div className="!mx-auto !p-20 text-center">
        <h2 className="!text-5xl md:text-4xl font-bold text-green-950 !mb-6">
          WELCOME TO SOUTHERN AFRICA!{" "}
        </h2>
        <p className="max-w-fit !mx-auto text-black !mb-6">
          Southern Africa is a region renowned for its stunning natural beauty,
          rich cultural heritage, and vibrant wildlife. Experience iconic
          destinations such as Kruger National Park, Table Mountain, and the
          stunning coastline of Cape Town.
        </p>
        <p className="text-center">
          Join us for an unforgettable adventure in the heart of Southern
          Africa!
        </p>
      </div>

      {/* <div className="w-full bg-lime-100 !py-12 rounded-xl"> */}
      <div className="!mx-auto text-center">
        <h2 className="!text-4xl font-sans md:text-4xl font-bold text-green-950 !mb-6">
          WHERE TO VISIT
        </h2>
      </div>
      {/* Destination Section */}
      <div className="relative w-full !mx-auto h-[75vh] rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl bg-green-100/20">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.image})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row  justify-between items-center h-full !px-10 md:!px-20 text-white">
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
                  destinations[(currentIndex + 1) % destinations.length],
                  destinations[(currentIndex + 2) % destinations.length],
                  destinations[(currentIndex + 3) % destinations.length],
                ].map((place, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                    className="h-[50vh] w-60 rounded-xl overflow-hidden relative cursor-pointer grid"
                    onClick={() =>
                      setIndex((currentIndex + i + 1) % destinations.length)
                    }
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
      {/* </div> */}

      {/* -------------------------------------------- */}

      <WhatToDo />
      {/* ----------------------------------------------------------------- */}

      <WhereToStay />

      <Itineraries />

      <Footer />
    </>
  );
}

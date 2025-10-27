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
    name: "Lalibela",
    description:
      "Explore the ancient rock-hewn churches of Lalibela, a UNESCO World Heritage Site, renowned for its extraordinary architecture and spiritual significance.",
    image: "/images/images/ETH_Lalibela_JPEG_Hero_ETH_Lalibela-1.jpg",
  },
  {
    name: "Simien Mountains National Park",
    description:
      "Discover the breathtaking Simien Mountains, known for their dramatic landscapes, endemic wildlife, and awe-inspiring vistas. A hiker’s paradise in Ethiopia.",
    image: "/images/images/Simien-Mountains-landscape.jpg",
  },
  {
    name: "Axum",
    description:
      "Visit Axum, Ethiopia’s ancient city, home to remarkable obelisks, ancient ruins, and a deep historical significance as the heart of the Axumite Empire.",
    image: "/images/images/Axum.jpg",
  },
  {
    name: "Danakil Depression",
    description:
      "Experience the surreal landscapes of the Danakil Depression, one of the hottest places on earth, where salt flats, lava lakes, and sulfur springs create a mesmerizing view.",
    image: "/images/images/Danakil-depression.jpg",
  },
  {
    name: "Omo Valley",
    description:
      "Immerse yourself in the diverse cultures of the Omo Valley, where tribal communities maintain ancient traditions in a vibrant and colorful setting.",
    image: "/images/images/omo-valley.jpg",
  },
  {
    name: "Bale Mountains National Park",
    description:
      "Bale Mountains National Park offers stunning highland scenery, diverse wildlife, and is a haven for birdwatchers seeking endemic species.",
    image: "/images/images/baleMountains.jpg",
  },
  {
    name: "Harar Jugol",
    description:
      "Explore the ancient walled city of Harar, a UNESCO site, known for its colorful streets, rich history, and the famous “Hyena Man” feeding wild hyenas.",
    image: "/images/images/harar.png",
  },
  {
    name: "Blue Nile Falls",
    description:
      "Known locally as Tis Issat (the “Smoking Water”), the Blue Nile Falls is a spectacular natural wonder that will leave you in awe of its sheer power and beauty.",
    image: "/images/images/blue-nile-falls.jpg",
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
          src="/images/images/Ethiopia-Landscape.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">ETHIOPIA</h2>
          <p className="text-lg">
            Explore Ethiopia&apos;s Rich History: Ancient Civilizations,
            Majestic Mountains, and Timeless Culture.
          </p>
        </div>
      </section>

      <div className="!mx-auto !p-20 text-center">
        <h2 className="!text-5xl md:text-4xl font-bold text-green-950 !mb-6">
          WELCOME TO ETHIOPIA!{" "}
        </h2>
        <p className="max-w-fit !mx-auto text-black !mb-6">
          Ethiopia, a land of stunning contrasts, offers breathtaking landscapes
          from the towering Simien Mountains to the ancient rock-hewn churches
          of Lalibela. It&apos;s a country where history and culture intertwine
          in every corner, from the cradle of humanity to the timeless
          traditions of the Omo Valley tribes.
        </p>
        <p className="text-center">
          We invite you to embark on a journey through Ethiopia’s diverse
          beauty, rich heritage, and unforgettable adventures.
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
                      setCurrentIndex(
                        (currentIndex + i + 1) % destinations.length
                      )
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

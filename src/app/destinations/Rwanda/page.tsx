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

type Destinations = {
  name: string;
  description: string;
  image: string;
};

const destinations: Destinations[] = [
  {
    name: "Volcanoes National Park",
    image:
      "/images/images/Visit-Rwanda-Crater-Lake-Volcanoes-e1533416621808-1920x1267.jpg",
    description:
      "Home to the endangered mountain gorillas, Volcanoes National Park offers an extraordinary wildlife experience with breathtaking volcanic landscapes, perfect for gorilla trekking and cultural encounters.",
  },
  {
    name: "Akagera National Park",
    image: "/images/images/akagera-wildlife-768x514.jpg",
    description:
      "Akagera National Park is a stunning sanctuary for Rwanda's savannah wildlife. Discover lions, elephants, hippos, and giraffes in this remarkable ecosystem bordering Tanzania, offering boat safaris and beautiful landscapes.",
  },
  {
    name: "Nyungwe Forest National Park",
    image: "/images/images/NyungweChimp.jpg",
    description:
      "Nyungwe Forest is one of Africa's oldest rainforests, a haven for primates like chimpanzees and colobus monkeys. Explore its canopy walkways and pristine nature trails for an unforgettable experience.",
  },
  {
    name: "Lake Kivu",
    image: "/images/images/lake-kivu.jpg",
    description:
      "Rwanda's largest lake, Lake Kivu, offers a serene getaway with its sparkling waters and picturesque shorelines. Perfect for relaxing, kayaking, or enjoying a boat ride while taking in the surrounding beauty.",
  },
  {
    name: "Kigali",
    image: "/images/images/kigali-city.webp",
    description:
      "Kigali, Rwanda's capital, is a city known for its vibrant culture, clean streets, and impressive skyline. Visit historical landmarks like the Kigali Genocide Memorial and enjoy the lively markets and cafes.",
  },
  {
    name: "Gishwati-Mukura National Park",
    image: "/images/images/Gishwati-Mukura-National-Park.jpg",
    description:
      "This newly established park is a pristine ecosystem of tropical rainforest, home to primates and rare bird species, offering eco-tourism experiences with a focus on conservation and sustainable development.",
  },
  {
    name: "Karongi District",
    image: "/images/images/karongi-district.jpeg",
    description:
      "Karongi, located along the shores of Lake Kivu, is a beautiful town known for its resorts and idyllic environment. It offers visitors a peaceful retreat with panoramic views of the lake and surrounding hills.",
  },
  {
    name: "Musanze Caves",
    image: "/images/images/Musanze-Caves-600x450.jpg",
    description:
      "The Musanze Caves, located near Volcanoes National Park, offer a unique geological adventure. Explore these ancient caves and learn about their historical significance in Rwanda's cultural heritage.",
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

  const nextPreviews = [
    destinations[(currentIndex + 1) % destinations.length],
    destinations[(currentIndex + 2) % destinations.length],
    destinations[(currentIndex + 3) % destinations.length],
  ];

  return (
    <>
      <Navbar />

      {/* Showcase Section */}
      <section className="h-[85vh] flex items-center justify-center text-center text-white overflow-hidden w-full relative">
        <Image
          src="/images/images/Visit-Rwanda-Crater-Lake-Volcanoes-e1533416621808-1920x1267.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">RWANDA</h2>
          <p className="text-lg">
            Explore Rwanda's Hidden Gems: Gorillas, Volcanoes, and Breathtaking
            Scenery.
          </p>
        </div>
      </section>

      <div className="!mx-auto !p-20 text-center">
        <h2 className="!text-5xl md:text-4xl font-bold text-green-950 !mb-6">
          WELCOME TO RWANDA!{" "}
        </h2>
        <p className="max-w-fit !mx-auto text-black !mb-6">
          Rwanda, the Land of a Thousand Hills, offers breathtaking landscapes,
          unique wildlife, and a rich cultural heritage. Home to the majestic
          Mountain Gorillas in Volcanoes National Park, the serene shores of
          Lake Kivu, and the vibrant capital, Kigali, Rwanda is a destination of
          unforgettable beauty and adventure.
        </p>
        <p className="text-center">
          Join us and discover the heart of Africa with a journey through
          Rwanda's natural wonders and remarkable experiences.
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

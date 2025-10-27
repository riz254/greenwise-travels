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

const destinations: Destinations[] = [
  {
    name: "Tarangire National Park",
    description: `Discover Tarangire National Park, famous for its massive elephant herds and stunning baobab trees. This lesser-known gem offers a unique safari experience with diverse wildlife, including lions, leopards, and a rich variety of bird species amidst beautiful landscapes.`,
    image: "/images/images/Esirai-Gallery-4.jpg",
  },
  {
    name: "Serengeti National Park",
    description: `Explore Serengeti National Park, Tanzania's vast wildlife haven known for the Great Migration. Witness millions of wildebeest and zebras traverse the plains, alongside majestic predators like lions and leopards. This iconic park offers an unparalleled safari experience.`,
    image: "/images/images/great-migration-serengeti-game-drive.jpg",
  },
  {
    name: "Saadani National Park",
    description: `Saadani National Park, Tanzania, seamlessly fuses coastal beauty with savannah wilderness, offering a rich tapestry of wildlife, from elephants to lions, within diverse and enchanting landscapes.`,
    image: "/images/images/Saadani-National-Park-620x400-1.jpg",
  },
  {
    name: "Ngorongoro Crater",
    description: `This ancient crater is a sheltered haven for wildlife, harboring nearly all of East Africa's iconic species. In addition to first-rate game viewing, the crater offers close proximity to Olduvai Gorge, the "Cradle of Humanity," where many pre-human fossil remains were discovered.`,
    image: "/images/images/ngorongoro.jpg",
  },
  {
    name: "Selous Game Reserve",
    description: `Named after Sir Frederick Selous, this is among the largest protected areas in Africa and is relatively undisturbed by human impact. It offers significant concentrations of elephants, black rhinos, cheetahs, giraffes, hippos, and crocodiles among many other species.`,
    image: "/images/images/selous-safari.jpg",
  },
  {
    name: "Gombe Stream National Park",
    description: `One of Tanzania's smallest parks, Gombe is world-famous as the site where Jane Goodall conducted her groundbreaking chimpanzee research in the 1960s. Located on the shores of Lake Tanganyika, it’s only accessible by boat.`,
    image: "/images/images/gombe.jpg",
  },
  {
    name: "Mkomazi National Reserve",
    description: `A pristine wilderness with diverse landscapes, home to endangered species such as rhinos and wild dogs, offering a unique safari experience in East Africa's hidden gem.`,
    image: "/images/images/mkomazi.jpg",
  },
  {
    name: "Lake Manyara",
    description: `This shallow alkaline lake is best known for the millions of flamingos that call it home. The lake and its surrounding regions also shelter hippos, baboons, impalas, and a variety of other bird species.`,
    image: "/images/images/lake-manyara.jpg",
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
          src="/images/images/ngorongoro-plains.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">TANZANIA</h2>
          <p className="text-lg">
            Discover Tanzania&apos;s Natural Wonders: Wildlife, Kilimanjaro, and
            Untamed Beauty.
          </p>
        </div>
      </section>

      <div className="!mx-auto !p-20 text-center">
        <h2 className="!text-5xl md:text-4xl font-bold text-green-950 !mb-6">
          KARIBU TANZANIA!{" "}
        </h2>
        <p className="max-w-fit !mx-auto text-black !mb-6">
          Tanzania stands as the largest country in the East African Community
          and is home to the regions&apos; extremes. Home of three Natural
          Wonders of Africa; the Great Wildebeest Migration, Ngorongoro Crater
          and the Mount Kilimanjaro. All this topped with the beautiful Zanzibar
          Archipelago-Tanzania has all these and more wrapped up in one
          adventurous, welcoming package.
        </p>
        <p className="text-center">
          We welcome you to walk in our footsteps for the greatest African
          safari and adventure experience.
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

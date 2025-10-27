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
    name: "Amboseli National Park",
    description: `Known as the "Land of Giants," Amboseli offers incredible wildlife encounters, including
        lions, cheetahs, and over
        400 bird species, all set against the backdrop of Africa's highest peak.`,
    image:
      "/images/images/Attractions-in-Amboseli-National-Park-Kenyasa-750x450.jpg",
  },
  {
    name: "Maasai Mara National Reserve",
    description: `Arguably, the world's greatest safari destination, the iconic Masai
							Mara National Reserve is one of the best game viewing areas in Africa. Home to the "Big
							Five" and the Great Migration, the
							reserve offers unparalleled opportunities for game viewing and cultural experiences with the
							Maasai people.`,
    image: "/images/images/MaraMigration.jpg",
  },
  {
    name: "Tsavo National Park",
    description: `Tsavo National Park, Kenya's largest protected area, is the "Theatre of
							the Wild," housing diverse wildlife like dust-red elephant herds, rhinos, lions, and
							crocodiles. With a rich history, the park hosts 500 bird species, making it a haven for both
							mammalian and avian enthusiasts.`,
    image: "/images/images/Elephants_Tsavo-East.jpg",
  },
  {
    name: "Mt. Kenya",
    description: `Situated in the heart of Mount Kenya National Park, this mountain
							stands as the tallest in Kenya and the second-largest in Africa. Renowned for its majestic
							stature, it is a cherished destination for avid mountain climbers.`,
    image: "/images/mt-kenya.jpg",
  },
  {
    name: "Mombasa",
    description: `Discover an ideal destination for sun-soaked adventures, where pristine
							sandy beaches invite relaxation and historical treasures await exploration. Visit iconic
							sites like the Old Town, Fort Jesus, and the Mombasa Marine Park for a delightful blend of
							leisure and cultural richness.`,
    image: "/images/images/kenya-diani-beach.jpg",
  },
  {
    name: "The Great Rift-Valley",
    description: `Encompassing a stunning array of natural features, this geographical
        marvel includes 12 volcanic mountains, 7 lakes, and a diverse range of wildlife. The
        landscape boasts breathtaking scenery that captivates all who venture into its embrace.`,
    image: "/images/images/rift-valley.jpg",
  },
  {
    name: "Samburu National Park",
    description: `Delve into the excitement of the Maralal Camel Derby, an annual
							festival featuring camel riders in the remote Samburu National Park. Historically
							inaccessible, this tranquil location boasts diverse wildlife and serves as a sanctuary for
							numerous bird species.`,
    image: "/images/images/Leopard_Teeku.jpg",
  },
  {
    name: "Lake Nakuru",
    description: `Lake Nakuru, Kenya, cradles a dazzling spectacle of pink flamingos, surrounded by lush
							landscapes, home to diverse wildlife, creating a picturesque and vibrant haven for nature
							enthusiasts.`,
    image: "/images/lake-nakuru-flamingoes.jpg",
  },
];

const activities = [
  {
    title: "Twin Migration",
    description:
      "Experience Kenya's wonders as humpback whales traverse the ocean near the reef, and the great wildebeest migration unfolds in the Mara.",
    image: "/images/kenya-great-migration-maasai-mara.jpg",
  },
  {
    title: "Animal Orphanage Visit",
    description:
      "Get up close and personal with giraffes at the Giraffe Centre and David Sheldrick Wildlife Trust to see orphaned elephants.",
    image: "/images/orphanage.avif",
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
    image: "/images/culture-kenya.jpg",
  },
  {
    title: "Hot Air Balloon Safaris",
    description:
      "Experience the thrill of a hot air balloon safari over the expansive landscapes, providing a unique perspective on wildlife and scenery.",
    image: "/images/experience4-768x457.jpg",
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
          src="/images/images/kenya-giraffe-manor.jpeg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">KENYA</h2>
          <p className="text-lg">
            A land where the thrill of safaris meets the serenity of nature in
            perfect harmony
          </p>
        </div>
      </section>

      <div className="!mx-auto !p-20 text-center">
        <h2 className="!text-5xl md:text-4xl font-bold text-green-950 !mb-6">
          KARIBU KENYA!{" "}
        </h2>
        <p className="max-w-fit !mx-auto text-black !mb-6">
          Welcome to Kenya, a land of astounding biodiversity and natural
          beauty. Located in East Africa, Kenya is famous for its diverse
          landscapes and wildlife. From the iconic Maasai Mara and the "Big
          Five" to bustling Nairobi's vibrant culture, serene beaches along the
          coast, and the majestic Mount Kenya, our country offers a blend of
          adventure, culture, and natural wonders. Experience the warmth of our
          people, explore local traditions, and savor our rich cuisine. Kenya is
          an extraordinary destination where you can create unforgettable
          memories
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/safari.jpg",
  "/images/safari.jpg",
  "/images/safari.jpg",
  "/images/safari.jpg",
];

export default function CascadingImageStack() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    //   <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
    //     Access to ungoogleable experiences
    //   </h2>

    //   <div
    //     className="relative w-[400px] h-[300px] cursor-pointer"
    //     onClick={handleClick}
    //   >
    //     <AnimatePresence mode="wait">
    //       <motion.div
    //         key={index}
    //         className="absolute inset-0"
    //         initial={{ opacity: 0, scale: 0.9, y: 30 }}
    //         animate={{ opacity: 1, scale: 1, y: 0 }}
    //         exit={{ opacity: 0, scale: 0.9, y: -30 }}
    //         transition={{ duration: 0.6, ease: "easeInOut" }}
    //       >
    //         {/* Main Image */}
    //         <Image
    //           src={images[index]}
    //           alt="Experience"
    //           fill
    //           className="object-cover rounded-2xl shadow-2xl"
    //         />

    //         {/* Cascading stacked images */}
    //         <div className="absolute inset-0 -z-10 transform translate-x-8 translate-y-6 rotate-3">
    //           <Image
    //             src={images[(index + 1) % images.length]}
    //             alt="Stack 1"
    //             fill
    //             className="object-cover rounded-2xl shadow-xl opacity-90"
    //           />
    //         </div>

    //         <div className="absolute inset-0 -z-20 transform translate-x-16 translate-y-12 -rotate-3">
    //           <Image
    //             src={images[(index + 2) % images.length]}
    //             alt="Stack 2"
    //             fill
    //             className="object-cover rounded-2xl shadow-lg opacity-80"
    //           />
    //         </div>
    //       </motion.div>
    //     </AnimatePresence>
    //   </div>

    //   <p className="mt-6 max-w-xl text-center text-gray-700 leading-relaxed">
    //     We believe in unconventional luxury: true luxury isn’t just a fancy
    //     hotel room; it’s access to amazing people and places. We focus on
    //     “unGoogleable experiences” that go beyond top 10 lists and reveal the
    //     true essence of Africa.
    //   </p>
    // </div>

    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Access to ungoogleable experiences
        </h2>

        {/* Cascading Images */}
        <div className="relative flex justify-center items-center h-[400px] mb-12">
          {/* Image 1 */}
          <img
            src="/images/exp1.jpg"
            alt="Experience 1"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-80 object-cover rounded-2xl shadow-xl transform -translate-y-1/2 rotate-[-6deg]"
          />

          {/* Image 2 */}
          <img
            src="/images/exp2.jpg"
            alt="Experience 2"
            className="absolute w-64 h-80 object-cover rounded-2xl shadow-xl transform translate-x-[50%] translate-y-[35%] rotate-[4deg]"
          />

          {/* Image 3 */}
          <img
            src="/images/exp3.jpg"
            alt="Experience 3"
            className="absolute w-64 h-80 object-cover rounded-2xl shadow-2xl transform -translate-x-[35%] translate-y-[30%] rotate-[-3deg]"
          />
        </div>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We believe in unconventional luxury: true luxury isn’t just a fancy
          hotel room; it’s access to amazing people and places. We focus on
          “unGoogleable experiences” that are designed to go beyond top 10 lists
          and reveal the true essence of Africa.
        </p>
      </div>
    </section>
  );
}

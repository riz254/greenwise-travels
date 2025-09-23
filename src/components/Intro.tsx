"use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// const images = [
//   "/images/safari.jpg",
//   "/images/safari.jpg",
//   "/images/safari.jpg",
//   "/images/safari.jpg",
// ];

export default function CascadingImageStack() {
  // const [index, setIndex] = useState(0);

  // const handleClick = () => {
  //   setIndex((prev) => (prev + 1) % images.length);
  // };

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

    <section
      className="h-screen relative  bg-green-50"
      style={{ padding: "100px" }}
    >
      <div className="mx-auto pt-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Stacked Images */}
        <div className="relative w-fit md:w-1/2 h-[300px] mx-auto">
          {/* First Image */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[70%] h-[70%]">
            <Image
              src="/images/images/kenya-giraffe-manor.jpeg"
              alt="Safari Experience"
              fill
              className="object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* Second Image */}
          <div className="absolute top-[30%] left-[40%] w-[60%] h-[60%]">
            <Image
              src="/images/images/Nairobi.png"
              alt="Cultural Experience"
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Third Image */}
          <div className="absolute top-[35%] left-[-0%] w-[50%] h-[50%]">
            <Image
              src="/images/images/kenya-diani-beach.jpg"
              alt="Adventure Experience"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className=" w-50 md:w-1/2 space-y-10">
          <div>
            <h2
              className="text-right font-semibold "
              style={{ color: "green", fontSize: "20pt" }}
            >
              Discover Africa, with Africans!
            </h2>
            <p className="mt-2 text-right md:text-3xl font-medium leading-snug ">
              The best way to discover Africa is with Africans. We are natives
              of this land and we have spent our entire life here, discovering
              Africa’s best-kept secrets.
            </p>
          </div>

          <div>
            <h2
              className="text-right font-extraBold"
              style={{ color: " rgb(8, 99, 8)", fontSize: "20pt" }}
            >
              We take the initiative,
            </h2>
            <h2
              className="text-right font-extraBold"
              style={{ color: " rgb(8, 99, 8)", fontSize: "20pt" }}
            >
              so you can travel stress-free
            </h2>
            <p className="mt-2 text-right md:text-3xl font-medium leading-snug text-gray-800">
              Our experts are ready to plan your private, personalized, and
              sustainable African safari experiences!
            </p>
          </div>

          <div>
            <p className="text-right text-xl md:text-2xl font-medium text-gray-800">
              We welcome you to walk in our footsteps for the greatest African
              safari and adventure experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

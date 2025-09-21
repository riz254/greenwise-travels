"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from "react-icons/fa";

// Simple text carousel messages
const MESSAGES = [
  "Africa is Calling",
  "Personalized, Sustainable Travel",
  "Discover Impactful Experiences",
  "Connect with Locals",
  "Give Back to Communities",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // auto-advance every 3s
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video background (fallback image included) */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/Magical Kenya.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" /> */}

        {/* <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/Magical Kenya.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="animate-pulse text-4xl font-bold">
            Africa is Calling
          </h2>
          <a
            href="/about"
            className="mt-6 rounded bg-green-600 px-6 py-2 font-semibold hover:bg-green-700"
          >
            Read More
          </a>
        </div> */}
        {/* <section class="showcase">
		<div class="video-container">
			<video src="videos/Magical Kenya.mp4" autoplay muted loop></video>
		</div> */}

        {/* Word Carousel */}
        <div className="relative  top-52  max-w-4xl mx-auto text-center">
          {/* Animated word carousel */}
          <div className=" flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeInOut",
                    type: "safari",
                    stiffness: 100,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.97,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
                className="an"
                // className="text-white text-9xl md:text-6xl sm:text-4xl font-extrabold font-serif "
              >
                {MESSAGES[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* <div
            id="carouselExample"
            className="carousel slide position-relative text-center text-white"
            data-bs-ride="carousel"
            data-bs-pause="false"
            style={{
              padding: "5px",
            }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1500">
                <h2 className="font-serif ">Africa is Calling</h2>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <h2 className="font-serif">Personalized Sustainable Travel</h2>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <h2 className="font-serif">
                  Discover impactful African experiences
                </h2>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <h2 className="font-serif">Connect with Locals</h2>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <h2 className="font-serif">Give back to Communities</h2>
              </div>
              <div className="carousel-item mb-5" data-bs-interval="3000">
                <h2 className="font-serif">
                  Authentic Travel Experiences for Every Adventurous Spirit
                </h2>
              </div> */}
          {/* </div> */}
          {/* </div> */}

          {/* Button */}
          <div className="content position-relative text-center mt-4">
            <Link
              href="/about"
              className="btn btn-success px-4 py-2 rounded-pill"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      {/* </section> */}
    </>
  );
}

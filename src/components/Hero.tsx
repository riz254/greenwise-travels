"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="h-[90vh] flex items-center justify-center text-center text-white px-5 overflow-hidden w-full">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/Magical Kenya.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative -top-10 text-center ">
        {/* Word carousel */}
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                },
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              className="text-white text-4xl sm:text-4xl md:text-5xl font-semibold  text-shadow-lg"
            >
              {MESSAGES[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <div className="mt-16" style={{ margin: "20px" }}>
          <Link
            href="/about"
            className="inline-block bg-green-600 text-xl text-white rounded-lg shadow-md hover:bg-green-700 hover:text-xl transition"
            style={{ padding: "10px", color: "white" }}
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Credits */}
      <div className="absolute bottom-3 left-4 z-10 text-white text-sm">
        ©KTB
      </div>
    </section>
  );
}

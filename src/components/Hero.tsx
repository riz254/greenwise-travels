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
                  stiffness: 80,
                },
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              className="text-white font-semibold text-shadow-lg leading-tight"
              style={{
                fontSize: "clamp(1.6rem, 4.8vw, 3.8rem)", // mobile min, fluid preferred, desktop max
                lineHeight: 1.05,
                textAlign: "center",
              }}
            >
              {MESSAGES[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <div className="!mt-16">
          <Link
            href="/about"
            className="inline-block    bg-gradient-to-r from-green-400 via-green-500 to-lime-400 bg-[length:200%_200%] !text-emerald-950 text-lg
            font-black rounded-2xl 
            !px-8 !py-3
            shadow-md
            transition-all duration-500 ease-in-out
            will-change-transform
            hover:scale-110 hover:shadow-lg hover:text-xl hover:shadow-lime-950 hover:bg-[position:right_center]"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Credits */}
      <div className="absolute bottom-3 left-4 z-10 text-gray-300 text-sm">
        ©KTB
      </div>
    </section>
  );
}

// export default function Intro() {
//   return (
// <section className="py-12 mt-5 h-full">
//   <div className=" mx-auto grid gap-8 h-80 md:grid-cols-2 px-6">
//     <div>
//       <h2 className="text-green-700 text-2xl font-trebuchet font-bold place-self-center">
//         Discover Africa, with Africans!
//       </h2>
//       <p className="mt-5 text-gray-700 text-4xl max-w-xl mx-auto justify-between text-center">
//         The best way to discover Africa is with Africans. We are natives of
//         this land and have spent our lives uncovering Africa’s best-kept
//         secrets.
//       </p>
//     </div>
//     <div>
//       <h2 className="text-green-700 font-serif text-2xl font-bold place-self-center">
//         Stress-free Travel
//       </h2>
//       <p className="mt-5 text-gray-700 text-4xl max-w-xl mx-auto justify-self-end text-center">
//         Our experts are ready to plan your private, personalized, and
//         sustainable African safari experiences!
//       </p>
//     </div>
//   </div>
//   <div className="mt-10 text-center">
//     <h3 className="text-2xl font-serif font-bold  text-gray-800">
//       We welcome you to walk in our footsteps for the greatest African
//       safari adventure.
//     </h3>
//   </div>
// </section>

// components/Hero.tsx
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

  // basic date state (swap for react-datepicker or flatpickr)
  const [dates, setDates] = useState<{ from?: string; to?: string }>({});
  const [destination, setDestination] = useState("");

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    // navigate or call API — replace with your route
    console.log("Search", { destination, dates });
    // Example: router.push(`/search?dest=${encodeURIComponent(destination)}`)
  }

  return (
    <>
      <section className="relative h-screen w-full flex items-center text-white overflow-hidden">
        {/* Video background (fallback image included) */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/Magical Kenya.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

        {/* Content container */}
        <div className="relative z-20 container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated word carousel */}
            <div className="h-32 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
                  aria-live="polite"
                >
                  {MESSAGES[index]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Authentic African safaris crafted by locals — sustainable,
              private, and unforgettable.
            </p>

            {/* Booking/search card */}
            <form
              onSubmit={onSearch}
              className="mt-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg text-black grid gap-3 md:grid-cols-3 items-center"
              role="search"
            >
              <label className="sr-only" htmlFor="destination">
                Destination
              </label>
              <div className="flex items-center gap-3 md:col-span-1">
                <FaMapMarkerAlt className="text-green-700" />
                <input
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where would you like to go?"
                  className="w-full bg-transparent outline-none text-sm"
                  aria-label="Destination"
                />
              </div>

              <div className="flex items-center gap-3 md:col-span-1">
                <FaCalendarAlt className="text-green-700" />
                <input
                  type="text"
                  placeholder="Dates (e.g. 2025-10-01 — 2025-10-10)"
                  onChange={(e) =>
                    setDates({
                      ...dates,
                      from: e.target.value.split("—")[0]?.trim(),
                    })
                  }
                  className="w-full bg-transparent outline-none text-sm"
                  aria-label="Dates"
                />
              </div>

              <div className="flex items-center md:justify-end gap-3 md:col-span-1">
                <button
                  type="submit"
                  className="ml-auto inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium shadow"
                  aria-label="Search trips"
                >
                  <FaSearch />
                  Search
                </button>
              </div>
            </form>

            {/* Mini map / highlights row */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="font-semibold">Handpicked Routes</div>
                  <div className="text-xs">Local experts design every trip</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Sustainable Travel</div>
                  <div className="text-xs">Giving back to communities</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M12 2C8 2 4 4 4 8C4 13.5 12 22 12 22C12 22 20 13.5 20 8C20 4 16 2 12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Local Guides</div>
                  <div className="text-xs">Authentic experiences</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small accessible controls for carousel (visually hidden on desktop) */}
        <div className="absolute left-4 bottom-6 z-30 flex gap-2">
          {MESSAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show message ${i + 1}`}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section
        className="relative bg-parallax h-[90vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/safari.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-heading font-bold animate-fadeInUp">
            Discover Africa, with Africans!
          </h2>
          <p className="mt-6 text-lg md:text-2xl max-w-2xl mx-auto animate-fadeInUp delay-200">
            The best way to discover Africa is with Africans. We are natives of
            this land and have spent our lives uncovering Africa’s best-kept
            secrets.
          </p>
          <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105">
            Plan Your Safari
          </button>
        </div>
      </section>
    </>
  );
}

//   );
// }

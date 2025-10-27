"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Mountain } from "lucide-react";
import { itineraries } from "./itinerariesList";

export default function ItinerarySection() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const countries = [
    "All",
    "Kenya",
    "Uganda",
    "Tanzania",
    "Rwanda",
    "Ethiopia",
    "Indian Ocean Islands",
    "Southern Africa",
  ];

  const filteredItineraries =
    selectedCountry === "All"
      ? itineraries
      : itineraries.filter((item) => item.country === selectedCountry);

  const visibleItineraries = filteredItineraries.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="relative !py-20 bg-gradient-to-b from-green-50 to-green-100/30 overflow-hidden">
      <div className="container !mx-auto !px-4">
        <h2 className="text-center text-5xl font-extrabold text-lime-950 !mb-10">
          Featured Itineraries
        </h2>

        {/* 🌍 Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 !mb-14">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => {
                setSelectedCountry(country);
                setVisibleCount(4); // reset visible count when changing country
              }}
              className={`!px-6 !py-2 rounded-full text-lg font-medium transition-all ${
                selectedCountry === country
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-white text-green-700 border border-green-400 hover:bg-green-100"
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* 🗺 Itinerary Grid */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {visibleItineraries.map((item, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-xl overflow-hidden shadow-md shadow-green-900 bg-green-100 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} /> {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} /> {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mountain size={16} /> {item.difficulty}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="!m-5 flex flex-col justify-between h-fit">
                  <div>
                    <h1 className="text-xl font-semibold text-gray-950 !mb-2">
                      {item.title}
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                    <button className="!mt-4 self-start bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold !px-5 !py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🔽 Load More Button */}
        <div className="text-center !mt-12 flex justify-center items-center gap-4">
          {visibleCount < filteredItineraries.length && (
            <div className="text-center !mt-12">
              <button
                onClick={handleLoadMore}
                className="!px-6 !py-3 border-2 border-green-700 text-green-700 font-semibold rounded-full hover:bg-green-50 hover:scale-105 transition-all"
              >
                Load More
              </button>
            </div>
          )}

          {visibleCount > 8 && (
            <div className="text-center !mt-12">
              <button
                onClick={() => setVisibleCount(8)}
                className="!px-6 !py-3 border-2 border-green-700 text-green-700 font-semibold rounded-full hover:bg-green-50 hover:scale-105 transition-all"
              >
                Load Less
              </button>
            </div>
          )}
        </div>
        {filteredItineraries.length === 0 && (
          <p className="text-center text-gray-500 !mt-8 text-xl">
            No itineraries found for {selectedCountry}.
          </p>
        )}
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";
// import Link from "next/link";
// import Image from "next/image";

// export default function SectionWithFixedOverlay() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [overlay, setOverlay] = useState({
//     left: 0,
//     top: 0,
//     width: 100,
//     height: 200,
//     visible: false,
//   });

//   // Recalculate overlay position so it sits visually centered over the section
//   useEffect(() => {
//     if (!sectionRef.current) return;
//     const el = sectionRef.current;

//     function update() {
//       const rect = el.getBoundingClientRect();
//       // Hide on small screens
//       if (window.innerWidth < 768) {
//         setOverlay((s) => ({ ...s, visible: false }));
//         return;
//       }

//       const overlayWidth = Math.min(rect.width * 0.45, 760); // limit max width
//       const overlayHeight = Math.round(overlayWidth * 0.66); // aspect ratio (change if needed)

//       // center of section relative to viewport
//       const centerX = rect.left + rect.width / 2;
//       const centerY = rect.top + rect.height / 2;

//       // show overlay only when section intersects viewport (simple check)
//       const inViewport = rect.bottom > 0 && rect.top < window.innerHeight;

//       setOverlay({
//         left: centerX,
//         top: centerY,
//         width: overlayWidth,
//         height: overlayHeight,
//         visible: inViewport,
//       });
//     }

//     update();
//     const onScroll = () => update();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);

//     // also run periodically while user is scrolling fast (optional)
//     const rafId = requestAnimationFrame(() => update());

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//       cancelAnimationFrame(rafId);
//     };
//   }, []);

//   // The portal target (document.body) is safe because this file is "use client"
//   const overlayNode =
//     typeof document !== "undefined" && overlay.visible
//       ? createPortal(
//           <div
//             aria-hidden
//             style={{
//               position: "fixed",
//               left: "500px",
//               top: overlay.top,
//               width: "250px",
//               height: "300px",
//               transform: "translate(-50%, -50%)",
//               pointerEvents: "none", // don't block clicks
//             }}
//             className="z-50 rounded-2xl overflow-hidden shadow-2xl"
//           >
//             {/* Use <img> or next/image — using <img> here to keep sizing simple */}
//             <Image
//               src={"/images/images/azure.jpg"}
//               alt=""
//               fill
//               className="w-[100px] h-[10px] object-cover"
//               draggable={false}
//             />
//             {/* optional overlay tint */}
//             <div className="absolute inset-0 bg-black/20 pointer-events-none" />
//           </div>,
//           document.body
//         )
//       : null;

//   // ---------------------------------------------------------------

//   const itineraries = [
//     {
//       title: "Uganda Flying Safari",
//       image: "/images/images/UgandaFlying.png",
//       location: "Uganda",
//       duration: "9 Days",
//       difficulty: "Easy",
//       price: "$520.00",
//       description:
//         "Soar across Uganda’s skies on this unforgettable flying safari. Explore breathtaking parks, wildlife, and scenic landscapes.",
//     },
//     {
//       title: "Gorilla Trek Safari",
//       image:
//         "/images/images/UgandaGorilla-or-Rwanda-which-country-is-better-for-safari-960x720.webp",
//       location: "Bwindi",
//       duration: "5 Days",
//       difficulty: "Hard",
//       price: "$520.00",
//       description:
//         "Embark on an extraordinary adventure trekking through Uganda’s lush rainforests in search of majestic mountain gorillas.",
//     },
//     {
//       title: "Uganda Wildlife Safari",
//       image: "/images/images/queen-elizabeth-uganda-1024x681.jpg",
//       location: "Queen Elizabeth National Park",
//       duration: "13 Days",
//       difficulty: "Hard",
//       price: "$520.00",
//       description:
//         "Experience Uganda’s diverse wildlife and landscapes on this extended journey through its premier national parks.",
//     },
//     {
//       title: "Rwenzori Mountains Trek",
//       image: "/images/images/Ruwenzori-Mountains-National-Park.jpg",
//       location: "Rwenzori Mountains",
//       duration: "10 Days",
//       date: "Nov 10 - Nov 20",
//       price: "$640.00",
//       difficulty: "Hard",
//       description:
//         "Challenge yourself with an exhilarating trek through the mystical Rwenzori Mountains .",
//     },
//   ];

//   return (
//     <>
//       <section className="relative !py-20 bg-gradient-to-b from-green-50 to-green-100/30 overflow-hidden">
//         <div className="container !mx-auto !px-4">
//           <h2 className="text-center text-5xl md:!text-5xl font-extrabold text-lime-950 !mb-14">
//             Featured Itineraries
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {itineraries.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 // transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                 className="relative  rounded-xl overflow-auto  shadow-sm  shadow-green-950 bg-green-100 group cursor-pointer"
//               >
//                 {/* Image with overlay */}
//                 <div className="relative h-96">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover transition-transform duration-500 hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent  "></div>

//                   {/* Floating Info Icons */}
//                   <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
//                     <span className="flex items-center gap-1 ">
//                       <MapPin size={16} /> {item.location}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Clock size={16} /> {item.duration}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Mountain size={16} /> {item.difficulty}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Text Section */}
//                 <div className="!m-5 flex flex-col justify-between  h-52">
//                   <div>
//                     <h1 className="text-lg !font-semibold text-gray-700 !mb-2">
//                       {item.title}
//                     </h1>
//                     <p className="text-gray-600 !text-lg leading-relaxed ">
//                       {item.description}
//                     </p>
//                     <button className="!mt-4 self-start bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold !px-5 !py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>

//     //--------------------------- WITH OVERLAYNODE----------------------------
//     // <>
//     //   {overlayNode}

//     //   <section
//     //     ref={sectionRef}
//     //     className="relative w-full py-16 container mx-auto px-4 md:px-8"
//     //   >
//     //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//     //       {/* LEFT - main image (col-6) */}
//     //       <div
//     //         className="rounded-xl overflow-hidden shadow-amber-50 shadow-md "
//     //         style={{ padding: "70px" }}
//     //       >
//     //         <Image
//     //           width={1200}
//     //           height={800}
//     //           src={"/images/images/outbound.jpg"}
//     //           alt="Main"
//     //           className="w-full h-[70vh] object-cover"
//     //           loading="lazy"
//     //         />
//     //       </div>

//     //       <div
//     //         className="ml-64  mx-auto px-6 w-[900px] grid md:grid-cols-2 items-center "
//     //         style={{ marginLeft: "100px" }}
//     //       >
//     //         {/* Left content */}
//     //         <div>
//     //           <h2
//     //             className="text-4xl font-bold mb-4"
//     //             style={{ margin: "30px" }}
//     //           >
//     //             Take a Look at Our Video
//     //           </h2>
//     //           <p
//     //             className="mb-6 text-lg leading-relaxed"
//     //             style={{ margin: "30px" }}
//     //           >
//     //             Experience the world like never before with our company&apos;s
//     //             immersive and unforgettable travel adventures! Get ready for an
//     //             incredible journey which includes activities such as:
//     //           </p>

//     //           {/* Two-column list */}
//     //           <ul
//     //             className="grid grid-cols-2 gap-x-8 gap-y-3 text-base"
//     //             style={{ margin: "30px" }}
//     //           >
//     //             <li>Outdoor recreation activities</li>
//     //             <li>Airlines</li>
//     //             <li>Car Rentals</li>
//     //             <li>Cruise Lines</li>
//     //             <li>Hotels</li>
//     //             <li>Railways</li>
//     //             <li>Travel Insurance</li>
//     //             <li>Package Tours</li>
//     //             <li>Insurance</li>
//     //             <li>Guide Books</li>
//     //           </ul>

//     //           <div className="mt-6">
//     //             <Link
//     //               href="/get-started"
//     //               className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 hover:text-xl text-white font-semibold rounded-lg shadow-lg transition"
//     //               style={{ padding: "6px", margin: "10px" }}
//     //             >
//     //               Get Started
//     //             </Link>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>
//     // </>
//   );
// }

// // {/* RIGHT - copy and CTA (col-6) */}
// // <div className="flex flex-col justify-center text-black px-2 md:px-6">
// //   <h2 className="text-3xl md:text-4xl font-bold mb-4">
// //     Unforgettable Adventures
// //   </h2>
// //   <p className="text-lg text-gray-200 mb-6 leading-relaxed">
// //     Discover authentic experiences that connect you with culture,
// //     nature and people. Explore with purpose, and give back to the
// //     communities you visit.
// //   </p>
// //   <div>
// //     <Link
// //       href="/services"
// //       className="inline-block px-6 py-3 bg-green-700 hover:bg-green-800 rounded-lg shadow text-white"
// //     >
// //       Learn More
// //     </Link>
// //   </div>
// // </div>

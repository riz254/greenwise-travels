"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Kenya",
    image: "/images/Heritage Migration Jpeg.jpg",
    link: "/destinations/kenya",
  },
  {
    name: "Tanzania",
    image: "/images/climb-kilimanjaro-how-many-days-1536x1152-1.jpg",
    link: "/destinations/tanzania",
  },
  {
    name: "Uganda",
    image:
      "/images/UgandaGorilla-or-Rwanda-which-country-is-better-for-safari-960x720.webp",
    link: "/destinations/uganda",
  },
  {
    name: "Ethiopia",
    image: "/images/images/Ethiopia.png",
    link: "/destinations/rwanda",
  },
  {
    name: "Rwanda",
    image:
      "/images/Visit-Rwanda-Crater-Lake-Volcanoes-e1533416621808-1920x1267.jpg",
    link: "/destinations/rwanda",
  },
  {
    name: "Indian Ocean Islands",
    image: "/images/images/maldives.jpg",
    link: "/destinations/tanzania",
  },
  {
    name: "Southern Africa",
    image: "/images/images/VictoriaFallsSouthernAfrica.jpg",
    link: "/destinations/southern",
  },
  {
    name: "Outbound Destinations",
    image: "/images/images/outbound.jpg",
    link: "/destinations/outbound",
  },
];

export default function Destinations() {
  return (
    <section className="!p-20 ">
      <div className=" !mx-auto !px-6">
        <h2
          className="text-5xl font-semibold text-center text-green-900 mb-4"
          style={{ marginBottom: "50px" }}
        >
          Popular Destinations
        </h2>
        {/* <p>
          Discover stunning destinations, from serene beaches to towering peaks,
          vibrant cultures, and natural wonders. Bon voyage!
        </p> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Link
              href={d.link}
              key={i}
              className="group block overflow-hidden rounded shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="relative h-100 bg-gray-100"
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <h3 className="absolute bottom-6 left-6 !text-3xl font-bold text-white shadow-lg ">
                  {d.name}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default function Destinations() {
//   const destinations = [
//     { img: "/images/kenya.jpg", title: "Kenya" },
//     { img: "/images/tanzania.jpg", title: "Tanzania" },
//     { img: "/images/uganda.jpg", title: "Uganda" },
//     { img: "/images/rwanda.jpg", title: "Rwanda" },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-green-700">
//           Popular Destinations
//         </h2>
//         <div className="mt-12 grid gap-6 md:grid-cols-4">
//           {destinations.map((d, i) => (
//             <div
//               key={i}
//               className="group relative overflow-hidden rounded-lg shadow-lg"
//             >
//               <Image
//                 src={d.img}
//                 alt={d.title}
//                 className="h-60 w-full object-cover group-hover:scale-110 transition"
//               />
//               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                 <h3 className="text-white text-xl font-semibold">{d.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MapPin, Clock, Mountain } from "lucide-react";

const itinerary = [
  {
    day: "Day 1",
    title: "Walk from Magome to Tsumago",
    description: `
      Welcome to Japan! Start your journey by traveling from Kyoto or Tokyo to the
      town of Nakatsugawa by bullet train, then take a short bus ride to the village
      of Magome. From there, you'll walk along the Nakasendo Trail over the Magome
      Pass to the exquisitely preserved post town — or Edo-era rest stop — of Tsumago.
      Go back in time as you stroll through the village streets; cars aren't allowed
      on the main street and electrical wires are carefully concealed. You'll spend
      the night at a minshuku, or family-run inn, where you'll enjoy a delicious
      home-cooked meal. After dinner, stroll around town wearing the kimono-like
      yukata gown supplied by your hosts.
    `,
    meals: "BLD",
  },

  {
    day: "Day 2",
    title: "Hike from Tsumago to Nojiri",
    description: `
      Today will be the longest hike of the trip, taking you along a beautiful section
      of trail from Tsumago to the post station of Nojiri. The 11.5-mile (18 km) path
      snakes through valleys and bamboo and cedar forests, offering some of the most
      unspoiled scenery of the trip. The walk should take around six hours.

      Alternatively, choose a shorter, one-hour walk to the village of Nasigo. Then
      hop on the train to Kiso-Fukushima, where you'll stay at a traditional inn, or
      ryokan, for the night. The ryokan is set in a tranquil valley and features both
      indoor and outdoor hot spring baths for you to relax in.
    `,
    meals: "BLD",
  },

  {
    day: "Day 3",
    title: "Traverse the Torii Pass to Narai",
    description: `
      This morning you'll have the option of challenging yourself to a somewhat steep,
      circular hike to a serene local waterfall. This two to three-hour walk is 4.3
      miles long (7 km) with an ascent of 2,075 feet (632 meters). Otherwise, hop on
      the train to Yabuhara and traverse the Torii Pass on a three-hour hike through
      the forest to get to the village of Narai. This post station marks the center of
      the Nakasendo Trail. Explore the village before checking into your minshuku,
      where you'll enjoy another home-cooked dinner.
    `,
    meals: "BLD",
    hotels: [],
  },

  {
    day: "Day 4",
    title: "Visit Matsumoto Castle",
    description: `
      After breakfast, walk to the nearby town of Kiso-Hirasawa. Wander around the
      small shops selling beautifully crafted lacquered furniture and tableware. Then
      board the train to the fascinating Matsumoto Castle, which dates back to the
      late 1500s. Continue by train to the town of Karuizawa or Komoro, where you'll
      spend the final night of the trip. Both towns feature historical inns with
      traditional Japanese baths. Regardless of where you stay tonight, you'll enjoy a
      dinner prepared with locally grown ingredients.
    `,
    meals: "BLD",
    hotels: [],
  },

  {
    day: "Day 5",
    title: "Hike the Usui-toge Pass - Depart Tokyo",
    description: `
      The final stretch of the adventure leads you from Karuizawa to Yokokawa. Hike
      over the high plateaus of the Usui-toge Pass to a gentle descent along one of
      the most pristine parts of the trail. Take in the gorgeous mountain views on
      this 10-mile (16.7km) trek. You can choose to take a taxi for part of the way.
      In Yokokawa, you'll board the train and make your way back to Tokyo, arriving in
      the early evening. Transfer to the airport to catch a flight out. Safe travels!
    `,
    meals: "BLD",
    hotels: [],
  },
];

export default function ItinerariesPage() {
  const [activeTab, setActiveTab] = useState("Luxury");

  return (
    <>
      <Navbar />

      {/* Showcase Section */}
      <section className="h-[85vh] flex items-center justify-center text-center text-white overflow-hidden w-full relative">
        <Image
          src="/images/images/nakasendotrail2-1660023798188.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">
            Nakasendo Trail Hike - Japan
          </h2>
          <p className="text-lg">
            Uncover cultural gems, savor culinary delights, and embark on
            adventures tailored to create unforgettable travel experiences.
          </p>
        </div>
      </section>
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="flex bg-green-50 min-h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-1/4 h-screen !p-6 bg-green-100 border-r border-green-200 sticky top-0">
          {/* Tabs */}
          <div className="!mb-6">
            <div className="flex justify-around bg-white rounded-lg shadow !p-2">
              {["Luxury", "Midrange", "Budget"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`!px-4 !py-2 rounded-md font-medium transition ${
                    activeTab === tab
                      ? "bg-green-600 text-white"
                      : "bg-green-100 hover:bg-green-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Sticky Links */}
          <nav className="!space-y-3">
            {[
              "Overview",
              "Detailed Itinerary",
              "Map",
              "Inclusions",
              "Exclusions",
              "Activities",
              "Related Trips",
            ].map((section) => (
              <div key={section} className="bg-white  shadow-sm">
                <a
                  href={`#${section.toLowerCase().replace(/\s/g, "")}`}
                  className="block !px-4 !py-5 text-green-700 font-medium hover:bg-green-200"
                >
                  {section}
                </a>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        {/* Main Content */}
        <main className="flex-1 !px-4 md:!px-10 !mt-20 overflow-x-hidden">
          <section id="overview">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 !mb-4">
              5 Days hiking Japan&apos;s Nakasendo Trail{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Step back in time and immerse yourself in nature on this five-day
              hiking trip along the historic Nakasendo Trail. Feudal lords and
              samurai once walked this mountain path connecting Kyoto and Tokyo,
              stopping to rest in historic jukus, or Edo-era post towns, each
              night. You&apos;ll follow in their footsteps as you trek through
              picturesque valleys, explore idyllic villages, sleep in
              traditional inns, and relax in the thermal waters of hot springs
              along the hike. s
            </p>
          </section>

          <div className="!p-6 md:!p-8 bg-green-50 min-h-screen w-full overflow-x-hidden">
            <h2 className="text-3xl font-bold text-lime-900 !mb-6">
              DETAILED ITINERARY
            </h2>

            <Accordion type="multiple" className="w-full font-bold !space-y-4">
              {itinerary.map((day, index) => (
                <AccordionItem
                  key={index}
                  value={`day${index + 1}`}
                  className=" text-green-700 font-medium hover:bg-green-50 !p-3"
                >
                  <AccordionTrigger className="block !px-4 !py-5 text-green-700 w-full font-semibold text-xl hover:bg-green-200">
                    {day.day}: {day.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {day.mainImage && (
                      <div className="!my-4 flex justify-center">
                        <Image
                          // src={`/${day.mainImage}`}
                          src={day.mainImage}
                          alt={day.day}
                          width={600}
                          height={400}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    )}
                    <p className="text-gray-700 !mb-4">{day.description}</p>

              
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* MAP SECTION */}
          <section id="map" className="!mb-10">
            <h4 className="text-3xl font-bold text-green-800 !mb-20 ">MAP</h4>
            <div className=" justify-center ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d822508.3289774107!2d137.57160317019103!3d36.36264007399671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x601dc2157bb15529%3A0x1031e8c5b5e0f5ad!2sTsumagoi%2C%20Gunma%2C%20Japan!3m2!1d36.5168949!2d138.53022339999998!4m5!1s0x5ff6230b4ab524d3%3A0x2146b216832e389e!2sNojiri%2C%20Shinano%2C%20Nagano%2C%20Japan!3m2!1d36.8231179!2d138.2228409!4m5!1s0x601ce14159b71cef%3A0x40ba0a1f123bde76!2sNarai%2C%20Shiojiri%2C%20Nagano%2C%20Japan!3m2!1d35.9095563!2d137.8328517!4m5!1s0x601d1400e84368c7%3A0xcb8d6d363210cddd!2sMatsumoto%2C%20Nagano%2C%20Japan!3m2!1d36.238043399999995!2d137.9719897!4m5!1s0x601dd58dd24d6b91%3A0x6c2ba1f088719815!2sUsui%20Pass%20Observation%20Platform%2C%20T%C5%8Dgemachi%2C%20Karuizawa%2C%20Nagano%2C%20Japan!3m2!1d36.3672721!2d138.6564275!5e0!3m2!1sen!2ske!4v1734109409394!5m2!1sen!2ske"
               
                width="800"
                height="450"
                style={{ border: 0 }}
                // allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg !mt-20 "
              ></iframe>
            </div>
          </section>

          {/* INCLUSIONS */}
          <section id="inclusions" className=" !mt-32 !mb-10">
            <h4 className="text-2xl font-bold text-green-800 !mb-4">
              INCLUSIONS
            </h4>
            <ul className="list-disc list-outside !m-5 text-lg !space-y-2 text-gray-700">
              {[
                "Pick-up and drop-off from the Airport.",
                "4x4 safari vehicle with an experienced guide.",
                "Complimentary Authentic Branded Safari Hat and essentials pack.",
                "Full board in camps or lodges.",
                "Unlimited game drives.",
                "All meals as per itinerary.",
                "Park Entry Fees.",
                "Unlimited supply of drinking water while on safari.",
                "Visits to Maasai villages.",
                "Complimentary AMREF Flying Doctors Medical Evacuation cover while on safari.",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* EXCLUSIONS */}
          <section id="exclusions" className=" !mb-10">
            <h4 className="text-2xl font-bold text-green-800 !mb-4">
              EXCLUSIONS
            </h4>
            <ul className="list-disc list-inside text-lg !m-5 !space-y-2 text-gray-700">
              {[
                "Personal Expenses: Souvenirs, tips, laundry, etc.",
                "Any items not expressly specified in the itinerary.",
                "Optional Activities: Hot air balloon safari, nature walks, etc.",
                "Travel insurance cover.",
                "International flight, passport & visa fees.",
                "Gratuities: For drivers/guides and lodge staff.",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* ACTIVITIES */}
          <section id="activities" className="custom-block !mb-10">
            <h4 className="text-2xl font-bold text-green-800 !mb-4">
              ACTIVITIES
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <ul className="list-disc text-lg list-inside !space-y-2">
                {[
                  "Game Drives",
                  "Sundowners",
                  "Bird Watching",
                  "Bush Breakfast or Dinner",
                  "Hot-Air Balloon Safari",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul className="list-disc text-lg list-inside !space-y-2">
                {[
                  "Cultural Engagement",
                  "River Excursions",
                  "Camel Riding",
                  "Flamingo Viewing",
                  "Fly Camping",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* RELATED SAFARIS */}
          <section id="related" className="custom-block mb-20">
            <h4 className="text-2xl font-bold text-green-800 mb-6">
              RELATED SAFARIS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                            {
    title: "Samburu-Nakuru-Mara",
    image: "/images/lake-nakuru-flamingoes.jpg",
    location: "Lake Nakuru",
    duration: "8 Days",
    difficulty: "Easy",
    description:
      "From Samburu’s wilderness to the Mara’s great plains — a true Kenyan adventure.",
    country: "Kenya",
    link: "/itineraries/KenyaSamburuNakMara",
  },
{
    title: "Tanzania - Zanzibar Tour",
    image: "/images/images/sports-nautiques-tanzanie-planche-a-voile.jpg",
    location: "Zanzibar",
    duration: "14 Days",
    dates: "August 15 - August 30",
    difficulty: "Easy",
    description:
      "From safaris to turquoise beaches and water adventures along the Indian Ocean.",
    country: "Tanzania",
    link: "/itineraries/TanZanzibar",
  },
{
    title: "Namibia",
    image: "/images/images/namibia-sossuvlei.jpg",
    location: "Sossusvlei",
    duration: "6 Days",
    difficulty: "Medium",
    description:
      "Witness Namibia’s dramatic dunes and surreal desert landscapes.",
    country: "Southern Africa",
        link: "/itineraries/SouthernNamibia",

  },
              ].map((safari, index) => (
                <a key={index} href={safari.link}>
                  <div className="relative h-80">
                    <Image
                      src={safari.image}
                      alt={safari.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} /> {safari.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} /> {safari.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mountain size={16} /> {safari.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="!m-5 flex flex-col justify-between h-fit">
                    <div>
                      <h1 className="text-xl font-semibold text-gray-950 !mb-2">
                        {safari.title}
                      </h1>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {safari.description}
                      </p>
                      <button className="!mt-4 self-start bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold !px-5 !py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                  {/* </div> */}
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

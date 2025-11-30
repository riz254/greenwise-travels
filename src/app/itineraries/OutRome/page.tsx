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
    title: "Arrive in Rome",
    description: `
      Welcome to Rome, City of the Seven Hills! According to legend, Rome was founded
      by brothers Romulus and Remus in 753 BCE atop Rome's Palatine Hill. The
      long-time center of the powerful Roman Empire, Rome boasts nearly 3,000 years of
      architecture, history, and culture.

      After arriving at one of Rome's airports, you'll transfer to your hotel in the
      historic center. Settle in and relax, then head out for a stroll and your first
      look at the Eternal City. Your next few days will involve lots of sightseeing,
      so check out some of Rome's landmarks and sites.
    `,
    meals: "—",
    hotels: [],
  },

  {
    day: "Day 2",
    title: "Guided Tour of the Colosseum & City Bike Tour",
    description: `
      Head out for a full-day guided city tour. Start with the Colosseum and travel
      back in time to relive the grandeur of the Roman Empire. Learn about some of
      ancient Rome's most famous and illustrious citizens, such as Julius Caesar,
      Emperors Augustus and Nero, and the Flavian Emperors who built the Colosseum.

      Begin your tour at the Arch of Constantine, erected in honor of the Emperor in
      315 CE. Continue into the amphitheater to explore the history and hear stories
      of gladiators and animals, battles, and executions that took place inside its
      walls.

      Afterward, join a three-hour bike tour to see the city's main attractions—the
      central Piazza Navona, the beautiful Trevi Fountain, and the iconic Pantheon.
    `,
    meals: "BLD",
    hotels: [],
  },

  {
    day: "Day 3",
    title:
      "Tour the Vatican Museum & Sistine Chapel, Boat Tour on the Tiber River",
    description: `
      In the morning, make your way to the Vatican Museum to tour the world-famous
      Sistine Chapel and St. Peter's Basilica to see the masterpieces of Michelangelo
      and Bernini. This is considered one of Rome's top attractions.

      At the end of the tour, hop on a tour boat to explore the city banks from the
      Tiber River. Admire Rome's most famous bridges: Umberto I Bridge, Regina
      Margherita Bridge, Sant'Angelo Bridge, Mazzini Bridge, Sisto Bridge, and the
      Garibaldi Bridge.

      Later, head out into the city for some more sightseeing. Stroll through a city
      square, enjoy dinner at an open-air café, shop for souvenirs, or simply relax in
      the shade with a fresh coffee.
    `,
    meals: "BLD",
    hotels: [],
  },

  {
    day: "Day 4",
    title: "Art & Food in Rome",
    description: `
      In the late morning, join a guided tour of one of the world's premier art
      museums to see works by extraordinary artists Bernini, Caravaggio, Canova, and
      Rafaello. The gallery's highlights include sculptures and paintings from
      Cardinal Scipione Borghese's collection (1579 - 1633). Admire Caravaggio's most
      important paintings, including "Boy with Basket of Fruit," and see Bernini and
      Canova's sculpture collection, boasting works such as "Apollo and Daphne" and
      "David." Rafaello's "Entombment of Christ" is also a must-see.

      Walk through the ornate rooms of the Galleria Borghese and explore the splendid
      frescoes, stories, and masterful techniques behind the world's most beautiful
      art museums. End the tour with a peaceful stroll around the Villa Borghese
      gardens.

      In the afternoon, enjoy a fun cooking lesson on the banks of the Tiber River as
      you learn to prepare a traditional Italian pizza. Afterward, unwind as you enjoy
      your delicious handmade dinner with a glass of local wine.
    `,
    meals: "BLD",
    hotels: [],
  },

  {
    day: "Day 5",
    title: "Depart Rome",
    description: `
      Time to say goodbye to Rome—for now! After one last Roman breakfast, you'll
      transfer to the airport for your flight home. Safe travels!
    `,
    meals: "BL",
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
          src="/images/images/Rome.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">5 Days in Rome </h2>
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
              5 Days in Rome{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Discover historical and modern highlights of the Eternal City in
              this five-day tour. Hear stories of gladiators in Rome&apos;s ancient
              Colosseum, tour the iconic Pantheon, and visit the Vatican Museum
              to see the world-famous Sistine Chapel. Explore the Galleria
              Borghese to see works by Rafaello and Caravaggio, then stroll
              around the peaceful gardens of Villa Borghese. Enjoy a quiet cup
              of coffee in the Piazza Navona and unwind at night with a homemade
              Italian pizza and a glass of wine.
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

                    {day.hotels && day.hotels.length > 0 && (
                      <>
                        <h3 className="text-green-700 text-lg font-semibold !mb-4 text-center">
                          WHERE TO STAY
                        </h3>

                        {/* ✅ Swiper for Hotels */}
                        <div className="w-full max-w-6xl !mx-auto">
                          <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            slidesPerGroup={1}
                            // navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            loop={true}
                            breakpoints={{
                              0: { slidesPerView: 1 },
                              768: { slidesPerView: 2 },
                              1024: { slidesPerView: 3 },
                            }}
                            className="gallery-swiper w-full"
                          >
                            {day.hotels.map((hotel) => (
                              <SwiperSlide key={hotel.name}>
                                <div className="bg-white rounded-lg shadow-lg h-100 !p-4 hover:shadow-xl transition">
                                  <Image
                                    src={hotel.image}
                                    // src={`/${hotel.image}`}
                                    alt={hotel.name}
                                    width={300}
                                    height={200}
                                    className="rounded-md !mb-3 object-cover w-full h-48"
                                  />
                                  <h4 className="font-semibold text-xl text-green-800">
                                    {hotel.name}
                                  </h4>
                                  <p className="text-gray-600 !text-base !mt-2">
                                    {hotel.description}
                                  </p>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </>
                    )}
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

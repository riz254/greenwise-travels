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
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MapPin, Clock, Mountain } from "lucide-react";

const itinerary = [
  {
    day: "Day 1: Lucerne",
    description: [
      "Arrive in Zurich and hop on to a train for Lucerne, which takes roughly 1.15 hours. Your day will depend on your arrival time into Lucerne.",
      "Head out to explore the city at your own pace. Start with old town by crossing over the famous Chapel Bridge and walk on the cobbled stone streets.",
      "As you wind your way through these narrow roads, it will lead you to the famous Lion Monument. From here head back walking along the lake. If you have already started pining for chocolate, you will find many local chocolatiers along this walk so make sure to pop into them.",
    ],
  },

  {
    day: "Day 2: Lucerne – Mount Titlis",
    description: [
      "Take a train from Lucerne train station to Engelberg (45 minutes), a beautiful Swiss village located at the base of Mount Titlis.",
      "Walk 15 minutes or take a bus to the cable car valley station for Titlis. Take two cable cars including the revolving Titlis Rotair.",
      "On top, enjoy activities like the Ice Flyer Chairlift, the Ice Cave and the Titlis Cliff Walk.",
      "Return to Engelberg early to explore the village before heading back to Lucerne.",
    ],
    meals: "BLD",
  },

  {
    day: "Day 3: Lucerne – Interlaken – Jungfraujoch",
    description: [
      "Visit Jungfraujoch – Top of Europe, the highest train station in Europe. It is advisable to leave Lucerne early (7–8 AM).",
      "Take the scenic Lucerne–Interlaken Express (2 hours), check in, then proceed to Jungfraujoch.",
    ],
    meals: "BLD",
  },

  {
    day: "Day 4: Interlaken – Montreux and Gstaad",
    description: [
      "Travel early to Gstaad via the Golden Pass Line (1.5 hours). The idyllic village with wooden chalets attracts the rich and famous.",
      "Proceed to Montreux on Lake Geneva. Visit the botanical garden, Freddie Mercury statue, and Chillon Castle.",
      "Return to Gstaad and check in.",
    ],
    meals: "BLD",
  },

  {
    day: "Day 5: Interlaken – Zermatt",
    description: [
      "Travel to Zermatt (2.10 hours), a car-free ski village famous for the Matterhorn.",
      "Visit the Matterhorn Glacier Paradise. The cable car ride offers spectacular views.",
      "Explore the Ice Palace, enjoy a Swiss meal, and take photos before returning down.",
      "Note: Hotels may offer complimentary or paid pickups.",
    ],
    meals: "BLD",
  },

  {
    day: "Day 6: Zermatt",
    description: [
      "Explore the charming Swiss village. Walk around the village center with souvenir shops, cafes and boutiques.",
      "Visit Hinterdorf, Zermatt’s historic old town.",
      "Take the funicular to Sunnegga for one of the best Matterhorn views. Optional activities include the Marmot Trail, Wolli Adventure Park, or kick biking.",
    ],
    meals: "BLD",
  },

  {
    day: "Day 7: Zermatt – St. Moritz",
    description: [
      "Ride the world-famous Glacier Express from Zermatt to St. Moritz (7h45m).",
      "This scenic route includes snow, glaciers, valleys, gorges, and stunning viaducts.",
      "Book seats early—this train sells out.",
      "St. Moritz offers luxurious spas, hotels, and world-class ski slopes.",
    ],
    meals: "BLD",
  },

  {
    day: "Day 8: St. Moritz – Lugano",
    description: [
      "Travel from snowy St. Moritz to Mediterranean-style Lugano on the Bernina Express.",
      "The journey includes both train and bus and passes through UNESCO World Heritage areas.",
      "Reservations are required. Swiss Travel Pass holders receive discounted rates.",
    ],
    meals: "BLD",
  },

  {
    day: "Day 9: Lugano – Lake Como",
    description: [
      "Cross into Italy to visit Lake Como (45 minutes by train).",
      "Explore the lake, walk around the town, or shop for locally famous silk.",
      "Return to Lugano in the evening.",
      "Note: Swiss Travel Pass does not cover this journey.",
    ],
  },

  {
    day: "Day 10: Lugano – Zurich",
    description: [
      "Travel to Zurich (2 hours). Store your bags at the main station and visit the Rhine Falls.",
      "Take a boat ride to the center of the falls or enjoy the views from viewing decks.",
      "Return to Zurich and walk down Bahnhofstrasse for high-end shopping.",
      "Relax at the lakefront before returning to collect your bags and head to the airport.",
    ],
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
          src="/images/images/swiss-Alps.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">10 Days in Switzerland</h2>
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
              10 Days in Switzerland{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              10 days in Switzerland is perfect for the lazy traveler seeking
              nothing except the view outside his window or the enthusiastic
              traveler wanting everything he can possibly do with land, air and
              water. With 10 days in hand you can not only to cover the main
              Swiss attractions but also have some leisure time to go off the
              beaten path or just walk around soaking in all the beauty. If you
              are coming in with an international flight, you will most likely
              land in Zurich so let’s start an itinerary based on this. For your
              travel across the country, it would be best to arrive with a pre
              purchased Swiss Pass so that you can directly hop on to a train
              from the Zurich airport train station without having to wait in
              line and buy tickets or passes when all you want to do is head for
              your destination after a long flight. Keep in mind that local
              travel in Switzerland is quite pricey. The pass will cover all
              public transport, give discounts on mountain trips, free entrance
              to museums and is totally free for kids under 16!
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
                src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d1401434.1161820316!2d7.07349318398416!3d46.682527081048455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x478ffa2a79547379%3A0xaef02ad1409952af!2sLucerne%2C%20Switzerland!3m2!1d47.050168199999995!2d8.3093072!4m5!1s0x478f35a2292ee5cd%3A0x400ff8840196f70!2sZermatt%2C%20Switzerland!3m2!1d46.0207133!2d7.749117!4m5!1s0x47842df76a4211f1%3A0xef8c04212ea1f8e0!2sLugano%2C%20Switzerland!3m2!1d46.0036778!2d8.951051999999999!4m5!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2sZ%C3%BCrich%2C%20Switzerland!3m2!1d47.3768866!2d8.541694!5e0!3m2!1sen!2ske!4v1734110527884!5m2!1sen!2ske"
               
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

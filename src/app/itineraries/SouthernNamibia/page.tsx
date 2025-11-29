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
    day: "DAY 1",
    title: "Victoria Falls",
    description: `Welcome to Zimbabwe and the mighty Victoria Falls. Your trip begins with a welcome meeting at 6 pm. If you arrive early, you can check out optional activities around Victoria Falls. The Zimbabwe side offers the broadest view of this colossal natural wonder, and scenic helicopter flights are incredible. As this trip doesn’t include activities in and around Victoria Falls, it’s recommended to organise optional activities ahead of time and arrive earlier.`,
    meals: null,
    mainImage: "/images/images/VictoriaFallsSouthernAfrica.jpg",
    hotels: [
      {
        name: "The Victoria Falls Hotel",
        description:
          "A historic luxury hotel offering timeless elegance, stunning views of the falls, and world-class service.",
        stars: 5,
        image: "/images/images/VictoriaFallsHotel.jpg",
      },
      {
        name: "Ilala Lodge Hotel",
        description:
          "A boutique hotel conveniently located near the falls, featuring luxurious rooms, exceptional dining, and a warm ambiance.",
        stars: 4,
        image: "/images/images/IlalaLodge.jpg",
      },
      {
        name: "Shearwater Explorer's Village",
        description:
          "An affordable yet comfortable option with modern amenities and close proximity to the falls and other attractions.",
        stars: 3,
        image: "/images/images/ShearwaterExplorerVillage.jpg",
      },
      {
        name: "Nguni Lodge",
        description:
          "A charming lodge offering a serene retreat, excellent service, and a true African safari experience near Victoria Falls.",
        stars: 4,
        image: "/images/images/NguniLodge.jpg",
      },
      {
        name: "Batonka Guest Lodge",
        description:
          "A peaceful lodge featuring beautifully appointed rooms, lush gardens, and excellent hospitality, just a short drive from the falls.",
        stars: 4,
        image: "/images/images/BatonkaGuestLodge.jpg",
      },
    ],
  },
  {
    day: "DAY 2",
    title: "Hwange National Park",
    description: `If you haven’t seen Victoria Falls yet, this morning is your last opportunity at opening time (6 am from Sep-Apr and 6.30 am from May-Aug). Then, head to Hwange National Park to learn about wildlife rescue, human-wildlife conflict, and anti-poaching efforts. Spend the afternoon exploring the park in an open 4WD vehicle with expert local guides, spotting elephants and other wildlife.`,
    meals: "BLD",
    mainImage: "/images/images/HwangeNationalPark.jpg",
    hotels: [],
  },
  {
    day: "DAY 3",
    title: "Matobo National Park",
    description: `Leave Hwange for Matobo National Park. Stop at the Painted Dog Conservation Centre to learn about efforts to protect the endangered African wild dog. Continue to Bulawayo for lunch before arriving at your camp for the next two nights. Matobo is home to black and white rhinos and the grave of Cecil John Rhodes. Explore the spiritual and cultural sites of the park.`,
    meals: "BLD",
    mainImage: "/images/images/MatoboNationalPark.jpg",
    hotels: [],
  },
  {
    day: "DAY 4",
    title: "Matobo National Park",
    description: `Track white rhinos on foot with an expert guide, spot other wildlife including klipspringers, leopards, warthogs, and springhares. Learn about local plants and trees while discovering San paintings and the park’s rock formations. In the afternoon, visit a nearby village to meet locals and learn about traditional life.`,
    meals: "BLD",
    mainImage: "/images/images/MatoboNationalPark2.jpg",
    hotels: [],
  },
  {
    day: "DAY 5",
    title: "Tshipise",
    description: `Cross the Zimbabwe–South Africa border to your camping site on the edge of Honnet Nature Reserve. Relax and enjoy the facilities, including indoor/outdoor pool, putt-putt, nature trail, and optional game drives.`,
    meals: "BD",
    mainImage: "/images/images/Tshipise.jpg",
    hotels: [],
  },
  {
    day: "DAY 6",
    title: "Makushu Village",
    description: `Arrive in Makushu village, Limpopo Province. Meet local village guides and stay with homestay host mothers. Participate in beading, dancing, beer tasting, and cooking. Learn about traditional Venda ways and interact with villagers.`,
    meals: "BLD",
    mainImage: "/images/images/MakushuVillage.jpg",
    hotels: [
      {
        name: "Mutale Falls Safari Camp",
        description:
          "A tranquil safari camp offering rustic accommodations, breathtaking views of the Mutale River, and close access to Makushu's natural attractions.",
        stars: 4,
        image: "/images/images/MutaleFallsSafariCamp.jpg",
      },
      {
        name: "Pafuri Border Camp",
        description:
          "A peaceful retreat near Kruger National Park, offering comfortable accommodations and exceptional wildlife experiences.",
        stars: 4,
        image: "/images/images/PafuriBorderCamp.jpg",
      },
      {
        name: "Nyala Safari Lodge",
        description:
          "A luxurious safari lodge featuring private chalets, excellent game-viewing opportunities, and warm South African hospitality.",
        stars: 5,
        image: "/images/images/NyalaSafariLodge.jpg",
      },
      {
        name: "Mutale Drift Safari Lodge",
        description:
          "An eco-friendly lodge offering scenic river views, guided bush walks, and a peaceful atmosphere for nature enthusiasts.",
        stars: 4,
        image: "/images/images/MutaleDriftSafariLodge.jpg",
      },
      {
        name: "Shiluvari Lakeside Lodge",
        description:
          "A serene lakeside lodge offering cozy accommodations, local cuisine, and a perfect base for exploring the Makushu area.",
        stars: 4,
        image: "/images/images/ShiluvariLakesideLodge.jpg",
      },
    ],
  },
  {
    day: "DAY 7",
    title: "Greater Kruger National Park",
    description: `Journey towards Greater Kruger National Park. Camp at the Black Mambas headquarters just outside Kruger. Join the all-female anti-poaching unit on a bush walk to learn about snare removal. Enjoy dinner by lantern light and relax by the campfire listening to their stories.`,
    meals: "BLD",
    mainImage: "/images/images/GreaterKruger.jpg",
    hotels: [],
  },
  {
    day: "DAY 8",
    title: "Kruger National Park",
    description: `Embark on a full day 4WD game drive in Kruger National Park. Spot over 500 bird species, 100 reptile species, and 150 mammal species, including the Big Five and African wild dog. In the evening, enjoy a night drive to spot nocturnal wildlife like nightjars, servals, and owls.`,
    meals: "BLD",
    mainImage: "/images/images/KrugerNationalPark.jpg",
    hotels: [],
  },
  {
    day: "DAY 9",
    title: "Johannesburg",
    description: `Travel to Johannesburg, stopping at the 3 Rondavals viewpoint over Blyde River Canyon and Bourke's Luck Potholes. Your African safari adventure ends upon arrival in Johannesburg. For extensions, speak to your booking agent.`,
    meals: null,
    mainImage: "/images/images/Johannesburg.jpg",
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
          src="/images/images/VictoriaFallsSouthernAfrica.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">Victoria Falls - Kruger </h2>
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
              9 Days Safari in three epic game parks from Zimbabwe to South
              Africa{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Experience three of southern Africa’s most phenomenal game-viewing
              sites in search of the world’s most spectacular wildlife – Hwange
              National Park, Kruger National Park and Matobo National Park.
              Spend nine days in search of the Big Five (that’s lions, leopards,
              rhinos, elephants and buffalo) and more on this journey through
              South Africa and Zimbabwe. Plus, you’ll enjoy time in a
              traditional village in the Limpopo province and visit South
              Africa&apos;s modern capital – all the while uncovering Africa&apos;s
              incredible and diverse natural beauty.
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
                                    // src={`/${hotel.image}`}
                                    src={hotel.image}
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
                src="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d7644242.898652537!2d18.63439404198852!3d-20.688266037899744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x194fe53f0d97964b%3A0xb5064359416ab317!2sVictoria%20Falls%2C%20Zimbabwe!3m2!1d-17.9315803!2d25.8301677!4m5!1s0x1b8d5a94471253d3%3A0x5ada1fa25e0603c0!2sEtosha%20National%20Park%2C%20Namibia!3m2!1d-18.8555909!2d16.3293197!4m5!1s0x1ec58f37ee60424f%3A0x9d057eebdc92a65c!2sTshipise%2C%20South%20Africa!3m2!1d-22.5313892!2d30.6756076!4m5!1s0x1ec60f5aaf355147%3A0x4f908c51db962159!2sMakushu%2C%20South%20Africa!3m2!1d-22.7634635!2d30.0538259!4m5!1s0x1ec34896c535a0a1%3A0x9a504ed31f67787b!2sKruger%20National%20Park%2C%20South%20Africa!3m2!1d-23.9883848!2d31.554740199999998!5e0!3m2!1sen!2ske!4v1734108234035!5m2!1sen!2ske"
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
                  title: "Uganda Wildlife Safari",
                  image: "/images/images/queen-elizabeth-uganda-1024x681.jpg",
                  duration: "13 Days",
                  dates: "Sept 15 - Sept 28",
                  price: "$520.00",
                  location: "Uganda",
                  difficulty: "Medium",
                  link: "/itineraries/UgandaWildlifeSafari",
                },
                {
                  title: "Migration Safari",
                  image: "/images/images/MaraMigration.jpg",
                  duration: "13 Days",
                  dates: "October 1 - October 14",
                  price: "$520.00",
                  location: "Mara",
                  difficulty: "Easy",
                  link: "/itineraries/KenyaMaraMigration.html",
                },
                {
                  title: "Kenya-Zanzibar",
                  location: "Zanzibar",
                  difficulty: "Easy",
                  image: "/images/images/zanzibar.jpg",
                  duration: "12 Days",
                  dates: "January 15 - January 27",
                  price: "$520.00",
                  link: "/itineraries/KenyaZan",
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

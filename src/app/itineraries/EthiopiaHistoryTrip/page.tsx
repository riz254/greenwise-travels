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

export const itinerary = [
  {
    day: "Day 1 - Addis Ababa",
          mainImage: "/images/images/Addis-Ababa.jpg",

    image: "/images/Addis-Ababa.jpg",
    description: `
You will be transferred to your hotel when you arrive in Addis Ababa. Start your journey to the National Museum, which houses the well-known fossil Lucy and Ethiopia&apos;s extensive history. Proceed to the Ethnological Museum located in the former palace of Haile Selassie. Visit the Holy Trinity Cathedral and head to Entoto for panoramic views of the city.
`,
  },

  {
    day: "Day 2 - Addis Ababa → Bahir Dar",
    image: null,
    description: `
Fly from Addis Ababa to Bahir Dar. Visit Blue Nile Falls and the power station, then take a trek to the Portuguese bridge. Later enjoy a boat trip on Lake Tana, visiting monasteries and observing birds and possibly hippos.
Meals: LDBB
`,
  },

  {
    day: "Day 3 - Bahir Dar → Gondar",
    image: null,
    description: `
Drive from Bahir Dar to Gondar. After lunch visit Emperor Fasilides&apos; castles, Debre Berhan Selassie Church with its famous murals, and the Bath of Fasilides.
Meals: LDBB
`,
  },

  {
    day: "Day 4 - Day trip to Semien Mountain",
    image: null,
    description: `
After breakfast, drive 3 hours to visit the only natural world heritage site in Ethiopia, the Simien Mountains National Park. Enjoy dramatic scenery and see endemic wildlife such as the Gelada Baboons and various bird species. Lunch at Simien Lodge. Return to Gondar for dinner and overnight.
Meals: BLD
`,
  },

  {
    day: "Day 5 - Gondar → Lalibela",
    image: null,
    description: `
Fly from Gondar to Lalibela. After lunch at the hotel, visit the magnificent rock-hewn churches of Lalibela, a UNESCO World Heritage Site. Explore the first group of churches — Bete Medehanialem, Bete Maryam, Bete Meskel, Bete Denagil, Debre Sina we Golegota — and St. George.
Optional Activity: Ethiopian Coffee Ceremony
Meals: BLD
`,
  },

  {
    day: "Day 6 - Lalibela → Addis Ababa",
    image: null,
    description: `
After breakfast, visit the second group of churches including Bete Emanual, Bete Gabriel, Bete Merkorious, and Aba Libanos. Return to the hotel for checkout and transfer to the airport for your flight back to Addis Ababa.
Meals: BLD
`,
  },
  {
    day: "Day 7 - Addis Ababa → Jinka",
    image: null,
    description: `
Fly from Addis Ababa to Jinka on Ethiopian Airlines. After checking into your hotel, visit Jinka’s Museum or Ari Village in the afternoon as preparation for the cultural experiences ahead.

Jinka is a market town in southern Ethiopia located north of the Tama Plains. It is the capital of the Ari Zone of the South Ethiopia Regional State and home to at least sixteen indigenous ethnic groups. It is a major tourist destination known for its vibrant culture and unique tribal communities.

Meals: BLD
`,
  },

  {
    day: "Day 8 - Jinka → Turmi",
    image: null,
    description: `
After breakfast, drive to Mago National Park to visit the Mursi village, known for their distinctive lip and earlobe plates. Continue driving to Turmi, home of the Hamer people.

On the way, stop in Dimeka for the local market (held on Tuesdays and Saturdays). This is one of the most colorful markets in the South Omo region and is visited by the Hammer, Benna, Karo, Tsemai, and Ari tribes.

Meals: BLD
`,
  },

  {
    day: "Day 9 - Turmi → Jinka → Addis Ababa",
    image: null,
    description: `
Wake up early and drive from Turmi to Jinka, where breakfast will be served. After breakfast, transfer to Jinka Airport for your flight back to Addis Ababa.

In the evening, enjoy a farewell party featuring a cultural dinner with a traditional buffet and local drinks to fully experience Ethiopian hospitality. After the celebration, transfer to Bole International Airport for your international departure.
`,
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
          src="/images/images/ETH_Lalibela_JPEG_Hero_ETH_Lalibela-1.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">
            Ethiopian History and Cultural Tour
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
              9-Day Ethiopian History and Cultural Tour{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Experience Ethiopia&apos;s rich history during this nine-day trip.
              Discover the magnificent Simien Mountains, the royal castles of
              Gondar, the rock-hewn churches of Lalibela, and the historic
              sights of Addis Ababa. Explore the monasteries of Lake Tana and
              the Blue Nile Falls in Bahir Dar before exploring the historic
              riches of Axum. There is an ideal fusion of culture, history, and
              stunning scenery.
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
                      {day.day}
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
                src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d8060154.807470264!2d32.41192667078219!3d9.454464659784723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!3m2!1d9.0191936!2d38.7524635!4m5!1s0x1669c1d46d16f89d%3A0x770284df7312622d!2sSimien%20Mountains%20National%20Park%2C%20Ethiopia!3m2!1d13.2027138!2d37.887647699999995!4m5!1s0x17a5a9826e0174c5%3A0x50d4119536afd74e!2sJinka%2C%20Ethiopia!3m2!1d5.7861984!2d36.5655964!5e0!3m2!1sen!2ske!4v1734098459574!5m2!1sen!2ske"
  
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="800"
                height="450"
                style={{ border: 0 }}
                // allowFullScreen
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

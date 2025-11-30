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
    day: "Day 1 : Drive from Addis Ababa – Bale Mountains",
    mainImage: "/images/images/Addis-Ababa.jpg",

    description:
      "You will drive from Addis to the Bale Mountains National Park. You will arrive at the park headquarters in the afternoon and experience a game drive activity in time for a leisurely afternoon hike, possibly spotting two endemic mammals that frequent the area: Menelik’s bushbuck and the Mountain Nyala. Birds in this area include the blue-winged Goose, the spot-breasted Lapwing, the Abyssinian long claw, the wattled Ibis, the black-headed Siskin, the Rouget’s rail, and numerous other species.",
  },
  {
    day: "Day 2 : Trek to Sodota",
    description:
      "You'll experience a game drive through Dinsho and enter the national park. Around Dinsho, the Mountain Nyala and Menelik’s Bushbuck should be visible. While trekking through the park, there will be a chance to see Ethiopian Wolves. You'll stop by Habera Waterfall for a nice break. Hiking will take 6-7 hours. Trek to Wasama through a beautiful landscape with stunning views. You will pass through Mararo Valley where the Lammergeyer and Verreaux Eagles keep nests. There will also be a chance to see the Ethiopian Wolf and other species of birds. Around 5-6 hours of trekking. You'll be camping at Wasama.",
    meals: "BLD",
  },
  {
    day: "Day 3 : Trek to Wasama",
    description:
      "You'll experience a game drive activity and trek to Wasama through a beautiful landscape with stunning views. You will pass through Mararo Valley where the Lammergeyer and Verreaux Eagles keep nests. There will also be a chance to see the Ethiopian Wolf and other species of birds.",
    meals: "BLD",
  },
  {
    day: "Day 4 : Trek to Gebre Gurracha",
    description:
      "You will start the day by hiking up Mt. Wasama (4200m) and then continue down into the Worgona Valley. Falcons, raptors, and possibly the Ethiopian wolf will be visible. You will end the day at Lake Gebre Gurracha, meaning “black lake” in the Oromo language. Your trekking will take 6-7 hours. You'll be camping at Gebre Gurracha.",
    meals: "LDBB",
  },
  {
    day: "Day 5 : Drive back to Addis Ababa",
    description:
      "You will drive back to Addis Ababa. It will be the end of the tour.",
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
          src="/images/images/baleMountains.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">Bale Mtn National Park</h2>
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
              5-Day Bale Mountains National Park
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              The experience in the Bale Mountains at up to 4,000 m. very
              different animals occur along the way as well, most noticeably the
              endemic Menelik Bushbuck, Mountain Nyala, Primates, Semien wolf
              and aquatic bird in saneti plateau. The shain mounatin is the
              source of many rivers and web river is one that create wonderfully
              carved caverns for a distance of one and a half kilometers. The
              fantastic limestone caves of Sof Omar make a day&apos;s outing
              from Dinsho, Robe or Goba.
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
                src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d7591597.025427586!2d10.906087755466626!3d-21.70915132301713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x1c0b1b5cb30c01ed%3A0xe4b84940cc445d3b!2sWindhoek%2C%20Namibia!3m2!1d-22.5649344!2d17.0842147!4m5!1s0x1c720c3eabfc5f49%3A0x9f296da909e19aac!2sSossusvlei%2C%20Namibia!3m2!1d-24.7273906!2d15.3423909!4m5!1s0x1b8d5a94471253d3%3A0x5ada1fa25e0603c0!2sEtosha%20National%20Park%2C%20Namibia!3m2!1d-18.8555909!2d16.3293197!5e0!3m2!1sen!2ske!4v1734108006397!5m2!1sen!2ske"
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
                  image:
                    "/images/images/sports-nautiques-tanzanie-planche-a-voile.jpg",
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

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
    title: "Arrival in Tanzania",
    description: [
      "Arrival at the Kilimanjaro International Airport and meeting with your representative who will pick you up and drive you to Silver Palm Hotel for your overnight.",
    ],
    meals: null,
    mainImage: "images/images/arushaCity.jpg",
    hotels: [
      {
        name: "Mount Meru Hotel",
        description:
          "A luxurious hotel located at the foothills of Mount Meru, offering modern amenities, a beautiful pool, and stunning views of the mountain.",
        stars: 4,
        image: "images/images/Mount Meru.jpg",
      },
      {
        name: "Arusha Coffee Lodge",
        description:
          "A luxurious lodge set amidst a working coffee plantation, featuring elegant rooms, beautiful gardens, and a charming atmosphere.",
        stars: 4,
        image: "images/images/ArushaCoffeeLodge---Restaurant-Exterior.jpg",
      },
      {
        name: "Kibo Palace Hotel",
        description:
          "A contemporary hotel located in the heart of Arusha, offering modern luxury, excellent dining, and easy access to the city’s attractions.",
        stars: 4,
        image: "images/images/Kibo palace arusha .jpeg",
      },
      {
        name: "Lake Duluti Serena Hotel",
        description:
          "A serene lakeside retreat offering traditional style accommodations, beautiful gardens, and a peaceful setting just outside Arusha.",
        stars: 4,
        image: "images/images/lake-duluti-lodge-600x338.jpg",
      },
      {
        name: "Planet Lodge Arusha",
        description:
          "A budget-friendly hotel offering cozy rooms, friendly service, and a peaceful atmosphere in the outskirts of Arusha.",
        stars: 3,
        image: "images/images/Planet-Lodge.png",
      },
    ],
  },
  {
    day: "Day 2",
    title: "Machame Gate - Camp Machame",
    description: [
      "Transfer from the hotel by car to Mount Kilimanjaro National Park. Register at the park’s office at the gate, then begin your ascent through the lush rainforest. A winding trail leads you up a ridge until Machame Camp, your campsite for the night.",
    ],
    meals: null,
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 3",
    title: "Camp Machame - Camp Shira",
    description: [
      "After breakfast, continue your trek, leaving the rainforest behind. Ascend through a valley and climb a rocky ridge covered in heath. The trail turns west toward the river gorge, ending at Camp Shira where you will have dinner and spend the night.",
    ],
    meals: null,
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 4",
    title: "Camp Shira through Lava Tower - Camp Barranco",
    description: [
      "Today is crucial for acclimatization. You’ll ascend to Lava Tower (4600m), where you’ll stop for lunch and rest before descending to Barranco Camp. This site lies in a stunning valley beneath the Breach and the Great Barranco Wall — the sunset views here are unforgettable and perfect for photography.",
    ],
    meals: null,
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 5",
    title: "Camp Barranco - Camp Karanga",
    description: [
      "The day begins with a fun scramble to the top of the Great Barranco Wall, followed by a crossing over scree to the Karanga Valley (3930m). The camp sits beneath the icefalls of Kersten, Heim, and Decken Glaciers, where you’ll rest for the night.",
    ],
    meals: null,
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 6",
    title: "Camp Karanga - Camp Barafu",
    description: [
      "Leaving Karanga Camp, you’ll reach the junction that connects with the Mweka Trail for descent. Continue to Barafu Hut, marking the completion of the Southern Circuit. From here, you’ll enjoy views of the Kibo and Mawenzi peaks before camping and preparing for the summit attempt.",
    ],
    meals: null,
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 7",
    title: "Barafu Camp until the Summit - Hut Mweka",
    description: [
      "Wake up at 11:30 PM for tea and cookies before beginning your summit hike. The trail ascends through scree to Stella Point (5732m) on the crater rim, where you’ll witness a breathtaking sunrise. Continue to Uhuru Peak (5895m), the highest point in Africa. Descend via Barafu to Mweka Camp (3100m) for your final night on the mountain.",
    ],
    meals: null,
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 8",
    title: "Mweka Camp - Silver Palm Hotel",
    description: [
      "Descend to the Mweka Park Gate where you’ll receive your summit certificate. The trail may be muddy and wet at lower altitudes, so trekking poles and gaiters are helpful. Enjoy the final drive back to Silver Palm Hotel for a well-deserved rest.",
    ],
    meals: null,
    mainImage: null,
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
          src="/images/images/climb-kilimanjaro-how-many-days-1536x1152-1.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">
            Machame Route Hike - Mt Kilimanjaro{" "}
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
              Best of Tanzania and Zanzibar{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              The Machame route, also known as the "Whisky Route", is one of the
              best to climb Kilimanjaro as it is optimal for acclimatization,
              allowing the climbers to "walk high and sleep low", and as a
              result enjoy one of the highest summit success rates of all the
              routes to climb Mt Kilimanjaro. This 7-day itinerary to climb
              Kilimanjaro offers a great acclimatization program. You will have
              2 shorter days of trekking prior to your summit ascent in order to
              optimize your Kilimanjaro climb. Throughout the trek, we will go
              through stunning terrain and climb in five different climatic
              zones.
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
                          src={`/${day.mainImage}`}
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
                                    src={`/${hotel.image}`}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.698349323163!2d37.236721471940236!3d-3.173885696801415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18375933915b756b%3A0x6d53c1ab8b51b9e6!2sMachame%20Gate%20-%20Mount%20Kilimanjaro!5e0!3m2!1sen!2ske!4v1734112766372!5m2!1sen!2ske"
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
                  link: "UgandaWildlifeSafari.html",
                },
                {
                  title: "Migration Safari",
                  image: "/images/images/MaraMigration.jpg",
                  duration: "13 Days",
                  dates: "October 1 - October 14",
                  price: "$520.00",
                  location: "Mara",
                  difficulty: "Easy",
                  link: "Migration-Safari-Itinerary.html",
                },
                {
                  title: "Kenya-Zanzibar",
                  location: "Zanzibar",
                  difficulty: "Easy",
                  image: "/images/images/zanzibar.jpg",
                  duration: "12 Days",
                  dates: "January 15 - January 27",
                  price: "$520.00",
                  link: "kenyaHoneymoonItinerary.html",
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

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
    title: "Arrival in Kigali",
    description: [
      "Upon arrival at Kigali International Airport, you will be warmly welcomed by a hotel representative and transferred to your accommodation in the vibrant capital. Later, you may opt for a guided city tour or immerse yourself in the lively local markets, where you can admire and shop for intricate artifacts while honing your bargaining skills.",
    ],
    meals: null,
    mainImage: "images/images/kigaliCity.png",
    hotels: [
      {
        name: "Kigali Marriott Hotel",
        description:
          "A luxurious haven in the heart of Kigali, offering world-class amenities, elegant rooms, and exquisite dining options.",
        stars: 5,
        image: "images/images/KigaliMarriottHotel.jpg",
      },
      {
        name: "Hôtel des Mille Collines",
        description:
          "An iconic hotel known for its historical significance, offering comfortable accommodations and panoramic views of Kigali.",
        stars: 4,
        image: "images/images/HotelDesMillesCollines.jpg",
      },
      {
        name: "Radisson Blu Hotel & Convention Centre",
        description:
          "A modern hotel with state-of-the-art facilities, offering luxury stays and convenient access to Kigali's business district.",
        stars: 5,
        image: "images/images/RadissonBluKigali.jpg",
      },
      {
        name: "Heaven Boutique Hotel",
        description:
          "A boutique hotel offering a tranquil retreat with beautiful gardens, delicious cuisine, and unique local touches.",
        stars: 3,
        image: "images/images/HeavenBoutiqueHotel.jpeg",
      },
      {
        name: "The Retreat by Heaven",
        description:
          "An eco-friendly luxury resort offering bespoke experiences, exceptional hospitality, and an authentic Rwandan vibe.",
        stars: 5,
        image: "images/images/TheRetreatKigali.jpg",
      },
    ],
  },
  {
    day: "Day 2",
    title: "Transfer to Akagera National Park",
    description: [
      "You'll begin your adventure with a morning pickup from your hotel in Kigali, followed by a scenic drive to Akagera National Park. Enjoy a guided game drive to spot elephants, giraffes, and more. Have a picnic lunch in nature, then embark on a sunset boat trip on Lake Ihema to see hippos and birds. You'll spend the night at Ruzizi Tented Lodge, relaxing to the sounds of the wild.",
    ],
    meals: "BLD",
    mainImage: null,
    hotels: [
      {
        name: "Magashi Camp",
        description:
          "An exclusive safari camp offering breathtaking views of Lake Rwanyakazinga, luxury tents, and excellent wildlife experiences.",
        stars: 5,
        image: "images/images/Magashi-Campfire.jpg",
      },
      {
        name: "Ruzizi Tented Lodge",
        description:
          "An eco-friendly lodge with a serene lakeside setting, perfect for a relaxing and immersive safari experience.",
        stars: 4,
        image: "images/images/RuziziTentedLodge.jpg",
      },
      {
        name: "Karenge Bush Camp",
        description:
          "A seasonal camp offering an authentic wilderness experience in the heart of Akagera National Park.",
        stars: 3,
        image: "images/images/KarengeBushCamp.jpg",
      },
      {
        name: "Thousand Hills Akagera Lodge",
        description:
          "A modern lodge offering stunning views of the park and comfortable accommodations for all travelers.",
        stars: 4,
        image: "images/images/ThousandHillsLodge.jpg",
      },
      {
        name: "Mutumba Hills Campsite",
        description:
          "A scenic campsite located in the northern hills of Akagera, ideal for adventurous travelers who enjoy being close to nature.",
        stars: 3,
        image: "images/images/MutumbaHillsCampsite.jpg",
      },
    ],
  },
  {
    day: "Day 3",
    title: "Guided Game Drive in Akagera National Park",
    description: [
      "After breakfast, you will head out for a morning game drive to explore more wildlife hotspots. You will return for lunch and some downtime at the lodge. In the evening, embark on a thrilling night game drive to discover nocturnal animals. Your overnight stay will be at Karenge Bush Camp, where you can stargaze and enjoy the serene atmosphere.",
    ],
    meals: "BLD",
    mainImage: null,
    hotels: [],
    gallery: [
      "images/images/akagera-wildlife-768x514.jpg",
      "images/images/Gombe-Stream-National-park-Jane-Goodall-and-Chimpanzees.jpg",
      "images/images/chimpanzee-tracking-in-nyungwe-national-park.jpg",
      "images/images/chimps-nyungwe-rwanda_canopy34.jpg.png",
    ],
  },
  {
    day: "Day 4",
    title: "Wildlife Safari in Akagera National Park and Transfer to Kigali",
    description: [
      "You will enjoy an early breakfast before a full-day game drive. Discover diverse wildlife and beautiful landscapes with a packed lunch in the park. Continue exploring until late afternoon, then transfer back to Kigali. You'll be dropped off at your hotel or the airport, wrapping up an unforgettable safari experience.",
    ],
    meals: "BLD",
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
          src="/images/images/akagera-wildlife-768x514.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">Akagera Safari Adventure </h2>
          <p className="text-lg">
            Explore Rwanda&apos;s Hidden Gems: Gorillas, Volcanoes, and Breathtaking
            Scenery.
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
              3-Day Big 5 Safari Adventures in Akagera National Park{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Experience the breathtaking landscapes and vibrant wildlife of
              Akagera National Park on this immersive 3-day safari. From guided
              game drives to serene sunset boat trips, each day offers unique
              opportunities to witness the beauty of Rwanda&apos;s flora and fauna.
              You&apos;ll stay in comfortable lodges that blend seamlessly with the
              natural environment, ensuring a perfect balance of adventure and
              relaxation. Join us for a memorable journey through one of
              Africa&apos;s most stunning national parks.
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
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d255201.22495876986!2d30.2550748822696!3d-1.9452187571529909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x19dca796f9417ad5%3A0x45ebba72296bfee2!2sKigali%20International%20Airport%2C%20KN%205%20Rd%2C%20Kigali%2C%20Rwanda!3m2!1d-1.9633118999999999!2d30.135017899999998!4m5!1s0x19dba13db47d84db%3A0x8b0b7f91ca4a56b6!2sAkagera%20National%20Park%2C%20Akagera%20Road%2C%20Akagera%2C%20Rwanda!3m2!1d-1.8795625!2d30.7040625!5e0!3m2!1sen!2ske!4v1734096892174!5m2!1sen!2ske"
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

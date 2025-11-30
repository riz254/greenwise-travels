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
    title: "Arrive in Kigali & drive to Parc National des Volcans",
    description: [
      "On arrival into Kigali's Airport you will be met by your local guide who will drive through the pretty Rwandan countryside to Kinigi at the foothills of the Virungas in Volcanoes National Park (Parc National des Volcans). The drive typically takes about 2.5 hours and you then check-in to your lodge where you can enjoy your afternoon at leisure. Relax and rest up this evening ahead of tomorrow’s gorilla trekking adventure.",
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
    title: "Gorilla Trekking",
    description: [
      "After breakfast, you will depart for the headquarters of the park, where your guide will accomplish the necessary formalities for you. You will then meet your ranger guides for a briefing about the trek and experience in front of you.",
      "You can choose from a number of treks to different gorilla families based on your own preferences and fitness levels. Your trek can last anywhere from 2 to 8 hours depending on your choice.",
      "Only one group of tourists can visit each family of mountain gorillas each day and once you’ve found them, you’ll have just one precious hour in their company.",
      "After your hour with the gorillas you head back to your lodge for lunch and the rest of the day at your leisure.",
    ],
    meals: "LDBB",
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 3",
    title: "Tour of Kigali & fly to Nairobi",
    description: [
      "After breakfast this morning you will be driven back to Kigali where you will take a local tour with your guide. You will learn about the recent history of Rwanda and a visit to the Genocide Museum is an important part of your tour.",
      "After lunch you are driven to the airport for your onward flight to Nairobi. You are met on arrival in Nairobi and are driven to your hotel, conveniently situated equidistant between the international and domestic airports.",
    ],
    meals: null,
    mainImage: "images/images/Nairobi.png",
    hotels: [],
  },
  {
    day: "Day 4",
    title: "Masai Mara National Reserve",
    description: [
      "This morning you will be driven to Wilson Airport for your scheduled light aircraft flight to the Masai Mara. On arrival at your nearest Mara airstrip you are met by a representative of your camp and are driven to the lodge for check-in. Your stay in the Masai Mara is for the following three nights.",
    ],
    meals: "LDBB",
    mainImage: null,
    hotels: [
      {
        name: "Sarova Mara Game Camp",
        description:
          "A luxurious tented camp nestled in the heart of the Mara, offering stunning views, gourmet dining, and an immersive wildlife experience.",
        stars: 5,
        image: "images/images/sarovaMara.jpg",
      },
      {
        name: "Mara Serena Safari Lodge",
        description:
          "A stunning lodge overlooking the plains, featuring comfortable accommodations, a swimming pool, and exceptional service amidst breathtaking landscapes.",
        stars: 4,
        image: "images/images/MaraSerenaSafariLonge.jpg",
      },
      {
        name: "Mara Intrepids Camp",
        description:
          "A luxurious camp offering tented accommodations along the Talek River, known for its excellent service, gourmet cuisine, and wildlife activities.",
        stars: 5,
        image: "images/images/family-tent-mara-intrepids.jpg",
      },
      {
        name: "Mara Sopa Lodge",
        description:
          "A charming lodge set in the Mara, featuring comfortable accommodations, beautiful gardens, and easy access to wildlife viewing opportunities.",
        stars: 4,
        image: "images/images/MaraSopa.jpg",
      },
    ],
  },
  {
    day: "Day 5",
    title: "Full Day in the Masai Mara National Reserve",
    description: [
      "After breakfast, enjoy your first full day on safari in the Masai Mara, keeping an eye out for the Big Five: lion, elephant, buffalo, leopard, and rhino. You may even witness a thrilling predator chase or a kill. Return to the camp for dinner and overnight stay.",
      "Optional Activities include Balloon Safari: Embark on a magical early morning balloon ride over the Mara plains, followed by a champagne breakfast in the bush.",
      "Visit to a Masai Manyatta: Explore a traditional Maasai village and learn about the fascinating culture, customs, and lifestyle of this iconic community.",
    ],
    meals: "LDBB",
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 6",
    title: "Masai Mara",
    description: [
      "Your final full day on safari in the Mara. On safari you will enjoy two shared safari activities each day as standard. This typically means morning and afternoon game drives out into the Mara with your expert local guide.",
      "Other activities are available at certain camps including walking safaris, horse riding and more. As a general rule you will have more flexibility in the conservancies, where you can also avoid the minibus traffic which can spoil parts of the main reserve.",
    ],
    meals: "BL",
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 7",
    title: "Fly to Zanzibar & transfer to the beach",
    description: [
      "Today you can have your morning safari activity and then you are driven back to the airstrip in time for your scheduled light aircraft flight, which arrives in Nairobi around midday. Enjoy a spot of lunch and transfer in Nairobi ahead of your direct flight to Zanzibar.",
      "You are met on arrival in Zanzibar and are driven the approx. 1 hour to your beach accommodation where you will stay for the next four nights with breakfast and dinner included.",
    ],
    meals: "BL",
    mainImage: null,
    hotels: [
      {
        name: "Baraza Resort & Spa",
        description:
          "A luxury beachfront resort blending Swahili and Arabian influences, offering private villas, spa treatments, and world-class service.",
        stars: 5,
        image: "images/images/BarazaResort.jpg",
      },
      {
        name: "The Palms Zanzibar",
        description:
          "An exclusive boutique resort with only six villas, offering serene luxury and personalized service on the pristine shores of Zanzibar.",
        stars: 5,
        image: "images/images/palms-zanzibar.jpg",
      },
      {
        name: "Melia Zanzibar",
        description:
          "A sprawling resort with stunning ocean views, infinity pools, and luxury accommodations perfect for a romantic retreat or family holiday.",
        stars: 5,
        image: "images/images/Melia.jpg",
      },
      {
        name: "Park Hyatt Zanzibar",
        description:
          "An opulent 5-star hotel blending luxury with Zanzibar’s rich history, offering spacious rooms and excellent waterfront views in Stone Town.",
        stars: 5,
        image: "images/images/Park-Hyatt-Zanzibar-P308-Exterior.16x9.jpg",
      },
      {
        name: "Zuri Zanzibar",
        description:
          "A chic, eco-friendly 5-star resort featuring contemporary design, oceanfront bungalows, and a tranquil private beach in Kendwa.",
        stars: 5,
        image: "images/images/zuri-zanzibar.jpg",
      },
      {
        name: "Diamonds La Gemma dell'Est",
        description:
          "A luxurious all-inclusive resort located on Zanzibar's northwestern shores, featuring lush gardens, a spa, and stunning sunset views.",
        stars: 5,
        image: "images/images/Diamonds La Gemma dell'Est.jpg",
      },
    ],
  },
  {
    day: "Day 8",
    title: "Zanzibar Beaches",
    description: [
      "Relax and enjoy Zanzibar Island where you can recharge at your leisure. There are a host of great activities, from PADI diving courses to Jozani Forest day trips, to keep you occupied should you wish to explore further afield.",
      "It's also worth talking to a specialist about the smaller neighbouring islands, as these may be more appropriate for you if you're looking to get off the beaten track.",
    ],
    meals: "BLD",
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 9",
    title: "Zanzibar Beaches",
    description: [
      "Enjoy a day of relaxing at the beach, perhaps indulging in a visit to the spa or exploring Zanzibar at your leisure.",
      "You may also choose to visit Prison Island, the Mnarani Turtle Sanctuary, or the lush Jozani Forest, home to the charming Red Colobus Monkey. For adventure seekers, reef and dolphin safaris await in Zanzibar's crystal-clear waters, or enjoy a cultural tour through local villages for a more grounded experience.",
      "The possibilities on this enchanting East African island are endless.",
    ],
    meals: "BLD",
    mainImage: "images/images/zanzibar.jpg",
    hotels: [],
  },
  {
    day: "Day 10",
    title: "Zanzibar at your leisure",
    description: [
      "Another day to kick back, relax and enjoy Zanzibar's beaches and excursions at your leisure.",
    ],
    meals: "BL",
    mainImage: null,
    hotels: [],
  },
  {
    day: "Day 11",
    title: "Fly home",
    description: [
      "Today you check-out of your hotel and are driven to Zanzibar Airport where you check-in for your return international flight.",
    ],
    meals: "BL",
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
          src="/images/images/Visit-Rwanda-Crater-Lake-Volcanoes-e1533416621808-1920x1267.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">
            Gorillas, Masai Mara, Zanzibar{" "}
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
              Rwanda Gorillas, Masai Mara & Zanzibar{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Experience Rwanda&apos;s mountain gorillas, Kenya&apos;s iconic Masai Mara,
              and Zanzibar&apos;s stunning beaches in one unforgettable journey
              blending wildlife, culture, and relaxation. Your trip starts with
              your gorilla trek up into the Virunga Volcanoes, where you will
              spend your one magical hour with the last of the mountain
              gorillas. You then fly on to Kenya for a classic Big 5 safari in
              the incomparable Masai Mara. Game drives, guided walks and
              authentic cultural experiences are all available for you to enjoy
              during your Masai Mara safari. Finally you can unwind and indulge
              in total relaxation on the beautiful beaches of Zanzibar to cap
              off your holiday in real style.{" "}
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
                src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d8159329.303489803!2d29.137775541148073!3d-3.0819939075408134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x19dc4f8f81cef8fb%3A0xf96bc1f78c99e417!2sVolcanoes%20National%20Park%2C%20Ruhengeri%2C%20Rwanda!3m2!1d-1.4323184999999998!2d29.5947969!4m5!1s0x182ce8a64a31fdb1%3A0x296a9587e0c3c410!2sMas%C3%A1i%20Mara!3m2!1d-1.4821324!2d35.1299896!4m5!1s0x185cd0ba23b63ecb%3A0x52c848ab6efc138e!2sZanzibar%2C%20Tanzania!3m2!1d-6.1651929999999995!2d39.1989144!5e0!3m2!1sen!2ske!4v1734097629271!5m2!1sen!2ske"
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

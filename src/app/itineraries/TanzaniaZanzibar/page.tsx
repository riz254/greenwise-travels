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
    title: "Arrival in Arusha",
    description: `Upon your arrival at Kilimanjaro International Airport, you will be warmly welcomed by your guide, who will assist with your luggage and transfer you to Moivaro Lodge in Arusha. As you make your way to the lodge, take in the beautiful Tanzanian landscape, with its rolling hills and lush greenery. Once at Moivaro Lodge, you’ll be greeted with a refreshing drink and have some time to relax and unwind from your journey. The lodge, nestled in a serene coffee plantation, offers a peaceful retreat with its charming rooms, lush gardens, and inviting pool.

This first night provides an opportunity to acclimate to the local time zone and prepare for the exciting adventures ahead. The cozy ambiance of Moivaro Lodge ensures a restful night, setting the stage for an unforgettable safari experience.`,
    meals: "", // not mentioned in the HTML
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
    day: "DAY 2",
    title: "Tarangire National Park",
    description: `After a hearty breakfast, set off on a scenic drive to Tarangire National Park, celebrated for its rich wildlife and breathtaking landscapes. As you enter the park, you’ll be welcomed by the iconic baobab trees and the life-giving Tarangire River, which attracts a diverse array of animals. Keep an eye out for elephants, zebras, giraffes, and countless bird species that thrive in this unique ecosystem. Your guide will share valuable insights about the park’s flora and fauna, enriching your game drive experience.

By midday, you’ll check into your cozy accommodation, which provides an authentic safari experience with modern comforts. After settling in, relish a delicious lunch with stunning views of the surrounding landscape. In the afternoon, embark on a game drive to uncover more of Tarangire’s hidden treasures. Return to the lodge in the evening to relax, recount the day's adventures over dinner, and unwind beneath the expansive African sky.`,
    meals: "BLD",
    mainImage: "", // none specified
    hotels: [
      {
        name: "Burunge Tented Lodge",
        description:
          "A comfortable tented lodge situated close to Tarangire, offering an immersive safari experience with excellent amenities and breathtaking views.",
        stars: 4,
        image: "images/images/Burunge-Tented-Lodge-Tarangire_1-768x511.jpg",
      },
      {
        name: "Tarangire Safari Lodge",
        description:
          "An inviting lodge with stunning views over Tarangire National Park, featuring comfortable accommodations and a swimming pool.",
        stars: 5,
        image: "images/images/TarangireSafariLounge.jpg",
      },
      {
        name: "Oliver's Camp",
        description:
          "An intimate camp in a remote area of Tarangire, offering luxurious tented accommodations and exceptional wildlife viewing opportunities.",
        stars: 5,
        image: "images/images/Olivers-camp.png",
      },
      {
        name: "Kuro Tarangire",
        description:
          "A beautiful camp lodge with breathtaking views of the surrounding landscape and luxurious accommodations.",
        stars: 5,
        image: "images/images/kuro-accommodation-banner.png",
      },
      {
        name: "Kirurumu Tarangire Longe",
        description:
          "An exclusive camp offering a unique safari experience with personalized service and stunning views of Tarangire National Park.",
        stars: 5,
        image: "images/images/kirurumu-tarangire.jpg",
      },
    ],
  },
  {
    day: "DAY 3",
    title: "Tarangire National Park",
    description: `Start your day with an early morning game drive in Tarangire National Park, where the cool air and golden sunrise create ideal conditions for spotting wildlife. Your experienced guide will lead you through diverse terrains, from riverine forests to grassy plains, maximizing your chances of seeing elephants, lions, leopards, and various bird species. Renowned for its large elephant herds and ancient baobab trees, the park offers a stunning landscape.

After your morning adventure, return to your hotel for a leisurely breakfast and relaxation. In the afternoon, enjoy another game drive to explore different areas of the park, observing animals as they seek shade and water. Keep an eye out for vibrant yellow-collared lovebirds and striking bateleur eagles. Your guide will share insights about the ecosystem and conservation efforts. After an exciting day, head back to the lodge for a delicious dinner and reflect on your incredible wildlife encounters.`,
    meals: "BLD",
    mainImage: "",
    hotels: [], // same as Day 2, so we can leave it empty or copy if needed
  },
  {
    day: "DAY 4 & 5",
    title: "Ngorongoro Crater",
    description: `After breakfast, depart Tarangire National Park for Ngorongoro Crater. Stop in Karatu for lunch, enjoying local cuisine and vibrant markets before continuing through the scenic highlands.

Arrive at Ngorongoro Forest Tented Lodge and relax in your comfortable accommodations. Enjoy dinner at the lodge and share stories around the campfire.

On Day 5, rise early and descend into the crater for a thrilling game drive. Experience the Big Five and other wildlife in the stunning morning light. Enjoy a picnic lunch at a scenic spot before continuing your exploration. Your guide will share insights on the crater's history and conservation efforts. After an unforgettable day, return to the lodge for dinner and reflection on your incredible wildlife encounters.`,
    meals: "LDBB",
    mainImage: "",
    hotels: [
      {
        name: "Ngorongoro Crater Lodge",
        description:
          "An ultra-luxurious lodge perched on the crater rim, offering breathtaking views, opulent interiors, and world-class service.",
        stars: 5,
        image:
          "images/images/ngorongoro-crater-at-andbeyond-lodge-on-a-luxury-safari-in-tanzania.jpg",
      },
      {
        name: "Neptune Ngorongoro Luxury Lodge",
        description:
          "A mid-range lodge offering stunning views over the crater and comfortable accommodations perfect for travelers seeking adventure and relaxation.",
        stars: 5,
        image: "images/images/neptune-Ngorongoro.jpg",
      },
      {
        name: "Ngorongoro Serena Safari Lodge",
        description:
          "A beautiful lodge built into the crater’s rim, featuring traditional design, excellent service, and sweeping views of the crater below.",
        stars: 5,
        image: "images/images/lounge-at-ngorongoro-serena.jpg",
      },
      {
        name: "Lemala Ngorongoro Tented Camp",
        description:
          "A semi-permanent tented camp on the rim, offering an intimate safari experience with incredible access to the crater floor.",
        stars: 4,
        image: "images/images/Lemala-Ngoro-27-1-scaled.png",
      },
      {
        name: "Ngorongoro Rhino Lodge",
        description:
          "A budget-friendly lodge on the crater rim, providing simple yet comfortable accommodations, close to the action.",
        stars: 3,
        image: "images/images/ngorongoro-rhino.jpg",
      },
    ],
  },
  {
    day: "Day 6",
    title: "Olduvai Gorge / Serengeti National Park",
    description: [
      "After breakfast, embark on your journey to the iconic Serengeti National Park. En route, you’ll visit the historic Olduvai Gorge, often referred to as the “Cradle of Mankind.” This significant archaeological site offers a fascinating glimpse into the early human history, with its rich deposits of fossils and artifacts. A brief tour of the Olduvai Museum will provide insights into the discoveries made by the Leakey family and the importance of this site in understanding human evolution.",
      "Continuing your journey, you’ll arrive at the vast plains of the Serengeti National Park by early afternoon. After checking in to your hotel, enjoy a leisurely lunch and some time to relax before heading out on your first game drive in the Serengeti. The park’s seemingly endless savannahs are home to a diverse array of wildlife, including large herds of wildebeest, zebras, and gazelles, as well as predators like lions, cheetahs, and hyenas. Your afternoon game drive offers the perfect introduction to this renowned ecosystem, with the chance to witness the daily dramas of the wild. As the sun sets, return to your hotel for a delightful dinner and a comfortable night’s rest, surrounded by the sounds of the Serengeti.",
    ],
    meals: "LDBB",
    images: [
      "images/images/Olduvai-Gorge5-Ngorongoro.jpg",
      "images/images/ngorongoro-plains.jpg",
      "images/images/Crater-Floor-ngorongoro.jpg",
      "images/images/Empakai-CraterNgorongoro.jpg",
      "images/images/shifting-sand-scaled-ngorongoro.jpg",
    ],
    hotels: [
      {
        name: "Four Seasons Safari Lodge Serengeti",
        stars: 5,
        image: "images/images/four-seasons.jpg",
        description:
          "A luxury lodge offering breathtaking views of the Serengeti, complete with an infinity pool and premium safari experiences.",
      },
      {
        name: "Serengeti Sopa Lodge",
        stars: 4,
        image: "images/images/serengeti-sopa.jpg",
        description:
          "A mid-range lodge offering comfortable accommodations, fantastic views, and proximity to Serengeti’s top wildlife spots.",
      },
      {
        name: "Mbalageti Serengeti",
        stars: 4,
        image: "images/images/mbalagetiSerengeti.jpg",
        description:
          "An intimate lodge located in the Western Corridor, offering panoramic views, spacious suites, and a peaceful atmosphere.",
      },
      {
        name: "AndBeyond Serengeti Under Canvas",
        stars: 5,
        image: "images/images/andbeyond-serengeti-under.jpg",
        description:
          "A luxurious tented camp that moves with the migration, offering an immersive safari experience with elegant comfort in the wild.",
      },
      {
        name: "Serengeti Kati Kati Tented Camp",
        stars: 3,
        image: "images/images/Serengeti katikati.jpg",
        description:
          "A mid-range tented camp ideal for adventurous travelers, offering close encounters with wildlife and authentic safari experiences.",
      },
    ],
  },
  {
    day: "Days 7–9",
    title: "Serengeti National Park",
    description: [
      "Over the next three days, immerse yourself in the unparalleled beauty and wildlife of Serengeti National Park, spending each day on thrilling game drives. Each day you’ll set out into the vast plains with your expert guide, who will lead you to some of the best spots for wildlife viewing. The Serengeti is famed for its incredible biodiversity and the Great Migration, where millions of wildebeest, zebras, and gazelles traverse the landscape in search of fresh grazing grounds.",
      "In the afternoons, continue exploring different regions of the park, from the riverine forests and kopjes to the vast grasslands that stretch as far as the eye can see. Each evening, return to Kisura Tented Lodge, where you can unwind with delicious dinners and share stories of the day’s incredible wildlife encounters with fellow travelers.",
    ],
    meals: "BLD",
    images: [
      "images/images/P1060870.jpg",
      "images/images/P1060493.jpg",
      "images/images/P1060535.jpg",
      "images/images/P1060538.jpg",
      "images/images/P1060497.jpg",
    ],
    hotels: [
      {
        name: "Kisura Tented Lodge",
        stars: 4,
          image: "images/images/kisura-tented-lodge.jpg" ,
        description:
          "Comfortable tents with scenic views, offering authentic safari experiences and warm hospitality in the Serengeti.",
      },
    ],
  },
  {
    day: "Day 10",
    title: "Zanzibar",
    description: [
      "After an early breakfast, you’ll be transferred to the Seronera Airstrip for your flight to Zanzibar. Upon arrival at Zanzibar International Airport, you’ll be greeted and transferred to your Hotel, where you’ll stay for the next four nights. Nestled along the pristine coastline, this luxurious beachfront resort offers a perfect blend of relaxation and adventure.",
      "After checking in and settling into your comfortable room, take some time to explore the hotel’s lush gardens, sparkling pool, and pristine beach. Enjoy a leisurely lunch at the resort’s restaurant, unwind on the white sandy beach, or take a refreshing dip in the Indian Ocean. As the sun sets, indulge in a delectable dinner while listening to the gentle waves lapping the shore.",
    ],
    meals: "LDBB",
    images: [],
    hotels: [
      {
        name: "Baraza Resort & Spa",
        stars: 5,
        image: "images/images/BarazaResort.jpg",
        description:
          "A luxury beachfront resort blending Swahili and Arabian influences, offering private villas, spa treatments, and world-class service.",
      },
      {
        name: "The Palms Zanzibar",
        stars: 5,
        image: "images/images/palms-zanzibar.jpg",
        description:
          "An exclusive boutique resort with only six villas, offering serene luxury and personalized service on the pristine shores of Zanzibar.",
      },
      {
        name: "Melia Zanzibar",
        stars: 4,
        image: "images/images/Melia.jpg",
        description:
          "A sprawling resort with stunning ocean views, infinity pools, and luxury accommodations perfect for a romantic retreat or family holiday.",
      },
      {
        name: "Park Hyatt Zanzibar",
        stars: 5,
        image: "images/images/Park-Hyatt-Zanzibar-P308-Exterior.16x9.jpg",
        description:
          "An opulent 5-star hotel blending luxury with Zanzibar’s rich history, offering spacious rooms and excellent waterfront views in Stone Town.",
      },
      {
        name: "Zuri Zanzibar",
        stars: 5,
        image: "images/images/zuri-zanzibar.jpg",
        description:
          "A chic, eco-friendly 5-star resort featuring contemporary design, oceanfront bungalows, and a tranquil private beach in Kendwa.",
      },
      {
        name: "Diamonds La Gemma dell'Est",
        stars: 5,
        image: "images/images/Diamonds La Gemma dell'Est.jpg",
        description:
          "A luxurious all-inclusive resort located on Zanzibar's northwestern shores, featuring lush gardens, a spa, and stunning sunset views.",
      },
    ],
  },
  {
    day: "Days 11–13",
    title: "Exploring Zanzibar",
    description: [
      "For the next three days, embrace the freedom to unwind and explore at your own pace while soaking up the serene beauty of Zanzibar. Spend your days lounging on the pristine white sandy beaches, taking refreshing swims, or indulging in spa treatments for a truly relaxing experience.",
      "If you’re feeling adventurous, explore the vibrant marine life with a snorkeling or diving excursion, or take a guided tour to the historic Stone Town, a UNESCO World Heritage site, where you can wander through narrow streets filled with markets and spice shops.",
    ],
    meals: "BLD",
    images: [
      "images/images/zanzibar.jpg",
      "images/images/zanzibarFest.jpg",
      "images/images/zanzibarStreet.jpg",
    ],
    hotels: [
      {
        name: "Sandies Beach Hotel",
        stars: 4,
          image: "images/images/sandies-beach-hotel.jpg" ,

        description:
          "A tranquil beachfront resort offering tropical ambiance, fresh seafood, and breathtaking sunset views over the Indian Ocean.",
      },
    ],
  },
  {
    day: "Day 14",
    title: "Depart from Zanzibar",
    description: [
      "After breakfast, you'll check out of your luxurious beach resort and be transferred to the airport for your bittersweet journey home.",
      "As you depart, you'll carry with you countless blissful memories and a deep connection to East Africa.",
      "We're certain this is just the beginning of many wonderful adventures together as a married couple.",
    ],
    meals: null,
    images: [],
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
          src="/images/images/zanzibar.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">
            BEST OF TANZANIA AND ZANZIBAR{" "}
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
              Embark on an extraordinary 14-day adventure through the Best of
              Tanzania & Zanzibar. Begin in Tanzania&apos;s renowned national
              parks, from the wildlife-rich Tarangire and Ngorongoro Crater to
              the vast Serengeti plains. Experience the awe of the Great
              Migration, witnessing wildebeest and zebras in their quest for
              fresh pastures, and enjoy thrilling game drives with close
              encounters of the Big Five. After Tanzania’s wild beauty, unwind
              on Zanzibar’s serene shores. Explore historic Stone Town, relax on
              pristine beaches, and discover the island’s vibrant culture. This
              tour promises the perfect blend of adventure and relaxation in
              East Africa.
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
                src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d4072568.849103811!2d34.42732584700922!3d-4.572812482644372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x185cd0ba23b63ecb%3A0x52c848ab6efc138e!2sZanzibar%2C%20Tanzania!3m2!1d-6.1651929999999995!2d39.1989144!4m5!1s0x1832cdd680dac6d1%3A0x2ea157f39deb3945!2sSerengeti%20National%20Park%2C%20Tanzania!3m2!1d-2.3333333!2d34.8333333!4m5!1s0x183385bddad6ea95%3A0xa067a2e7565f241b!2sOlduwai%20Gorge%2C%20Tanzania!3m2!1d-2.9666666999999998!2d35.366666699999996!4m5!1s0x18340d59ac10ebb9%3A0xf5336dab1671264c!2sNgorongoro%20Crater%2C%20Tanzania!3m2!1d-3.1617522!2d35.5876697!4m5!1s0x18371c8acbdd1941%3A0x3b337cacaff3dfd8!2sTarangire%20National%20Park%2C%20Tanzania!3m2!1d-4.1628549999999995!2d36.089925699999995!4m5!1s0x18371d42af8c8f1f%3A0x8971e2723167dac2!2sJJJF%2BQXJ%20Arusha%20Airport%2C%20Arusha%2C%20Tanzania!3m2!1d-3.3680269999999997!2d36.6248952!5e0!3m2!1sen!2ske!4v1732605792503!5m2!1sen!2ske"
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

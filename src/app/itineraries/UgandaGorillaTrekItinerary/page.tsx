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
    title: "Arrival in Entebbe",
    description: `Upon landing at Entebbe International Airport, our friendly representative will be there to greet you and assist with your transfer to your Hotel. Settle in and unwind after your journey, with the rest of the day free for relaxation or light exploration. You may wish to take a scenic walk along the shores of Lake Victoria or venture into the lively streets of Entebbe, soaking in the town’s charm and warmth. In the evening, enjoy a delightful dinner at the hotel’s restaurant, then retire to your comfortable room for a restful night’s sleep, preparing for the excitement of your upcoming gorilla encounter adventure.`,
    meals: null,
    mainImage: "/images/images/entebbe2.jpg",
    hotels: [
      {
        name: "Protea Hotel by Marriott Entebbe",
        description:
          "A modern lakeside hotel with stunning views, offering comfortable rooms and easy access to Entebbe’s attractions.",
        stars: 4,
        image: "/images/images/ProteaHotel.jpg",
      },
      {
        name: "Lake Victoria Serena Golf Resort & Spa",
        description:
          "A luxury resort overlooking Lake Victoria, featuring a golf course, spa, and fine dining options for a relaxing stay.",
        stars: 5,
        image:
          "/images/images/aeriel-view-of-lake-victoria-serena-golf-resort-and-spa_standard.jpg",
      },
      {
        name: "The Boma Hotel Entebbe",
        description:
          "A colonial-style guesthouse with lush gardens and personalized service, offering a cozy and intimate stay.",
        stars: 3,
        image: "/images/images/boma-entebbe.jpg",
      },
      {
        name: "2 Friends Beach Hotel Entebbe",
        description:
          "A boutique hotel located on the shores of Lake Victoria, known for its charming atmosphere and lakeside views.",
        stars: 3,
        image: "/images/images/2friendsEntebbe.jpg",
      },
      {
        name: "Papyrus Guesthouse Entebbe",
        description:
          "A charming guesthouse offering a serene and friendly atmosphere, ideal for relaxation before or after your travels.",
        stars: 3,
        image: "/images/images/papyrus_entebbe.png",
      },
    ],
  },
  {
    day: "DAY 2",
    title: "Bwindi Impenetrable Forest",
    description: `Your adventure continues with an early breakfast, after which you’ll be transferred to Entebbe Airport for a domestic flight to Kihihi. Scheduled to depart at 07:00 and arriving around 08:45, this flight takes you closer to the heart of Uganda’s wilderness. Upon arrival in Kihihi, our team will greet you and transport you to the stunning Buhoma Lodge, nestled within Bwindi Impenetrable Forest. Settle into the comfort of your luxurious lodge, where the fully inclusive service promises relaxation and ease throughout your stay. After a delightful lunch, the afternoon is yours to explore the lodge’s tranquil surroundings or simply unwind amidst the captivating forest scenery. Come evening, savor a delicious dinner in the company of fellow travelers, sharing stories and building anticipation for the next day’s gorilla trekking.`,
    meals: "BLD",
    mainImage: "/images/images/Buhoma-longe.jpg",
    hotels: [
      {
        name: "Buhoma Lodge",
        description:
          "Nestled within Bwindi Impenetrable Forest, Buhoma Lodge offers an authentic wilderness experience with luxury accommodations, delicious cuisine, and stunning forest views.",
        stars: 5,
        image: "/images/images/Buhoma-longe.jpg",
      },
      {
        name: "Mahogany Springs Lodge",
        description:
          "Located on the edge of Bwindi, this lodge offers luxurious suites with breathtaking views, fine dining, and a perfect base for gorilla trekking adventures.",
        stars: 4,
        image: "/images/images/mahoganySprings.png",
      },
      {
        name: "Sanctuary Gorilla Forest Camp",
        description:
          "An exclusive camp set within the forest, offering close encounters with gorillas, personalized service, and a tranquil setting perfect for nature lovers.",
        stars: 4,
        image: "/images/images/sanctuaryGorillaForest.jpg",
      },
      {
        name: "Clouds Mountain Gorilla Lodge",
        description:
          "Perched high in the mountains, this lodge provides luxurious villas, stunning views, and a tranquil retreat near Bwindi's gorilla tracking trails.",
        stars: 5,
        image: "/images/images/cloudsMountainGorillaLodge.jpg",
      },
      {
        name: "Ichumbi Gorilla Lodge",
        description:
          "A cozy lodge near Bwindi offering comfortable accommodations, warm hospitality, and easy access to gorilla trekking adventures.",
        stars: 4,
        image: "/images/images/ichumbiGorillaLodge.jpg",
      },
    ],
  },
  {
    day: "DAY 3",
    title: "Gorilla Trek",
    description: `Today marks the highlight of your adventure – the unforgettable gorilla trekking experience. After an early breakfast, you’ll meet your expert guide at Buhoma Lodge for a briefing on what lies ahead. Equipped with sturdy boots, packed lunches, and plenty of water, you’ll set off on an exhilarating journey into the heart of the Bwindi Impenetrable Forest in search of the majestic mountain gorillas. The duration of the trek will depend on the location of the gorilla families, but every step will be worth it once you encounter these incredible creatures in their natural habitat. As you traverse the forest, your guide will offer insights into the unique flora and fauna, deepening your appreciation of this remarkable ecosystem. Upon locating the gorilla family, you’ll have the rare opportunity to spend an hour observing them in their natural state – watching their interactions, capturing photographs, and absorbing the magic of this once-in-a-lifetime wildlife encounter. The closeness to these gentle giants is something that will stay with you forever. After the trek, return to Buhoma Lodge for a well-deserved rest. Relive the day’s extraordinary moments while enjoying a delicious dinner at the lodge’s restaurant, surrounded by the soothing sounds of the forest. As night falls, let the symphony of the jungle lull you to sleep, cherishing the memories of your unforgettable gorilla encounter.`,
    meals: "LDBB",
    mainImage: "/images/images/gorilla-trek-Uganda.jpg",
    hotels: null,
  },
  {
    day: "DAY 4",
    title: "Entebbe",
    description: `After a hearty breakfast at Buhoma Lodge, bid farewell to the captivating Bwindi Impenetrable Forest as you prepare for your departure. You’ll be transferred to Kihihi, taking in the scenic views along the way, a moment to reflect on the unforgettable experiences of the past few days. Upon arrival at Kihihi Airstrip, our team will be waiting to assist with your transfer to the airport. Board your flight, carrying with you the cherished memories of your gorilla trekking adventure and the unparalleled beauty of Uganda’s wilderness. Once you arrive at your destination, you’ll be warmly greeted and transferred to your hotel. Take the opportunity to unwind and relax after your journey. Enjoy a delicious dinner at the hotel restaurant (own account) and savor the peaceful ambiance. Spend the evening reflecting on the awe-inspiring moments of your gorilla encounter. Rest well tonight, for tomorrow marks the conclusion of your remarkable journey through Uganda’s natural wonders.`,
    meals: "BLD",
    mainImage: "/images/images/entebbe2.jpg",
    hotels: null,
  },
  {
    day: "DAY 5",
    title: "Depart from Entebbe",
    description: `As your unforgettable journey through Uganda comes to a close, enjoy a leisurely breakfast at your Hotel before preparing for your departure. After checkout, you’ll be transferred to Entebbe International Airport for your onward flight.`,
    meals: null,
    mainImage: "/images/images/entebbe2.jpg",
    hotels: null,
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
          src="/images/images/UgandaGorilla-or-Rwanda-which-country-is-better-for-safari-960x720.webp"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">Gorilla Trek Safari</h2>
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
              GORILLA TREK SAFARI{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Embark on a transformative 5-day Gorilla Encounter safari,
              journeying into the depths of Uganda’s pristine wilderness to
              witness the majestic mountain gorillas up close. Your adventure
              begins in Entebbe, where you’ll enjoy a restful evening before an
              early morning flight to Kihihi. From there, a scenic transfer
              takes you to the renowned Buhoma Lodge, your haven nestled near
              Bwindi Impenetrable Forest.
              <br />
              The following two days are dedicated to unforgettable gorilla
              treks, led by seasoned guides who expertly navigate you through
              the dense foliage. As you approach a gorilla family, feel the
              thrill of observing these gentle giants in their natural habitat,
              watching them interact, forage, and care for one another—a rare,
              intimate window into their world. After each trek, unwind at
              Buhoma Lodge, where cozy comfort, sweeping views, and exquisite
              meals await to help you reflect on the day’s encounters.
              <br />
              Enhancing your safari are cultural experiences and scenic
              journeys, painting a fuller picture of Uganda’s vibrant landscapes
              and heritage. In Entebbe, savor local flavors and explore its rich
              cultural offerings before your journey home from Entebbe
              International Airport. This 5-day safari not only brings you
              face-to-face with awe-inspiring wildlife but also deepens your
              appreciation for conservation, offering an immersive blend of
              adventure, culture, and cherished memories.
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
                src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d1021358.3510110386!2d30.414879782284952!3d-0.47526629043801655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x177d86cd37ba81af%3A0x9daba139d6433d1f!2sEntebbe%20International%20Airport%2C%20Kampala%20Road%2C%20Entebbe%2C%20Uganda!3m2!1d0.045107999999999995!2d32.4426736!4m5!1s0x19de9d58dac3d859%3A0x972f044d905ac1fa!2sBwindi%20Impenetrable%20Forest%2C%20Uganda!3m2!1d-1.0521494999999998!2d29.620100599999997!4m5!1s0x177d86cd37ba81af%3A0x9daba139d6433d1f!2sEntebbe%20International%20Airport%2C%20Kampala%20Road%2C%20Entebbe%2C%20Uganda!3m2!1d0.045107999999999995!2d32.4426736!5e0!3m2!1sen!2ske!4v1732601791088!5m2!1sen!2ske"
                allowfullscreen
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

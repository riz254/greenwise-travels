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
    day: "Day 1",
    title: "Colombo, Sri Lanka",
    description: `Your luxury Indian Ocean adventure begins in vibrant Colombo, the economic
      capital of Sri Lanka. The city has a very rich history and culture which is
      certainly worth exploring, so you may wish to book a couple of extra days here
      before your cruise to discover its temples, welcoming beaches, picturesque
      streets and the UNESCO World Heritage Sites of Dambulla, Polonnaruva and
      Sigiriya. Embarkation will begin around 4pm, with departure at 6pm.`,
    meals: null,
  },
  {
    day: "Day 2",
    title: "Galle",
    description: `Our first stop will take us to one of Sri Lanka’s oldest cities, the beautiful
      Galle. Once the country’s most major city thanks to its large port, Galle was
      colonised by the Portuguese and later by the Dutch, and still bears many traces
      of this colonial past, making it a very interesting place to stop. Galle’s old
      town is a UNESCO World Heritage Site with ancient mosques and churches,
      fortifications, grand mansions and museums. Rambling lanes dotted with stylish
      cafes and boutiques are simply a delight to explore.

      Optional excursions: Handunugoda Tea Estate, stilt fishermen in Koggala,
      Galle Fort, turtle hatchery, river safari along the Madhu.`,
    meals: "BLD",
  },
  {
    day: "Day 3",
    title: "At Sea",
    description: `Today will be spent at sea relaxing before our next adventures. Make use of the
      many luxury facilities and amenities onboard including the swimming pool, spa,
      fitness suite and observation lounge.`,
    meals: "BLD",
  },
  {
    day: "Days 4-6",
    title: "Rasdhoo Atoll & Baa Atoll",
    description: `As we arrive in the beautiful Maldives our first visit will be to Rasdhoo, one of
      the smallest yet most impressive atolls in the archipelago. The atoll is made up
      of five islands, only 3 of which are inhabited, and sits at the heart of a
      stunning lagoon protected by a coral reef. This area offers opportunities for
      snorkelling or diving, with sightings of rays, hammerhead sharks, and turtles.

      After 2 days in Rasdhoo, we visit the UNESCO Biosphere Reserve of Baa Atoll,
      perfect for snorkelling, diving, or relaxing on white sand beaches.`,
    meals: "BLD",
  },
  {
    day: "Days 7-10",
    title: "At Sea",
    description: `As we sail away from the Maldives towards the Seychelles, enjoy 3 truly relaxing days
      at sea. Soak up the sun, enjoy spa treatments, cocktails, or the luxurious vessel amenities.`,
    meals: "BLD",
  },
  {
    day: "Day 11",
    title: "Praslin Island",
    description: `Our penultimate adventure takes us to Praslin Island. Trek inland to the UNESCO
      World Heritage Site of Vallée de Mai Nature Reserve to see endemic palm trees
      and the famous sea coconut. Optional diving and snorkelling available, or relax
      on pristine beaches.`,
    meals: "BLD",
  },
  {
    day: "Day 12",
    title: "La Digue Island",
    description: `Your last stop will be the magnificent Anse Source d’Argent beach on La Digue.
      Turquoise waters invite swimming or snorkelling, giant tortoises roam, and pink
      granite rocks create a picture-postcard scene. Beaches fringed with coconut trees
      make this a perfect end to your adventure.`,
    meals: "BLD",
  },
  {
    day: "Day 13",
    title: "Victoria, Mahé",
    description: `Arrival back in Victoria on Mahé, the main island of the Seychelles, signals the
      end of our voyage. After breakfast, it will be time to disembark. Ask our destination
      experts for advice on extending your stay.`,
    meals: "LBD",
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
          src="/images/images/maldives.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">
            Luxury Sri Lanka, Maldives & Seychelles Trip{" "}
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
              13-Day Luxury Sri Lanka, Maldives & Seychelles{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              This superb Indian Ocean itinerary will see you sail from Sri
              Lanka to the Seychelles via the Maldives, discovering exceptional
              islands, atolls and towns along the way. Sailing aboard a
              luxurious cruise vessel, you will visit UNESCO World Heritage
              Sites such as the old town of Galle, Baa atoll and the Vallée de
              Mai nature reserve. You will stop at the famous Anse Source
              d’Argent beach in the Seychelles, experience the stunning
              underwater world of the Maldives, search for wildlife and natural
              wonders, and much more. With scuba diving available, and Zodiac
              cruises and shore excursions included, each day is certain to
              impress.
            </p>
          </section>

          <div className="!p-6 md:!p-8 bg-green-50  w-full overflow-x-hidden">
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
                src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d16341200.7692929!2d57.110403980234636!3d0.6632917981554468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle%2C%20Sri%20Lanka!3m2!1d6.032894799999999!2d80.2167912!4m5!1s0x3b4715dde8109271%3A0xe6d6cee5ceeb6ee6!2sMaldive%20Islands%2C%20Maldives!3m2!1d3.25!2d73!4m5!1s0x22e02a53ba923a19%3A0x4363dd948132e22c!2sMah%C3%A9%2C%20Seychelles!3m2!1d-4.6826693!2d55.480396!5e0!3m2!1sen!2ske!4v1734099977272!5m2!1sen!2ske"
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

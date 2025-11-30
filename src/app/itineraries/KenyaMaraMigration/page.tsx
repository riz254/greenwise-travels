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
    title: "Arrival in Nairobi",
    description: `On arrival at Jomo Kenyatta International Airport, Nairobi, a private Meet and Greet will welcome you to Kenya’s energetic and bustling capital city. Once at your hotel, spend the remainder of the day relaxing and preparing for the excitement ahead!`,
    meals: "BL",
    mainImage: "/images/images/Nairobi.png",
    hotels: [
      {
        name: "Sarova Stanley",
        description:
          "A historic hotel in the heart of Nairobi, offering elegant accommodations and exceptional service. Ideal for business travelers and tourists seeking comfort and convenience.",
        stars: 5,
        image: "images/images/sarovaStanley.jpg",
      },
      {
        name: "Nairobi Serena Hotel",
        description:
          "A luxury hotel known for its stunning gardens and contemporary design, offering a serene escape from the bustling city. Perfect for leisure travelers and those attending events.",
        stars: 5,
        image: "images/images/NairobiSerena.jpg",
      },
      {
        name: "Weston Hotel",
        description:
          "A modern hotel featuring spacious rooms and state-of-the-art facilities, ideal for both business and leisure travelers looking for comfort and luxury.",
        stars: 3,
        image: "images/images/westonHotel.jpg",
      },
      {
        name: "The Boma Nairobi",
        description:
          "An upscale hotel offering a blend of modern luxury and traditional hospitality, complete with a spa and fine dining options, perfect for a relaxing getaway.",
        stars: 4,
        image: "images/images/bomaNairobi.png",
      },
      {
        name: "Kempinski Hotel",
        description:
          "A prestigious hotel renowned for its lavish accommodations and world-class amenities, offering a luxurious experience in the heart of Nairobi.",
        stars: 5,
        image: "images/images/kempiski.png",
      },
    ],
  },
  {
    day: "DAY 2 - DAY 4",
    title: "Masai Mara",
    description: `Today marks the start of your wild adventure. You’ll bid farewell to your hotel after a cozy night’s rest and head towards the breathtaking Masai Mara. Upon arrival, catch your breath and settle in before embarking on an afternoon game drive. Keep your eyes peeled for the majestic creatures that call this vast savannah home. Get your cameras ready – you never know what wonders await around the next bend! After an exciting day of wildlife encounters, share a private meal with your loved one, or dine with fellow adventurers under a sky ablaze with warm sunset colors. Optional Activities: Cultural visits to Masai villages, horseback safaris, or black rhino tracking. If you're feeling bold, the camp’s sunrise hot air balloon ride (complete with champagne) is an unforgettable experience.`,
    meals: "BLD",
    mainImage: "/images/images/Mara - sam 2.jpg",
    images: [
      "images/images/Mara - sam 2.jpg",
      "images/images/lionBackground.jpg",
      "images/images/MaraMigration.jpg",
      "images/images/Esirai-Gallery-6.jpg",
      "images/images/Hot-Air-Balloon-Safari.jpg",
    ],
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
          "A luxurious camp offering tented accommodations along the Talek River, known for excellent service, gourmet cuisine, and wildlife activities.",
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
    day: "DAY 5",
    title: "Fly to Zanzibar",
    description: `This morning, say farewell to your Kenyan safari with one last game drive, before catching an afternoon flight to Nairobi. From there, you’ll transfer to the international airport for your evening flight to Zanzibar. Upon arrival, you’ll be greeted by a representative and taken to Baraza Resort & Spa, one of the top luxury resorts on the island. For the next seven nights, you'll unwind in an Ocean-Front Villa. Surrounded by the resort's elegant Swahili design and tropical landscapes, you’ll enjoy all-inclusive luxury, whether lounging poolside or exploring Zanzibar's rich culture. Relaxation and adventure await!`,
    meals: "LDBB",
    mainImage: "/images/images/BarazaResort.jpg",
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
        stars: 4,
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
    day: "DAY 6 - DAY 11",
    title: "Explore Zanzibar",
    description: `Unwind and enjoy your first full days in tropical paradise. Lounge on the pristine sands of Zanzibar's best beaches, as friendly butlers bring cocktails to your sunbed. Beyond the luxurious amenities of Baraza Resort & Spa, Zanzibar offers a wealth of historic towns and culturally rich islands ready to be explored. Begin with a visit to Stone Town, a UNESCO World Heritage Site and former spice trading hub. The town is a melting pot of cultural influences, reflected in its architecture and cuisine. Wander through narrow alleyways lined with vibrant bazaars, and explore iconic landmarks like the Portuguese Fort and the Old Slave Market. You may also choose to visit Prison Island, the Mnarani Turtle Sanctuary, or the lush Jozani Forest, home to the charming Red Colobus Monkey. For adventure seekers, reef and dolphin safaris await in Zanzibar's crystal-clear waters, or enjoy a cultural tour through local villages for a more grounded experience. The possibilities on this enchanting East African island are endless.`,
    meals: "BLD",
    images: [
      "images/images/zanzibar.jpg",
      "images/images/zanzibarFest.jpg",
      "images/images/zanzibarStreet.jpg",
      "images/images/zanzibarStreet.jpg",
    ],
  },
  {
    day: "DAY 12",
    title: "Depart from Zanzibar",
    description: `After breakfast, you'll check out of your luxurious beach resort and be transferred to the airport for your bittersweet journey home. As you depart, you'll carry with you countless blissful memories and a deep connection to East Africa. Your Kenya-Zanzibar honeymoon will be filled with stories to cherish for a lifetime. We're certain this is just the beginning of many wonderful adventures together as a married couple.`,
    meals: "B",
    mainImage: "",
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
          src="/images/images/lake-nakuru-flamingoes.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">
            13-DAY MIGRATION SAFARI ITINERARY
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
              13-DAY MIGRATION SAFARI{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Embark on a thrilling 13-day Migration Safari through East
              Africa’s breathtaking landscapes, encountering iconic wildlife
              like the Big Five (lion, elephant, buffalo, leopard, and rhino)
              along the way.Experience unforgettable game drives across the
              Masai Mara and Serengeti, where you’ll witness the awe-inspiring
              Great Migration as massive herds of wildebeest and zebra move in
              search of greener pastures. Beyond wildlife, explore East
              Africa&apos;s rich cultural heritage with visits to local
              communities and historic sites like Olduvai Gorge. This safari
              promises lasting memories and an immersive adventure in one of the
              world’s most spectacular destinations.
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
                src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d2041194.3333008229!2d34.50677661592069!3d-2.2626325732829073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x182f129102505cef%3A0xefc58e7ef0660bf2!2sJomo%20Kenyatta%20International%20Airport(JKIA)%20(NBO)%2C%20Embakasi%2C%20Nairobi!3m2!1d-1.3225242!2d36.9245295!4m5!1s0x182ced340e0926ff%3A0xf11b680298c8c545!2sMasai%20Mara%20National%20Reserve%2C%20Kenya!3m2!1d-1.2482106!2d35.011966799999996!4m5!1s0x1832cdd680dac6d1%3A0x2ea157f39deb3945!2sSerengeti%20National%20Park%2C%20Tanzania!3m2!1d-2.3333333!2d34.8333333!4m5!1s0x18340d59ac10ebb9%3A0xf5336dab1671264c!2sNgorongoro%20Crater%2C%20Tanzania!3m2!1d-3.1617522!2d35.5876697!4m5!1s0x18371c88f2387383%3A0xbc1907f7ec497152!2sArusha%2C%20Tanzania!3m2!1d-3.3869254!2d36.6829927!4m5!1s0x1837711890eb8377%3A0x985958a09027ead3!2sKilimanjaro%20International%20Airport%2C%20Kilimanjaro%20Airport%20Road%2C%20Tanzania!3m2!1d-3.4245248!2d37.065080099999996!5e0!3m2!1sen!2ske!4v1732607235373!5m2!1sen!2ske"
                loading="lazy"
                width="800"
                height="450"
                style={{ border: 0 }}
                // allowFullScreen
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
                "Pick-up and drop-off from Nairobi.",
                "4x4 safari vehicle with an experienced guide.",
                "Complimentary Authentic Branded Safari Hat and essentials pack.",
                "Full board in camps or lodges.",
                "Unlimited game drives.",
                "All meals as per itinerary.",
                "Park Entry Fees.",
                "Unlimited supply of drinking water while on safari.",
                "Visits to Samburu and Maasai villages.",
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

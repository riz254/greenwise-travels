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
        image: "/images/images/sarovaStanley.jpg",
      },
      {
        name: "Nairobi Serena Hotel",
        description:
          "A luxury hotel known for its stunning gardens and contemporary design, offering a serene escape from the bustling city. Perfect for leisure travelers and those attending events.",
        stars: 5,
        image: "/images/images/NairobiSerena.jpg",
      },
      {
        name: "Weston Hotel",
        description:
          "A modern hotel featuring spacious rooms and state-of-the-art facilities, ideal for both business and leisure travelers looking for comfort and luxury.",
        stars: 3,
        image: "/images/images/westonHotel.jpg",
      },
      {
        name: "The Boma Nairobi",
        description:
          "An upscale hotel offering a blend of modern luxury and traditional hospitality, complete with a spa and fine dining options, perfect for a relaxing getaway.",
        stars: 4,
        image: "/images/images/bomaNairobi.png",
      },
      {
        name: "Kempinski Hotel",
        description:
          "A prestigious hotel renowned for its lavish accommodations and world-class amenities, offering a luxurious experience in the heart of Nairobi.",
        stars: 5,
        image: "/images/images/kempiski.png",
      },
    ],
  },
  {
    day: "DAY 2",
    title: "Samburu Game Reserve",
    description: `After breakfast, drive to Samburu Game Reserve, famous for its rugged landscape. Arrive for lunch, followed by a siesta and an afternoon game drive.
The Ewaso Nyiro River draws wildlife like elephants, along with unique species such as gerenuks, beisa oryx, and Grevy’s zebra. Bird lovers will enjoy sightings of the Palm Nut Vulture and Vinaceous Dove. As the sun sets, watch for leopards. Overnight at Sarova Shaba Game Lodge.`,
    meals: "LDBB",
    mainImage: "/images/images/Samburu1.jpg",
    hotels: [
      {
        name: "Sarova Shaba Game Lodge",
        description:
          "Set on the banks of the Ewaso Nyiro River, this luxury lodge offers a serene atmosphere, comfortable rooms, and excellent game viewing.",
        stars: 5,
        image: "/images/images/Sarova-Shaba.jpg",
      },
      {
        name: "Elephant Bedroom Camp",
        description:
          "A luxury tented camp designed to provide an intimate safari experience with personalized service and excellent wildlife viewing.",
        stars: 4,
        image: "/images/images/Elephant-bedroom.png",
      },
      {
        name: "Saruni Samburu",
        description:
          "An eco-friendly camp offering comfortable tents and an authentic safari experience with knowledgeable guides and stunning views.",
        stars: 3,
        image: "/images/images/Saruni-Basecamp-Saruni-Samburu-guides (1).jpg",
      },
      {
        name: "Sasaab Lodge",
        description:
          "Perched on the edge of a river valley, the architecture of Sasaab blends Swahili and Moroccan design principals in which the African heat is of primary consideration.",
        stars: 4,
        image:
          "/images/images/Sasaab-Luxury-Camp-Explore-common-area-600x465.jpg",
      },
      {
        name: "Samburu Intrepids Camp",
        description:
          "A luxury tented camp located near Samburu National Reserve, known for its exceptional service and immersive wildlife experiences.",
        stars: 5,
        image: "/images/images/samburu-intrepids-gallerylounge.png",
      },
    ],
  },

  {
    day: "DAY 3",
    title: "Full Day in Samburu Game Reserve",
    description: `Spend the day exploring both Samburu and Buffalo Springs reserves with morning and afternoon game drives. Keep an eye out for leopards, especially at dusk, and enjoy the stunning sunset over the doum palms along the river.

Optional Activity: Visit a Samburu Manyatta to experience the local culture and learn how they thrive in this challenging environment.`,
    meals: "LDBB",
    images: [
      "/images/images/Samburu1.jpg",
      "/images/images/elephants-in-samburu-national-reserve.jpg",
      "/images/images/dining-by-the-waterhole-in-samburu-sopa-lodge.jpg",
      "/images/images/Lionness-and-the-cubs-lying-on-the-grass-in-samburu.jpg",
    ],
    hotels: null,
  },

  {
    day: "DAY 4 & 5",
    title: "Lake Nakuru National Park",
    description: `After breakfast, depart for Lake Nakuru National Park, with a stop at Thompson’s Falls for a scenic view. Arrive at your lodge in time for lunch.

Lake Nakuru, located in the heart of the Rift Valley, is famous for its diverse birdlife and offers sanctuary to endangered species such as Rothschild giraffes, black and white rhinos, and leopards. Explore key sights like Baboon Cliff, Lion Hill, and the Mau escarpment.

The park boasts the largest Euphorbia forest in Africa, stunning observation points, and diverse landscapes of marshes, grasslands, cliffs, and woodlands. The afternoon is at your leisure. Enjoy dinner and an overnight stay at Sarova Lionhill Game Lodge.`,
    meals: "LDBB",
    mainImage: "/images/images/lake-nakuru-flamingoes.jpg",
    hotels: [
      {
        name: "Sarova Lionhill Game Lodge",
        description:
          "A luxurious lodge overlooking Lake Nakuru, featuring elegant accommodations and top-notch amenities, perfect for a high-end safari experience.",
        stars: 5,
        image: "/images/images/Sarova_Lion_Hill_Game_Lodge_-_Ziwa_Suite_11.jpg",
      },
      {
        name: "Lake Nakuru Lodge",
        description:
          "Nestled within the park, this comfortable lodge offers stunning views and a serene environment, ideal for nature lovers and safari enthusiasts.",
        stars: 4,
        image: "/images/images/lake-nakuru-lodge.jpg",
      },
      {
        name: "Sarova Woodlands Hotel",
        description:
          "A cozy hotel located just outside the park, offering comfortable accommodations and easy access to local attractions.",
        stars: 5,
        image: "/images/images/Sarova-woodlands.jpg",
      },
      {
        name: "Midland Hotel",
        description:
          "A beautiful hotel with breathtaking views of the surrounding landscapes, offering modern amenities and personalized service.",
        stars: 4,
        image: "/images/images/the-midland-hotel-exterior-01.jpg",
      },
    ],
  },

  {
    day: "DAY 6",
    title: "Masai Mara National Reserve",
    description: `Start the day with an early breakfast before heading to the Masai Mara National Reserve, renowned for its breathtaking scenery and abundant wildlife. Upon arrival, enjoy a warm welcome and a delicious lunch before some leisure time at the camp.

In the afternoon, embark on a thrilling game drive through the vast plains and grasslands, home to iconic wildlife such as lions, elephants, rhinos, cheetahs, and giraffes, along with a wide variety of bird species.

Return to camp for dinner and an overnight stay at Sarova Mara Tented Camp.`,
    meals: "LDBB",
    images: [
      "/images/images/Mara - sam 2.jpg",
      "/images/images/lionBackground.jpg",
      "/images/images/MaraMigration.jpg",
      "/images/images/Esirai-Gallery-6.jpg",
      "/images/images/Hot-Air-Balloon-Safari.jpg",
    ],
    hotels: [
      {
        name: "Sarova Mara Game Camp",
        description:
          "A luxurious tented camp nestled in the heart of the Mara, offering stunning views, gourmet dining, and an immersive wildlife experience.",
        stars: 5,
        image: "/images/images/sarovaMara.jpg",
      },
      {
        name: "Mara Serena Safari Lodge",
        description:
          "A stunning lodge overlooking the plains, featuring comfortable accommodations, a swimming pool, and exceptional service amidst breathtaking landscapes.",
        stars: 4,
        image: "/images/images/MaraSerenaSafariLonge.jpg",
      },
      {
        name: "Mara Intrepids Camp",
        description:
          "A luxurious camp offering tented accommodations along the Talek River, known for its excellent service, gourmet cuisine, and wildlife activities.",
        stars: 5,
        image: "/images/images/family-tent-mara-intrepids.jpg",
      },
      {
        name: "Mara Sopa Lodge",
        description:
          "A charming lodge set in the Mara, featuring comfortable accommodations, beautiful gardens, and easy access to wildlife viewing opportunities.",
        stars: 4,
        image: "/images/images/MaraSopa.jpg",
      },
    ],
  },

  {
    day: "DAY 7",
    title: "Full Day in the Masai Mara National Reserve",
    description: `After breakfast, enjoy a full day of adventure in the Masai Mara, keeping an eye out for the Big Five: lion, elephant, buffalo, leopard, and rhino. You may even witness a thrilling predator chase or a kill. Return to the camp for dinner and overnight stay.

Optional Activities:

Balloon Safari: Embark on a magical early morning balloon ride over the Mara plains, followed by a champagne breakfast in the bush. The serene flight offers a unique perspective of the wildlife below. The day concludes with a game drive back to camp.

Visit to a Masai Manyatta: Explore a traditional Maasai village and learn about the fascinating culture, customs, and lifestyle of this iconic community.`,
    meals: "LDBB",
    images: [
      "/images/images/Mara - sam 2.jpg",
      "/images/images/lionBackground.jpg",
      "/images/images/MaraMigration.jpg",
      "/images/images/Esirai-Gallery-6.jpg",
      "/images/images/Hot-Air-Balloon-Safari.jpg",
    ],
    hotels: [
      {
        name: "Sarova Mara Game Camp",
        description:
          "A luxurious tented camp nestled in the heart of the Mara, offering stunning views, gourmet dining, and an immersive wildlife experience.",
        stars: 5,
        image: "/images/images/sarovaMara.jpg",
      },
      {
        name: "Mara Serena Safari Lodge",
        description:
          "A stunning lodge overlooking the plains, featuring comfortable accommodations, a swimming pool, and exceptional service amidst breathtaking landscapes.",
        stars: 4,
        image: "/images/images/MaraSerenaSafariLonge.jpg",
      },
      {
        name: "Mara Intrepids Camp",
        description:
          "A luxurious camp offering tented accommodations along the Talek River, known for its excellent service, gourmet cuisine, and wildlife activities.",
        stars: 5,
        image: "/images/images/family-tent-mara-intrepids.jpg",
      },
      {
        name: "Mara Sopa Lodge",
        description:
          "A charming lodge set in the Mara, featuring comfortable accommodations, beautiful gardens, and easy access to wildlife viewing opportunities.",
        stars: 4,
        image: "/images/images/MaraSopa.jpg",
      },
    ],
  },

  {
    day: "DAY 8",
    title: "Nairobi / Tour End",
    description: `After breakfast, check-out and bid farewell to the lodge team. Depart for Nairobi, taking with you photographs to remember your unforgettable safari experience. If time allows, enjoy lunch at the Carnivore restaurant. Your guide will then transfer you to Jomo Kenyatta International Airport for your onward flight.`,
    meals: "BL",
    mainImage: "",
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
          src="/images/images/lake-nakuru-flamingoes.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">
            Samburu - Nakuru - Mara Itinerary
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
              8 DAYS 7 NIGHTS: SAMBURU, NAKURU and MASAAI MARA SAFARI{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              This itinerary offers a rich blend of diverse landscapes and
              incredible wildlife encounters, from the arid beauty of Samburu,
              home to rare species, to the stunning flamingo-filled shores of
              Lake Nakuru, and finally, the world-renowned Maasai Mara, where
              the Big Five and the Great Migration come to life. Experience
              Kenya’s natural wonders, vibrant cultures, and breathtaking
              scenery in one comprehensive journey.
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
                                    src={`${hotel.image}`}
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
                src="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d1021374.0597745903!2d35.68245620208149!3d-0.3534115860659441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x182f129102505cef%3A0xefc58e7ef0660bf2!2sJomo%20Kenyatta%20International%20Airport(JKIA)%20(NBO)%2C%20Embakasi%2C%20Nairobi!3m2!1d-1.3225242!2d36.9245295!4m5!1s0x182ced340e0926ff%3A0xf11b680298c8c545!2sMasai%20Mara%20National%20Reserve%2C%20Kenya!3m2!1d-1.2482106!2d35.011966799999996!4m5!1s0x18299ad44c2b87a1%3A0x8ad29aeb6bc48e31!2sLake%20Nakuru%20National%20Park%2C%20Nakuru!3m2!1d-0.40353039999999996!2d36.0961663!4m5!1s0x17888d933c6f7369%3A0xa2e2dc34ae133bde!2sSamburu%20National%20Reserve!3m2!1d0.6110770999999999!2d37.5375057!4m5!1s0x182f129102505cef%3A0xefc58e7ef0660bf2!2sJomo%20Kenyatta%20International%20Airport(JKIA)%20(NBO)%2C%20Embakasi%2C%20Nairobi!3m2!1d-1.3225242!2d36.9245295!5e0!3m2!1sen!2ske!4v1732606603285!5m2!1sen!2ske"
                width="600"
                height="450"
                style="border:0;"
                allowFullScreen
                loading="lazy"
                width="800"
                height="450"
                style={{ border: 0 }}
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

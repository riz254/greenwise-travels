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
    description: `Upon your arrival in Entebbe, your guide will welcome you and transfer you to your hotel for the night. Depending on your arrival time, you may have the opportunity to explore nearby sights in Kampala. Enjoy scenic views of Lake Victoria from your hotel. You can opt for dinner at the hotel or let us recommend some great local spots for dining and drinks around town.`,
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
    title: "Entebbe to Queen Elizabeth National Park",
    description: `Start your day with a hearty breakfast in Entebbe before taking a flight to Queen Elizabeth National Park. Nestled at the foot of the Rwenzori Mountain range and flanked by Lake Edward and Lake George, this beautiful park boasts abundant wildlife, including elephants, lions, hippos, and numerous bird species. Enjoy your first game drive and scenic views upon arrival.`,
    meals: "LDBB",
    mainImage: "/images/images/queen-elizabeth-uganda-1024x681.jpg",
    hotels: [
      {
        name: "Mweya Safari Lodge",
        description:
          "Located on the Kazinga Channel, this lodge offers luxurious accommodation with stunning views, perfect for unwinding after a day of exploration.",
        stars: 3,
        image: "/images/images/uganda_mweya_safari.jpg",
      },
      {
        name: "Jacana Safari Lodge",
        description:
          "A peaceful lodge overlooking Lake Nyamusingire, providing a tranquil retreat amidst nature with comfortable rooms and great service.",
        stars: 3,
        image: "/images/images/jacana-safari-lodge.jpg",
      },
      {
        name: "Enganzi Lodge",
        description:
          "This lodge provides sweeping views of the park and cozy accommodations, offering a close connection to nature with all the comforts.",
        stars: 4,
        image: "/images/images/Engazzi.png",
      },
      {
        name: "Buffalo Safari Lodge",
        description:
          "An eco-friendly lodge with excellent views of Lake George, providing an intimate safari experience with a touch of luxury.",
        stars: 3,
        image: "/images/images/buffalo_safari_lodge.jpg",
      },
      {
        name: "Kyambura Gorge Lodge",
        description:
          "A stylish lodge set on the edge of Kyambura Gorge, known for its luxurious ambiance and breathtaking landscapes.",
        stars: 4,
        image: "/images/images/kyambura_gorge_lodge.jpg",
      },
    ],
  },
  {
    day: "DAY 3",
    title: "Full Day Safari in Queen Elizabeth National Park",
    description: `Spend the day on morning and afternoon game drives across the park. Take a boat safari on the Kazinga Channel to spot hippos, crocodiles, buffalo, and numerous bird species. Optional: Experience a sunrise hot air balloon ride over the park for spectacular views of the wildlife and landscapes.`,
    meals: "LDBB",
    mainImage: "/images/images/queen-elizabeth-uganda-1024x681.jpg",
    hotels: null,
  },
  {
    day: "DAY 4",
    title: "Ishasha",
    description: `Drive to the southern sector of Queen Elizabeth National Park, Ishasha, famous for its tree-climbing lions. On the way, visit the Kyambura Gorge to see chimpanzees, red-tailed monkeys, colobus monkeys, baboons, and vervet monkeys. Arrive at your lodge in time to relax or enjoy an evening game drive.`,
    meals: "LDBB",
    mainImage: "/images/images/Ishasha-Wilderness-Camp.jpg",
    hotels: [
      {
        name: "Ishasha Wilderness Camp",
        description:
          "Set along the Ntungwe River, this camp offers a unique blend of comfort and authenticity, perfect for spotting the famous tree-climbing lions of Ishasha.",
        stars: 4,
        image: "/images/images/Ishasha-Wilderness-Camp.jpg",
      },
      {
        name: "Savannah Resort Hotel",
        description:
          "A cozy lodge with beautiful views of the savannah and modern amenities, perfect for a relaxing stay in the heart of Ishasha.",
        stars: 3,
        image: "/images/images/Savannah-Resort-Hotel.jpg",
      },
      {
        name: "Enjojo Lodge",
        description:
          "This eco-friendly lodge set amidst lush forest offers rustic-style chalets and a tranquil escape into nature.",
        stars: 4,
        image: "/images/images/Enjojo-Lodge.png",
      },
      {
        name: "Kasenyi Safari Camp",
        description:
          "Located close to the park’s game trails, this camp provides luxury tents, delicious cuisine, and an immersive experience in nature.",
        stars: 5,
        image: "/images/images/Kasenyi-Safari-Camp.jpg",
      },
    ],
  },
  {
    day: "DAY 5",
    title: "Ishasha to Bwindi Impenetrable Forest",
    description: `Today, travel into the Virunga Mountains to reach Bwindi Impenetrable Forest. Home to mountain gorillas, chimpanzees, and over 110 mammal species and 360 birds. Arrive at your lodge and prepare for the next day’s gorilla trek.`,
    meals: "LDBB",
    mainImage: "/images/images/Bwindi-impenetrable1.png",
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
        image: "/images/images/mahoganySprings.jpg",
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
    day: "DAY 6",
    title: "Gorilla Trekking in Bwindi",
    description: `Wake early for your gorilla trek. You will be assigned to a habituated gorilla group. Treks can take from under an hour to up to 8 hours depending on group location. After the trek, return to your lodge to relax. Optional: Balloon safari over the plains or a visit to a local community village.`,
    meals: "LDBB",
    mainImage: "/images/images/gorilla-trek-africa.jpg",
    hotels: null,
  },
  {
    day: "DAY 7",
    title: "Bwindi to Murchison Falls",
    description: `Breakfast at the lodge, then fly from Kihihi to Murchison Falls with a stop in Entebbe. Arrive for lunch, relax at your lodge, and enjoy an afternoon game drive.`,
    meals: "BL",
    mainImage: "/images/images/murchisonFalls.jpg",
    hotels: [
      {
        name: "Paraa Safari Lodge",
        description:
          "An iconic lodge overlooking the Nile River, offering luxurious rooms and an infinity pool with panoramic views.",
        stars: 4,
        image: "/images/images/paaraLounge.jpg",
      },
      {
        name: "Baker’s Lodge",
        description:
          "An intimate lodge on the southern bank of the Nile, known for its cozy atmosphere and riverside views.",
        stars: 4,
        image: "/images/images/Bakers-Lodge-guest-area.jpg",
      },
      {
        name: "Chobe Safari Lodge",
        description:
          "A luxury lodge with stunning views of the Nile, offering a unique blend of relaxation and adventure.",
        stars: 4,
        image: "/images/images/Chobe-Safari-Lodge.jpg",
      },
      {
        name: "Murchison River Lodge",
        description:
          "An eco-friendly lodge with thatched cottages and serene views of the river — perfect for nature lovers.",
        stars: 3,
        image: "/images/images/murchisonRiverLodge.jpg",
      },
      {
        name: "Nile Safari Lodge",
        description:
          "A serene lodge along the river, featuring luxurious cottages and a natural pool.",
        stars: 4,
        image: "/images/images/Nile Safari Lodge.jpg",
      },
    ],
  },
  {
    day: "DAY 8",
    title: "Murchison Falls Safari",
    description: `Start with a morning game drive followed by an afternoon boat safari. Explore the falls by boat or hike to the top with your guide. The park is rich in big game and diverse landscapes.`,
    meals: "BL",
    mainImage: "/images/images/murchisonFalls.jpg",
    hotels: null,
  },
  {
    day: "DAY 9",
    title: "Fly Home",
    description: `After a morning safari or relaxing at the lodge, fly back to Entebbe for your international flight home.`,
    meals: "BL",
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
          src="/images/images/UgandaFlying.png"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">UGANDA FLYING SAFARI </h2>
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
              9 DAYS UGANDA-FLYING SAFARI{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              This itinerary captures Uganda’s top three national parks,
              allowing you to explore the country’s highlights without enduring
              lengthy drives. Begin with a night in Entebbe before flying to
              Queen Elizabeth National Park, where you’ll enjoy thrilling game
              drives and boat safaris.
              <br />
              After two nights, drive to Ishasha to witness the renowned
              tree-climbing lions, then continue to Bwindi National Park for an
              unforgettable two-night stay with the mountain gorillas. Finally,
              fly to Murchison Falls National Park for a one-of-a-kind safari
              adventure, then return to Entebbe for your international
              departure.
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
                src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1486774.256894923!2d30.810052038474648!3d-0.3004973477868607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x177d86cd37ba81af%3A0x9daba139d6433d1f!2sEntebbe%20International%20Airport%2C%20Kampala%20Road%2C%20Entebbe%2C%20Uganda!3m2!1d0.045107999999999995!2d32.4426736!4m5!1s0x177dbb4918f784b5%3A0xa1607f018ffee44d!2s9J47%2B7RV%20Murchison%20Falls%20National%20Park%20Safari%2C%20Kampala%2C%20Uganda!3m2!1d0.3557299!2d32.614531299999996!4m5!1s0x19de9d58dac3d859%3A0x972f044d905ac1fa!2sBwindi%20Impenetrable%20Forest%2C%20Uganda!3m2!1d-1.0521494999999998!2d29.620100599999997!4m5!1s0x19de973e58e8550f%3A0xf137854988e27066!2sIshasha%2C%20Uganda!3m2!1d-0.8999999999999999!2d29.716666699999998!4m5!1s0x19df489b3ec38175%3A0x3cfe5a989d13d498!2sQueen%20Elizabeth%20National%20Park%2C%20Uganda!3m2!1d-0.2819105!2d29.9638986!4m5!1s0x177d86cd37ba81af%3A0x9daba139d6433d1f!2sEntebbe%20International%20Airport%2C%20Kampala%20Road%2C%20Entebbe%2C%20Uganda!3m2!1d0.045107999999999995!2d32.4426736!5e0!3m2!1sen!2ske!4v1732601039616!5m2!1sen!2ske"
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

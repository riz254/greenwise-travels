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
    description: `Upon landing at Entebbe International Airport, our friendly representative will be there to greet you and assist with your transfer to the welcoming Protea Hotel. Settle in and unwind after your journey, with the rest of the day free for relaxation or light exploration. You may wish to take a scenic walk along the shores of Lake Victoria or venture into the lively streets of Entebbe, soaking in the town’s charm and warmth. In the evening, enjoy a delightful dinner at the hotel’s restaurant, then retire to your comfortable room for a restful night’s sleep, preparing for the excitement of your upcoming gorilla encounter adventure.`,
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
    title: "Travel to Murchison Falls National Park",
    description: `You will have an early breakfast and drive to Murchison Falls National Park via the Ziwa Rhino Sanctuary where you will have the opportunity to trek the Rhinos. The sanctuary houses Uganda’s Rhino reintroduction project. There are 9 white rhinos and tracking is done on foot for 1 and a half hours. You will continue to Masindi Town for lunch and later drive to Murchison Falls National Park.`,
    meals: "BLD",
    mainImage: null,
    hotels: [
      {
        name: "Paraa Safari Lodge",
        description:
          "A luxurious lodge overlooking the Nile River, featuring spacious rooms, a swimming pool, and exceptional dining options, perfect for exploring Murchison Falls.",
        stars: 4,
        image: "/images/images/paaraLounge.jpg",
      },
      {
        name: "Chobe Safari Lodge",
        description:
          "Situated along the Nile, this lodge offers luxurious accommodations, a stunning infinity pool, and breathtaking river views for a tranquil retreat.",
        stars: 4,
        image: "/images/images/Chobe-Safari-Lodge.jpg",
      },
      {
        name: "Baker's Lodge",
        description:
          "An exclusive lodge set along the Nile, offering elegant rooms, personalized service, and an intimate safari experience amidst the wild.",
        stars: 4,
        image: "/images/images/Bakers-Lodge-guest-area.jpg",
      },
      {
        name: "Nile Safari Lodge",
        description:
          "A boutique eco-lodge offering luxurious amenities, stunning riverside views, and a serene environment ideal for relaxation.",
        stars: 4,
        image: "/images/images/Nile Safari Lodge.jpg",
      },
      {
        name: "Murchison River Lodge",
        description:
          "A family-friendly lodge featuring comfortable accommodations, delicious meals, and a prime location for exploring Murchison Falls National Park.",
        stars: 4,
        image: "/images/images/murchisonRiverLodge.jpg",
      },
    ],
  },
  {
    day: "DAY 3",
    title: "Game drive and Boat safari launch on the Nile",
    description: `Your day begins early with a sunrise game drive on the Nyamsika Plateau, offering the chance to spot an array of wildlife, including Cape buffaloes, Rothschild’s giraffes, Uganda kobs, hartebeests, and waterbucks. Predators such as lions, leopards, and spotted hyenas may also make an appearance, alongside primates like chimpanzees and olive baboons. In the afternoon, embark on a serene boat cruise along the Victoria Nile, heading upstream to the base of the iconic Murchison Falls. Along the way, marvel at hippos, crocodiles, waterbucks, and a vibrant array of birdlife. The boat stops near the "Devil's Cauldron," offering spectacular photo opportunities of the breathtaking falls.`,
    meals: "BLD",
    mainImage: "/images/images/murchison-falls-1.png",
    hotels: null,
  },
  {
    day: "DAY 4",
    title:
      "Visit the top of the fall and travel to Kibale Forest National Park",
    description: `After breakfast, you'll visit the awe-inspiring "Top of Murchison Falls," where the mighty River Nile dramatically forces itself through a narrow 7-meter gorge before plunging 40 meters in a thunderous cascade. Witness this incredible natural spectacle and marvel at the tranquil river below, teeming with wildlife and vibrant birdlife along its banks. Following this memorable visit, embark on a scenic 6-hour journey to Kibale Forest National Park. The drive offers picturesque views of Uganda's countryside, featuring traditional homesteads, lush crop gardens, plantations, and bustling trading centers. Enjoy a lunch break en route before arriving at your destination in the late afternoon. Conclude the day with dinner and an overnight stay at your selected lodge.`,
    meals: "BLD",
    mainImage: null,
    hotels: null,
  },
  {
    day: "DAY 5",
    title: "Chimp tracking and nature walk in Kibale Forest",
    description: `After breakfast, head to the Kanyanchu Tourist Centre at 8:00 am for a briefing on the guidelines for chimpanzee tracking. Kibale Forest National Park is renowned for its rich diversity of primates, including the famous chimpanzees. The tracking adventure lasts 2-3 hours, offering opportunities to spot other primates, birds, butterflies, and various wildlife in their natural habitat. After the trek, return to your lodge for lunch. In the afternoon, enjoy a nature walk in the Bigodi Wetland Sanctuary, home to an impressive variety of bird species and monkeys. Conclude your day with dinner and an overnight stay at your lodge.`,
    meals: "BLD",
    mainImage: null,
    hotels: null,
  },
  {
    day: "DAY 6",
    title: "Game drive and boat cruise in Queen Elizabeth National Park",
    description: `Start your day with a hearty breakfast before heading out for an early morning
game drive. During the drive, you may encounter lions, leopards, giant forest
hogs, Cape buffalo, elephants, Defassa waterbucks, Uganda kobs, topis, and
bushbucks, among others. Return to your lodge for a relaxing lunch. In the afternoon, embark on a two-hour boat cruise along the Kazinga Channel, a 42-kilometer stretch connecting Lake Edward and Lake George. This boat safari offers incredible opportunities for wildlife photography, bird watching, and game viewing, with one of the highest concentrations of hippos and over 550 bird species. Conclude your day with dinner and an overnight stay at your lodge.`,
    meals: "BLD",
    mainImage: null,
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
    day: "DAY 7",
    title: "Travel to Bwindi Impenetrable Forest National Park",
    description: `After breakfast, you will journey to the Ishasha sector of Queen Elizabeth National Park, renowned for its iconic tree-climbing lions lounging on branches as they survey herds of Uganda kob, their preferred prey. The area also hosts buffaloes, elephants, and the rare shoebill stork. Enjoy lunch at a lodge in Ishasha before continuing south to Bwindi Impenetrable Forest National Park. Along the way, take in the breathtaking countryside, bamboo forests, and stunning views of the western rift valley's scenic landscapes. Arrive in the late afternoon and check in to your lodge for dinner and overnight.`,
    meals: "BLD",
    mainImage: null,
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
    day: "DAY 8",
    title: "Uganda Gorilla trekking in Bwindi",
    description: `Today marks the highlight of your Best of Uganda Wildlife Safari. After an early breakfast, you’ll head to the park headquarters for a pre-trek briefing on gorilla trekking guidelines at 7:45 am. Accompanied by experienced guides, you’ll embark on a trek through dense forests and winding trails in search of these magnificent creatures. The trek can take 2-8 hours depending on the gorillas' location, but the effort is rewarded with an unforgettable one-hour encounter with these gentle giants in their natural habitat. Afterward, return to your lodge to relax and reflect on this extraordinary experience. Dinner and overnight will be at your reserved lodge.`,
    meals: "BLD",
    mainImage: null,
    hotels: null,
  },
  {
    day: "DAY 9",
    title:
      "Relaxing day or another Gorilla trekking in Bwindi and transfer to Kisoro town",
    description: `On this day you have the option to unwind and reflect on your incredible gorilla encounter. Relax, share stories, and soak in the memories of the day. Alternatively, if you're eager for another adventure, you can choose to go gorilla trekking once more. After a morning breakfast, head to the park headquarters for a briefing at 7:45 am on the gorilla trekking rules. You’ll once again trek through the thick forest undergrowth with your guides, in search of the gorillas. The trek can take 2-8 hours, depending on where the gorillas are located. Once you find them, you'll spend an hour with these majestic creatures, who share over 90% of their genetic material with humans, offering a profound and unforgettable experience.`,
    meals: "BLD",
    mainImage: null,
    hotels: null,
  },
  {
    day: "DAY 10",
    title: "Travel to Lake Mburo National Park via Igongo Cultural Centre",
    description: `After breakfast, you'll journey to Lake Mburo National Park, home to a series of swamp-fringed lakes teeming with birdlife and green acacia woodlands that shelter wildlife such as zebras, warthogs, elands, and impalas. Enroute, you’ll stop at the Igongo Cultural Centre for lunch, where you can immerse yourself in the history and culture of the Ankole people, renowned for their cattle-keeping traditions. You will also enjoy traditional dances at the center. Afterward, continue your journey to your lodge for dinner and overnight.`,
    meals: "BLD",
    mainImage: null,
    hotels: [
      {
        name: "Mihingo Lodge",
        description:
          "Mihingo Lodge offers a unique and luxurious stay in Lake Mburo with stunning views, spacious tents, and a perfect blend of nature and comfort for an unforgettable experience.",
        stars: 5,
        image: "/images/images/mihingo-lodge.jpg",
      },
      {
        name: "Lake Mburo Safari Lodge",
        description:
          "Located at the edge of Lake Mburo National Park, this lodge offers cozy accommodations with beautiful views, making it an ideal base for safaris and bird watching.",
        stars: 4,
        image: "/images/images/lakeMburoSafari.jpg",
      },
      {
        name: "Rwakobo Rock Lodge",
        description:
          "Set amidst stunning rocky landscapes, Rwakobo Rock Lodge provides a serene and peaceful stay, with great views and an intimate atmosphere, perfect for relaxation.",
        stars: 4,
        image: "/images/images/rwakoboRockLodge.png",
      },
      {
        name: "Sanctuary Gorilla Forest Camp",
        description:
          "An exclusive camp set within the forest, offering close encounters with gorillas, personalized service, and a tranquil setting perfect for nature lovers.",
        stars: 4,
        image: "/images/images/sanctuaryGorillaForest.jpg",
      },
    ],
  },
  {
    day: "DAY 11",
    title:
      "Nature walk and Game drive in the park and Boat cruise on Lake Mburo",
    description: `You will after breakfast go for a tour of the park on foot with an experienced game ranger who will explain to you which animals have left behind footprints and droppings and how long ago. Mburo is one of the two parks in Uganda where it is permitted to go for a tour on foot. You will after the nature walk go for a game drive and return to the lodge for lunch. In the afternoon you will go for a 2-hour boat cruise that will get you quite close to the water animals including crocodiles, hippos, and a variety of birds. You will return to your lodge for dinner and overnight.`,
    meals: "BLD",
    mainImage: null,
    hotels: null,
  },
  {
    day: "DAY 12",
    title: "Travel to Kampala",
    description: `After breakfast you will set off for Kampala. You will have a stopover at the Equator where you will have an opportunity to stand in two hemispheres at the same time and take some photos. The entire stretch of this journey will take 6-7 hours arriving in Kampala in the late afternoon. Dinner and overnight will be at the hotel of your booking.`,
    meals: "BLD",
    mainImage: null,
    hotels: [
      {
        name: "Serena Hotel Kampala",
        description:
          "Located in the heart of Kampala, Serena Hotel offers luxury accommodations with world-class amenities, perfect for both business and leisure travelers.",
        stars: 5,
        image: "/images/images/serenaKampala.jpg",
      },
      {
        name: "Kololo Courts",
        description:
          "This elegant hotel offers well-appointed rooms, a serene atmosphere, and personalized service, situated in one of Kampala’s most prestigious areas.",
        stars: 4,
        image: "/images/images/Kololo-Courts.jpg",
      },
      {
        name: "Imperial Royale Hotel",
        description:
          "A luxury hotel offering spacious rooms and extensive facilities, including a swimming pool, ideal for both business and leisure stays in Kampala.",
        stars: 4,
        image: "/images/images/imperialRoyal.jpg",
      },
      {
        name: "Fairway Hotel & Spa",
        description:
          "An upscale hotel offering spacious rooms, a full-service spa, and exquisite dining options, located in a peaceful and central area of Kampala.",
        stars: 4,
        image: "/images/images/fairwayHotel.jpg",
      },
    ],
  },
  {
    day: "DAY 13",
    title: "Visit the chimp sanctuary on Ngamba Island",
    description: `After breakfast, you will be transferred to the pier on Lake Victoria pier for you to take a boat cruise to Ngamba Island. The boat cruise will be for one hour. You will arrive at the chimpanzee sanctuary and be briefed about the sanctuary after which you will proceed to spend time with the chimps as they feed, relax and do acrobatic swings in the tree branches. Later you will go for a nature walk on the island with the young chimps and cruise back to Entebbe. Depending on the timing of your departure flight you will either be transferred to the Airport for your scheduled flight back home or to the hotel of your booking for dinner and overnight.`,
    meals: null,
    mainImage: null,
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
          src="/images/images/UgandaSafari-african-lions-768x452.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">Uganda Wildlife Safari </h2>
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
              13-DAY UGANDA WILDLIFE SAFARI{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Embark on a 13-day Best of Uganda Wildlife Safari, exploring the
              country’s most iconic destinations. Begin at Murchison Falls
              National Park, where the Mighty Nile River plunges through a
              narrow gorge, creating a breathtaking spectacle. Enjoy thrilling
              game drives, boat cruises, and unforgettable views of this
              magnificent park.
              <br /> Journey to Kibale Forest National Park to encounter
              chimpanzees and other primates in one of East Africa’s richest
              forest ecosystems. Continue to Queen Elizabeth National Park’s
              Ishasha sector, home to the famous tree-climbing lions and scenic
              savannahs, complemented by a serene boat cruise on the Kazinga
              Channel.
              <br /> Conclude your adventure in Bwindi Impenetrable Forest
              National Park with a magical gorilla trekking experience,
              connecting with these gentle giants in their misty mountain home.
              This safari blends thrilling wildlife encounters with Uganda’s
              diverse and stunning landscapes.
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
                src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1021362.2435444444!2d30.45650643102713!3d-0.44816984244843827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala%2C%20Uganda!3m2!1d0.3151692!2d32.5816313!4m5!1s0x19d9ae45074017e7%3A0xb1481b270022a338!2sLake%20Mburo%20National%20Park%2C%20Mbarara%2C%20Uganda!3m2!1d-0.5949804!2d30.9822074!4m5!1s0x19de9d58dac3d859%3A0x972f044d905ac1fa!2sBwindi%20Impenetrable%20Forest%2C%20Uganda!3m2!1d-1.0521494999999998!2d29.620100599999997!4m5!1s0x19df489b3ec38175%3A0x3cfe5a989d13d498!2sQueen%20Elizabeth%20National%20Park%2C%20Uganda!3m2!1d-0.2819105!2d29.9638986!4m5!1s0x177dbb4918f784b5%3A0xa1607f018ffee44d!2s9J47%2B7RV%20Murchison%20Falls%20National%20Park%20Safari%2C%20Kampala%2C%20Uganda!3m2!1d0.3557299!2d32.614531299999996!4m5!1s0x177d86cd37ba81af%3A0x9daba139d6433d1f!2sEntebbe%20International%20Airport%2C%20Kampala%20Road%2C%20Entebbe%2C%20Uganda!3m2!1d0.045107999999999995!2d32.4426736!5e0!3m2!1sen!2ske!4v1732600598921!5m2!1sen!2ske"
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

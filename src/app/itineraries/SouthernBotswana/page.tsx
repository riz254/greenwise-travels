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
    day: "Day 1 - Johannesburg",
    description:
      "Touch down in Jo’burg. You’ve got a free day before you join up with your crew at a 6 pm welcome meeting tonight. We recommend visiting the eye-opening Apartheid Museum to start your journey with some crucial history before meeting up with your group. After your important meeting this evening, why not head out for an optional group dinner and get to know your newfound travel crew? Your leader can point you in the right direction with bar and restaurant recommendations.",
  },
  {
    day: "Day 2 : Khama Rhino Sanctuary",
    description:
      "See ya South Africa – cross the border into Botswana and travel toward the Khama Rhino Sanctuary. It sits on the Kalahari Desert, and is an old hunting area transformed into a conservation project. It now protects what’s left of Botswana's black and white rhino populations, but there are plenty of other beasties hanging around too – zebras, giraffes, leopards, ostriches and wildebeest, all of which chill out around many natural waterholes. Not only do you get to check out awesome animals here, but you’ll also be benefitting local communities and helping protect the white rhino. When the sun begins to set, hop in a jeep to see the rhinos at their most active. About 35 rhinos roam around this 400 ha community-based reserve. Don't forget your binoculars, or you'll be getting them confused with big rocks.",
    meals: "BLD",
  },
  {
    day: "Day 3 : Maun",
    description:
      "Get up real early, jump aboard the truck and head to Maun. Catch up on your beauty sleep or play some roadtrip games to get know your crew better. This journey also includes a free massage service (meaning the road might get a little bumpy). In Maun there’s the chance to stock up on any supplies you might need for the journey ahead – maybe hats, sunscreen and scarves (for the morning chill and the afternoon sun). Maun’s the gateway to one of the world's most renowned and complex ecosystems, the Okavango Delta. This is a one-of-a-kind kinda place – a 16,000 sq km maze of wetlands made up of meandering waterways, green islands, lush plains and loads of wildlife. You might see hippos, crocodiles, elephants and big cats. But honestly it's not really the animals that are the main attraction – it's the incredibly diverse ecosystem and atmospheric waterscapes. Tonight you'll stay on the outskirts of Maun at a simple campsite with shared facilities, wi-fi and optional upgrades.",
    meals: "BLD",
  },
  {
    day: "Day 4 : Okavango Delta Pan Handle",
    description:
      "Make your way to the north-western part of the Okavango Delta, close to the Pan Handle. Now’s the time to find out everything about your fellow travellers – you’ll be old mates by the end of it. Leave the truck at some secure parking and take a 4WD transfer for the last 12 km. Your destination for the next two nights sits on the edge of the Guma Lagoon area. Set up camp and relax on the edge of the lagoon for the rest of the afternoon, then fall asleep to the sounds of the African bush at night – is that noise a hippo or your mate snoring?",
    meals: "BLD",
  },
  {
    day: "Day 5: Okavango Delta Pan Handle",
    description:
      "Today, you get to paddle the mighty Okavango Delta. There's nothing more relaxing than feeling the African sun on your face as you lie back in a mokoro (traditional dugout canoe), while your expert poler propels you down calm waters through papyrus and reed beds to lily covered lagoons and islands. Watch out for elephants, lechwe, warthogs, sitatunga and other plains game in the open. Stop at one of the islands for a swim before returning to camp. If you are interested in the culinary side of Southern Africa, feel free to join your cook for an in-depth cooking class while they prepare tonight's meal.",
    meals: "BLD",
  },
  {
    day: "Day 6 : Kwando River",
    description:
      "This morning, transfer in the 4WDs back to the truck and then make your way to the border to cross into Namibia. Your next camp is on the banks of the Kwando River, in the Caprivi Strip. This strip of land is sandwiched between Botswana and Angola and connects with Zambia and Zimbabwe at its end. Take the opportunity to discover your new surroundings on our favorite mode of transportation - a mokoro. On your return, maybe relax at your camp or jump on one of the optional activities, like the late afternoon boat trip, or a game drive in Mudumu Game Park (look out for buffalo, elephants, antelope and zebras). You can also take a village tour, or join in on a fishing trip – the locals will give you the heads up on the best spots.",
    meals: "BLD",
  },
  {
    day: "Day 7 : Chobe National Park",
    description:
      "This morning, zip over to the edge of Chobe National Park, further through the Caprivi Strip and back into Botswana. Botswana's first national park is perhaps best known for its high concentration of elephants, which can often be seen swimming in the Chobe River. The river also attracts wallowing hippos, lots of birdlife, crocodiles sunning themselves and cheetahs and lions venturing out for a drink. When you arrive, you can head out on an optional late afternoon boat cruise on the river. A sunset cruise is an ideal way to spend the afternoon and toast to another day in Africa. Or, just kick back at camp with a book and relax.",
    meals: "BLD",
  },
  {
    day: "Day 8 : Chobe National Park",
    description:
      "Today, you'll head out on a 4WD game drive in Chobe National Park. There's a huge range of wildlife here, all packed into one tiny area, making it unlike anywhere else in the world! Huge herds of buffalo and elephants are often seen roaming around the savannah, matched by the size of the local lion prides. An estimated 70,000 Kalahari elephants roam the park, too – these majestic beasts are the largest known subspecies of elephant in the world. As well as these fantastic creatures, you might also see zebras, impalas, wildebeest, giraffes, lions, leopards, hyenas, jackals, warthogs, baboons, monkeys and heaps of birds!",
    meals: "BLD",
  },
  {
    day: "Day 9 : Victoria Falls",
    description:
      "This morning there will be time to join an optional game drive in the Chobe National Park. Then, it’s on to the town of Victoria Falls this afternoon. Cross the border into Zimbabwe and arrive in the early afternoon. Before your trip officially ends, your leader will provide a quick orientation walk through town. There is so much to discover in Victoria Falls that it's highly recommended you stay a few extra days. If you'd like to extend your stay, just speak to your booking agent.",
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
          src="/images/images/OkavangoBotswana.jpg"
          alt="Kenya"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-[40pt] font-bold">Botswana Essentials</h2>
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
              9 Days Botswana Essentials{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Prepare to immerse yourself in the heart of Botswana&apos;s wild beauty
              on this 9-day essentials adventure. Your journey begins in the
              vast, golden expanse of the Kalahari Desert, where you&apos;ll track
              the iconic rhinos of this arid landscape. Then, glide through the
              tranquil waters of the Okavango Delta in a traditional mokoro
              canoe, surrounded by lush wetlands teeming with elephants, hippos,
              and vibrant birdlife.
              <br />
              Venture to the floodplains of the Kwando River, where you&apos;ll set
              up camp under starry African skies and listen to the nocturnal
              symphony of the bush. End your adventure in Chobe National Park,
              famed for its remarkable elephant herds and dramatic game drives
              that bring you close to Africa’s most celebrated wildlife. This
              trip encapsulates the best of Botswana’s diverse ecosystems and
              unforgettable safari experiences.
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
                                    // src={`/${hotel.image}`}
                                    src={hotel.image}
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
                src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d7687388.921930988!2d18.82652503764217!3d-19.81421651609471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x1eb11399a9cbbde1%3A0x9c1c66701322c3c8!2sKhama%20Rhino%20Sanctuary%2C%20Paje%2C%20Botswana!3m2!1d-22.234441399999998!2d26.7200393!4m5!1s0x19544d054c080299%3A0xad7cc125ed822f4b!2sMaun%2C%20Botswana!3m2!1d-19.9952622!2d23.4180769!4m5!1s0x195772448daedf8f%3A0x94189101f249823d!2sKwando%20River!3m2!1d-18.0026315!2d23.3094263!4m5!1s0x194fe53f0d97964b%3A0xb5064359416ab317!2sVictoria%20Falls%2C%20Zimbabwe!3m2!1d-17.9315803!2d25.8301677!5e0!3m2!1sen!2ske!4v1734100162086!5m2!1sen!2ske"
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

"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";

const team = [
  {
    name: "KEN OBAT",
    title: "Team Leader",
    image: "/images/images/Ken 3.jpg",
    bio: "With over a decade of experience in travel and tourism, Ken possesses a deep understanding of Africa as a destination. His passion for sustainable tourism led him to found Greenwise Travels.",
  },
  {
    name: "NICKSON OTIENO",
    title: "Sustainability Advisor",
    image: "/images/images/Nickson.jpg",
    bio: "A licensed architect and sustainability expert with over 13 years of experience in climate-smart built environment programs, advising organizations like UN-Habitat and WHO.",
  },
  {
    name: "MILLICENT AKINYI",
    title: "Marketing & Administration Manager",
    image: "/images/images/Millicent 3.jpg",
    bio: "Millicent has been part of the company since inception, ensuring smooth operations, promoting teamwork, and upholding quality and sustainability standards.",
  },
  {
    name: "MORTEN RISOM NIELSEN",
    title: "Partner & Scandinavia Representative",
    image: "/images/images/Morten 3.jpg",
    bio: "Morten, from Denmark, is passionate about sustainable travel. His partnership with Greenwise brings Scandinavian travelers closer to authentic African experiences.",
  },
  {
    name: "CYNTHIA PATRICIA PLIEGO",
    title: "Mexico Representative",
    image: "/images/images/person_4.jpg",
    bio: "Cynthia is a conservation-driven biologist from Mexico, working on international projects promoting ecosystem-based adaptation and sustainable development.",
  },
  {
    name: "ERIKA DRAZEN",
    title: "USA Representative",
    image: "/images/images/Erika Drazen 3.jpg",
    bio: "Erika believes in tourism as a force for good. With global experience, she focuses on sustainable development, social impact, and environmental justice.",
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <>
      <Navbar />
      <Hero />
      <section className="bg-green-50 !py-20">
        <div className=" !mx-auto px-6 text-center">
          <h2 className="!text-3xl md:text-4xl font-bold text-green-800 !mb-6">
            Meet The Team
          </h2>
          <p className="max-w-3xl !mx-auto text-gray-700 !mb-12">
            We are pleased to introduce you to the amazing team behind Greenwise
            Travels. Drawn from diverse backgrounds, their collective knowledge
            and experience deliver exceptional results for our clients.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 !px-32">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedMember(member)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-lime-700 bg-opacity-60 opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-center items-center text-white">
                  <h3 className="!text-3xl font-bold !mb-1">{member.name}</h3>
                  <p className="!text-xl font-medium">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Popup */}
        {selectedMember && (
          <div
            className="fixed inset-0 !bg-opacity-0 backdrop-blur-lg flex justify-center items-center z-50"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-[90%] h-3/4 md:w-3/4 lg:w-3/4 p-6 relative animate-fadeIn flex flex-col md:flex-row gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                onClick={() => setSelectedMember(null)}
              >
                &times;
              </button>
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={500}
                height={400}
                className="rounded-xs w-fit h-[fit] object-cover mb-4"
              />
              {/* Right: Text */}
              <div className="md:w-1/2 w-full flex flex-col justify-left">
                <h3 className="text-2xl font-bold text-green-800 mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                  {selectedMember.title}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

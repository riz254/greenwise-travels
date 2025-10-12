"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero2";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

const processSteps = [
  {
    num: "1",
    title: "Discover",
    text: "You are referred to us or stumble upon our advertisements and decide to visit our website.",
  },
  {
    num: "2",
    title: "Engage",
    text: "You fill in the 'Contact Us' form, design your trip, or reach us directly via phone.",
  },
  {
    num: "3",
    title: "Consult",
    text: "We carefully assess your needs and initiate initial discussions via email or call.",
  },
  {
    num: "4",
    title: "Curating",
    text: "We craft initial itineraries for luxury East Africa tour packages tailored to your preferences.",
  },
  {
    num: "5",
    title: "Refinement",
    text: "We refine the itinerary and pricing through collaborative discussions until you’re fully satisfied.",
  },
  {
    num: "6",
    title: "Confirmation",
    text: "Once aligned, you confirm and make payment according to agreed terms.",
  },
  {
    num: "7",
    title: "Preparation",
    text: "Two weeks prior to arrival, we provide valuable travel info, recommendations, and tips.",
  },
  {
    num: "8",
    title: "Experience",
    text: "You arrive at your destination and enjoy your unforgettable adventure.",
  },
];

export default function ProcessSection() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="relative bg-gradient-to-b from-emerald-50 to-white !py-20">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-emerald-800 !mb-4"
            data-aos="fade-up"
          >
            OUR PROCESS
          </h2>
          <p
            className=" !mx-auto text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Embark on a transformative journey with us. Explore our unique
            process, crafted to turn dreams into remarkable realities.
          </p>
          <p
            className="max-w-xl !mx-auto text-gray-600 !mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At Greenwise Travels, we follow the steps below:
          </p>
        </div>

        <div className="relative max-w-3/4 !mx-auto">
          {/* Vertical Line */}
          <div className="absolute !left-1/2 top-0 -translate-x-1/2 w-1 !px-2 bg-emerald-200 h-full"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`!mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Line marker */}
              <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="absolute top-0 flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-600 text-white font-bold rounded-full flex items-center justify-center shadow-lg border-4 border-emerald-100">
                    {step.num}
                  </div>
                </div>
              </div>

              {/* Text box */}
              <div
                className={`bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl !p-6 md:w-1/2 border border-gray-100 ${
                  index % 2 === 0
                    ? "!md:mr-auto !md:ml-16"
                    : "!md:ml-auto !md:mr-16"
                }`}
              >
                <h3 className="text-xl font-semibold text-emerald-700 !mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-snug">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

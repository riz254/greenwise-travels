"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};

export default function OurValues() {
  const sections = [
    {
      title: "To Our Esteemed Customers",
      color: "from-green-200/50 via-green-100/40 to-green-50/30",
      items: [
        {
          title: "Commitment to Excellence",
          text: "We deliver exceptional service beyond comparison, anticipating our customers’ changing needs with creativity.",
        },
        {
          title: "Value for Money & Satisfaction",
          text: "We ensure expectations are exceeded through continuous improvement and exceptional quality.",
        },
        {
          title: "Creativity and Innovation",
          text: "We embrace new trends and ideas, turning them into unique, customer-focused travel experiences.",
        },
        {
          title: "Timeliness",
          text: "We provide outstanding service promptly, ensuring reliability and efficiency in everything we do.",
        },
      ],
    },
    {
      title: "To Community and Environment",
      color: "from-green-100/40 via-emerald-50/40 to-lime-100/40",
      items: [
        {
          title: "Community Empowerment",
          text: "We give back to host communities, harnessing tourism to uplift livelihoods.",
        },
        {
          title: "Environmental Conservation",
          text: "We promote responsible travel and sustainable resource use.",
        },
        {
          title: "Corporate Social Responsibility",
          text: "Our CESR philosophy is at our core, not a token effort — driving lasting positive impact.",
        },
      ],
    },
    {
      title: "To Partners and Friends",
      color: "from-emerald-100/40 via-green-50/40 to-emerald-50/40",
      items: [
        {
          title: "Transparency and Accountability",
          text: "We conduct business openly, honoring the trust of our partners.",
        },
        {
          title: "Credible and Measurable Impacts",
          text: "We aim to create tangible, measurable change through our initiatives.",
        },
      ],
    },
    {
      title: "To Our Team",
      color: "from-green-50/40 via-lime-50/40 to-green-100/40",
      items: [
        {
          title: "Staff Empowerment",
          text: "Our team is our foundation — continuously trained, equipped, and supported to excel.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <section className="!py-20 bg-gradient-to-b from-green-50 via-white to-green-100">
        <div className="max-w-full !mx-auto !px-6 lg:!px-8">
          {/* Header */}
          <div className="text-center !mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Our Values
            </h2>
            <p className="!mt-4 text-gray-700 leading-snug max-w-full !mx-auto">
              At Greenwise, we uphold our values in every aspect of our
              operation. We always endeavour to conduct our business in an
              ethical manner and we hold ourselves accountable for our actions
              and decisions. We are determined to always surpass the
              expectations of our stakeholders by becoming a dependable partner
              and service provider. We believe in doing the right things all the
              time and all our actions are aimed at building long-lasting
              relationships with our customers and partners.
            </p>
            <p className="!mt-4 text-gray-700">
              To all our stakeholders, we pledge as follows:
            </p>
          </div>

          {/* Customers Section */}
          <div className="!mt-16">
            <h3 className="text-2xl font-semibold text-center text-green-800 !mb-8">
              To Our Esteemed Customers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Commitment to Excellence",
                  text: "We strive to deliver excellent services beyond comparison, proactively identifying our customers’ changing needs and addressing them creatively.",
                },
                {
                  title: "Value for Money & Customer Satisfaction",
                  text: "The foundation of our pride. We ensure that customers’ expectations are exceeded through continuous improvement and unmatched service quality.",
                },
                {
                  title: "Creativity and Innovation",
                  text: "We are committed to emerging trends and innovation across our products, processes, and services, continuously improving to create unique travel experiences.",
                },
                {
                  title: "Timeliness",
                  text: "We always deliver outstanding services promptly — ensuring customer satisfaction and reliability.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="!p-8 bg-green-100/70 hover:bg-green-200 transition-all duration-300 rounded-xl shadow-sm hover:shadow-lg text-center"
                >
                  <h4 className="text-xl font-semibold text-green-900 !mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community & Environment Section */}
          <div className="!mt-20">
            <h3 className="text-2xl font-semibold text-center text-green-800 !mb-8">
              To Community and Environment
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Community Empowerment",
                  text: "All our undertakings aim to give back to host communities. We leverage the transformative power of tourism to uplift lives.",
                },
                {
                  title: "Environment & Resource Conservation",
                  text: "Resource conservation is one of our core pillars. We encourage responsible travel and environmentally friendly practices.",
                },
                {
                  title: "Corporate Social Responsibility",
                  text: "We integrate Corporate Environmental and Social Responsibility (CESR) into our core business, driving genuine impact.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="!p-8 bg-green-100/70 hover:bg-green-200 transition-all duration-300 rounded-xl shadow-sm hover:shadow-lg text-center"
                >
                  <h4 className="text-xl font-semibold text-green-900 !mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="!mt-20">
            <h3 className="text-2xl font-semibold text-center text-green-800 !mb-8">
              To Partners and Friends
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Transparency and Accountability",
                  text: "We value the support of our partners and pledge to conduct our business transparently, with integrity and openness.",
                },
                {
                  title: "Credible and Measurable Impacts",
                  text: "We aim to make a tangible, positive difference through measurable outcomes that uplift communities and the environment.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="!p-8 bg-green-100/70 hover:bg-green-200 transition-all duration-300 rounded-xl shadow-sm hover:shadow-lg text-center"
                >
                  <h4 className="text-xl font-semibold text-green-900 !mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="!mt-20">
            <h3 className="text-2xl font-semibold text-center text-green-800 !mb-8">
              To Our Team
            </h3>
            <div className="max-w-full !mx-auto">
              <div className="!p-8 bg-green-100/70 hover:bg-green-200 transition-all duration-300 rounded-xl shadow-sm hover:shadow-lg text-center">
                <h4 className="text-xl font-semibold text-green-900 !mb-3">
                  Staff Empowerment
                </h4>
                <p className="text-gray-700">
                  Our dedicated team is the foundation of our excellence. We
                  continuously invest in their growth through training, tools,
                  and support to achieve excellence in all aspects of our
                  operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

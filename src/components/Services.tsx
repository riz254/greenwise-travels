"use client";

import Link from "next/link";
import {
  FaMountain,
  FaUsers,
  FaGraduationCap,
  FaPlaneDeparture,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";

export default function Services() {
  const serviceStyle = {
    backgroundImage: "url('/images/images/kenya-zebra-rainbow.webp')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    padding: "80px",
  };

  const services = [
    {
      title: "Wildlife & Adventure Tours",
      icon: <FaMountain size={40} className="text-green-200 mb-3 mx-auto" />,
      description: `Africa is renowned for its amazing wildlife reserves and 
      sandy beaches which attract countless visitors. We know exactly where to 
      take you for that incredible experience!`,
    },
    {
      title: "Meetings & Conferences",
      icon: <FaUsers size={40} className="text-green-200 mb-3 mx-auto" />,
      description: `We offer a comprehensive range of facilities for all types 
      of meetings and conferences, including international conventions.`,
    },
    {
      title: "Educational Trips",
      icon: (
        <FaGraduationCap size={40} className="text-green-200 mb-3 mx-auto" />
      ),
      description: `We organize study tours for universities, schools, and 
      academic institutions with affordable accommodation and enriching experiences.`,
    },
    {
      title: "Airfare Quotation & Ticketing",
      icon: (
        <FaPlaneDeparture size={40} className="text-green-200 mb-3 mx-auto" />
      ),
      description: `Get the best airfares through our airline relations and advanced 
      reservation systems. Personalized advice on schedules, fares, and benefits.`,
    },
    {
      title: "Team Building Retreats",
      icon: (
        <FaHandsHelping size={40} className="text-green-200 mb-3 mx-auto" />
      ),
      description: `Boost your team’s productivity with outdoor activities that inspire 
      behavioral change and create lasting impact.`,
    },
    {
      title: "Mission & Humanitarian Tours",
      icon: <FaGlobe size={40} className="text-green-200 mb-3 mx-auto" />,
      description: `Partner with us for cost-effective mission and humanitarian 
      tours that make a meaningful impact on underprivileged communities.`,
    },
  ];

  return (
    <section className="mt-6 h-full py-20 relative" style={serviceStyle}>
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative mx-auto px-6 text-center">
        {/* Title */}
        <Link href="/services">
          <h2 className="text-4xl font-bold mb-4 text-green-100">
            OUR SERVICES
          </h2>
        </Link>
        <p className="text-lg text-bisque mb-12">
          Unleash the potential of your travel with our exceptional services and
          embark on unforgettable adventures with us.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="feature">
              <div className="flex flex-col items-center text-center ">
                {service.icon}
                <h3
                  className="text-2xl text-white font-semibold  mb-3 tracking-wide"
                  style={{ padding: "15px" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-amber-100 text-left leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

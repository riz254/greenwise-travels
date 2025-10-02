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
      icon: <FaMountain size={40} className="text-lime-200 mb-3 mx-auto" />,
      description: `Africa is renowned for its amazing wildlife reserves and 
      sandy beaches which attract countless visitors. We know exactly where to 
      take you for that incredible experience!`,
    },
    {
      title: "Meetings & Conferences",
      icon: <FaUsers size={40} className="text-lime-200 mb-3 mx-auto" />,
      description: `We offer a comprehensive range of facilities for all types 
      of meetings and conferences, including international conventions.`,
    },
    {
      title: "Educational Trips",
      icon: (
        <FaGraduationCap size={40} className="text-lime-200 mb-3 mx-auto" />
      ),
      description: `We organize study tours for universities, schools, and 
      academic institutions with affordable accommodation and enriching experiences.`,
    },
    {
      title: "Airfare Quotation & Ticketing",
      icon: (
        <FaPlaneDeparture size={40} className="text-lime-200 mb-3 mx-auto" />
      ),
      description: `Get the best airfares through our airline relations and advanced 
      reservation systems. Personalized advice on schedules, fares, and benefits.`,
    },
    {
      title: "Team Building Retreats",
      icon: <FaHandsHelping size={40} className="text-lime-200 mb-3 mx-auto" />,
      description: `Boost your team’s productivity with outdoor activities that inspire 
      behavioral change and create lasting impact.`,
    },
    {
      title: "Mission & Humanitarian Tours",
      icon: <FaGlobe size={40} className="text-lime-200 mb-3 mx-auto" />,
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
          <h2 className="text-4xl font-bold mb-4 text-green-200">
            OUR SERVICES
          </h2>
        </Link>
        <p className="text-lg text-bisque mb-12">
          Unleash the potential of your travel with our exceptional services and
          embark on unforgettable adventures with us.
        </p>
        {/* Services Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className=" relative rounded-2xl bg-black/50 backdrop-blur-md 
                         border border-white/20 shadow-xl p-8 transition 
                         transform hover:-translate-y-3 hover:shadow-2xl h-fit "
              style={{ top: "20px", padding: "30px" }}
            >
              {/* Circular glowing icon */}
              <div className="relative mx-auto mb-6 w-20 h-20">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr 
                                from-green-300 via-lime-400 to-green-600 
                                opacity-30 blur-xl group-hover:opacity-60 transition"
                ></div>
                <div
                  className="relative flex items-center justify-center w-full h-full 
                                rounded-full bg-black/40 border border-green-400/50 shadow-lg"
                >
                  {service.icon}
                </div>
              </div>

              {/* Title + Desc */}
              <h3
                className=" font-semibold text-green-200 mb-3 tracking-wide"
                style={{ fontSize: "1.7rem", marginBottom: "10px" }}
              >
                {service.title}
              </h3>
              <p className="font-light text-stone-100 float-left ring-offset-gray-600  leading-snug  ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

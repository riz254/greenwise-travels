"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaGraduationCap,
  FaPlaneDeparture,
  FaGlobe,
  FaHandsHelping,
} from "react-icons/fa";
import {
  FaMountainSun,
  FaPersonHiking,
  FaTruckPlane,
  FaHotel,
  FaEarthAmericas,
} from "react-icons/fa6";

const services = [
  {
    icon: <FaUsers className="text-green-800 text-7xl" />,
    title: "Meetings and Conferences (MICE)",
    details: [
      "We specialize in offering a comprehensive range of facilities for meetings and conferences including international conventions.",
      "We advocate for green conferencing — partnering with hotels to offset carbon footprints and manage waste sustainably.",
      "We also offer sustainable event planning advisory services to our partners.",
      " Our meetings and conference department specializes in offering a comprehensive range of facilities to cater for all types of meetings and conferences including international conventions.",
      " With our unrivalled experience and cordial relationships with hotels and conference venues, we have superlatively organised high level executive meetings which have given us a well-deserved recognition as an ideal MICE company.",
      "We advocate for green conferencing and do work hand-in-hand with our partner hotels and venues towards offering delegates an opportunity to conduct their meetings in a manner that is environmentally sound. ",
      "This is through offsetting individual carbon footprints. We also take charge of the associated wastes such as waste plastic bottles which are collected and channelled to our construction initiatives.",
      "We also offer sustainable event planning advisory services to our partners in the event management business. ",
    ],
  },
  {
    icon: <FaGraduationCap className="text-green-800 text-7xl" />,
    title: "Educational Tours",
    details: [
      "We design unmatched trips with learners’ needs in mind — combining personal and academic growth.",
      "We facilitate partnerships, exchange programs, and tailor experiences for schools, universities, and research teams.",
      "It is our utmost pleasure to be associated with educational institutions in organizing unmatched trips which are specially designed with the learners needs in mind.",
      "Our educational trips are aimed at providing rich opportunities for personal and academic growth. Our key role is to link up the interests of our educational and study travellers looking for unmatched but affordable accommodation arrangements, catering facilities, transport and appropriate sites and locations for intended experience.",
      "We facilitate partnership and exchange programs and always strive to make our clients study tours become truly memorable learning experiences.",
      "We serve Universities and other institutions of higher learning, primary and secondary schools, environmental study teams, cultural experience students, medical teams, researchers and other academic experts.",
    ],
  },
  {
    icon: <FaMountainSun className="text-green-800 text-7xl" />,
    title: "Wildlife & Adventure Tours",
    details: [
      "East Africa is renowned for its amazing wildlife reserves and spotless sandy beaches which, for years, have seen countless international visitors coming over and over again to enjoy.... And we know exactly where to take you for that incredible experience!",
      "We pride ourselves as a leading holiday package organizer to the most excellent and pristine destinations across East Africa. All our leisure travellers are always excited about our trips that often end them in awe of the excellent experience that they would always want to be part of. Features of our leisure travels include:",
      "Special Leisure facilities through our established relationships with various travel and hospitality principals and partners.",
      "Safaris to some of the best wildlife reserves and pristine landscapes in East Africa with emphasis on more personalized service escorted by high quality professional safari guides and using the best safari equipment.",
      "Discounts on a wide variety of holiday alternatives offered to our clients.",
      "Value added leisure programmes such as tailor-made tours specifically designed for you.",
    ],
  },
  {
    icon: <FaPersonHiking className="text-green-800 text-7xl" />,
    title: "Excursions & Day Trips",
    details: [
      "We are a specialist in excursions and short trips within and around East Africa’s major cities. We offer some exciting sight-seeing tours covering some of the best places within and around our cities – places of natural, cultural, architectural, historical, religious or social significance.",
      "We have exhilarating packages for Nairobi, Mombasa & Kisumu (Kenya); Dar-es-Salaam & Arusha (Tanzania); Kampala (Uganda), Kigali (Rwanda) and Zanzibar.",
      "If you have some free time in any of these places, then a day of real experience awaits you! We’ll present you with a customized package that suits your needs in terms of time availability, energy levels and experiences sought.",
      "For clients who are around for business and have a weekend to spare, we can organize a weekend retreat to help you escape the hustles and bustles of the city. You have an option of a private trip or you may opt to join one of our group departures that coincide with your stay (subject to availability).",
    ],
  },
  {
    icon: <FaPlaneDeparture className="text-green-800 text-7xl" />,
    title: "Airfare Quotation and Ticketing",
    details: [
      "Our experienced travel consultants are trained to advise clients on the most effective schedules and fares. We take into keen consideration your special interests and advise accordingly on convenient departure and arrival times, easy transfer connections, special fare and their restrictions; reliability and quality of the airlines; stop over packages and other benefits offered by the airlines.",
      "We have established strong relations with leading airlines and this enables us to secure the lowest available published and negotiated airfares through our modern and highly advanced reservation systems.",
      "Our experienced travel consultants are always pleased to advise you on the most cost effective schedules and fares.",
    ],
  },
  {
    icon: <FaHotel className="text-green-800 text-7xl" />,
    title: "Hotel and Lodge Bookings",
    details: [
      "Our team of knowledgeable tour consultants are always available to take care of all bookings for hotels, lodges, resorts and safari camps.",
      "We enjoy cordial working relations with all our accommodation partners who keep us updated on their latest offers and developments of their properties.",
      "Our tour consultants are well conversant with most of the available accommodation properties in East Africa and other regions of our operation and are always willing to share their knowledge in order to ensure you are booked into the right accommodation.",
      "With our outstanding services and renowned keenness to quality, it is obvious that we remain the favourite guide to everyone's destination.",
    ],
  },
  {
    icon: <FaGlobe className="text-green-800 text-7xl" />,
    title: "Mission and Humanitarian Tours",
    details: [
      "We are founded and run on Christian values. As such, we are always pleased to partner with mission groups and partake in any work that touches the lives of the underprivileged in the society.",
      "To ensure the attainment of your humanitarian objectives, we are committed to considerably save you heavy costs. We will source for the most affordable services, without compromising quality, and customize every detail to suit your respective missions. We consider the objectives of your trips, costs and collaborative links as extremely crucial.",
      "We understand that this is a calling and not a leisure undertaking and we are very committed to be your mission partners. We collaborate with reputable service providers and we’ll always endeavor to get the most discounted rates.",
      "We aim at doing all that is possible within our means and abilities to provide our missionary and humanitarian travellers with every necessary assistance to make their trips worthwhile and constructive, and we go the extra mile in doing this!",
      "We serve individuals, churches, mission organizations, work teams, study groups, relief agencies and not-for-profit organizations.",
    ],
  },
  {
    icon: <FaTruckPlane className="text-green-800 text-7xl" />,
    title: "Transportation and Transfers",
    details: [
      "We provide our clients with one of the most valued services of transportation and transfers from points of origin to various destinations within our areas of operation. When travelling with us, rest assured that your safety is our key priority and that you are covered in case of any eventuality.",
      "For your peace of mind, we offer you the following value adds:",
      "Fully trained drivers who have undergone the 'Defensive Driving Course' to equip them with the best techniques and knowledge of driving. This has been enforced to deal with any safety and security issues. At Greenwise, nothing comes before the safety of our clients.",
      "We vet our drivers prior to hiring them. This ensures that our clients get top-notch services provided by experienced, mature and responsible staff.",
      "All the drivers possess valid certificates of good conduct, driver’s license, and are medically insured.",
      "All our vehicles are modern and are marked with our company logo. Vehicles are all equipped with telecommunication devices.",
      "Our fleet undergoes regular mechanical inspection. All certifications inclusive of PSV license, Road license, Comprehensive Insurance are valid.",
      "Travelers are picked up from their designated pick up points straight to their destination.",
      "Our transport officers are always ready to assist in any emergency situations.",
    ],
  },
  {
    icon: <FaHandsHelping className="text-green-800 text-7xl" />,
    title: "Team Building Retreats",
    details: [
      "Another interesting product we offer our corporate clients is the team building program where our resourceful facilitators take your teams through a host of outdoor activities that are geared at increasing your teams’ output.",
      "Our tailor-made packages will suit your needs no matter the size of your organization.",
      "The activities of our team building or experiential learning packages are challenging and metaphor-based thus inspiring your people to take action by changing their behaviors.",
      "These action-learning techniques create an emotional tie to the message or metaphor of the exercise that is received with enthusiasm by the participants.",
    ],
  },
  {
    icon: <FaEarthAmericas className="text-green-800 text-7xl" />,
    title: "Outbound Tours",
    details: [
      "Equipped with diverse knowledge of various destinations across the globe, our outbound travel consultants will offer you packaged or tailor-made tours to various parts of the world.",
      "Our travel consultants are also able to advise on availability and rates of hotel, flight fares and related services offered worldwide via our up-to-date reservation systems with the highest booking capabilities.",
      "Some of our outbound destinations include: South Africa, United Arab Emirates, Europe, Asia and the Americas.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="bg-green-50 !py-20">
        <div className=" !mx-auto !px-6 md:!px-12 ">
          {/* Title Section */}
          <div className="items-center text-center !px-60 mx-auto !mb-12">
            <h2 className="!text-4xl font-bold text-green-900 !mb-4">
              Our Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We pride ourselves on our position as a premium travel solutions
              provider across Africa. Each of our services is carefully designed
              with clients’ needs in mind and delivered with a focus on
              sustainability and community empowerment.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-10 ">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl !py-6 !px-16  transition-all duration-300 border border-green-100"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.1, delay: index * 0.05 }}
              >
                <div className=" !px-16  flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="!text-2xl font-semibold text-green-800">
                    {service.title}
                  </h3>
                </div>

                <ul className="!my-6 !px-16  text-lg space-y-2 text-gray-900 ">
                  {service.details.map((line, i) => (
                    <li key={i} className="leading-9">
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

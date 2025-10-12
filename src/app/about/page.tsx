"use client";

// src/pages/about-us.tsx
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles (this is required)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AboutUs() {
  const images = [
    "Landcruiser7.jpeg",
    "kenya-giraffe-manor.jpeg",
    "sunset 2.jpg",
    "Esirai-Gallery-9.jpg",
    "rekero-camo-maasai-mara-kenya-10-min.avif",
    "lion maasai mara.jpg",
    "Ruwenzori-Mountains-National-Park.jpg",
    "david-sheldrick-orphanage.jpg",
    "Mara - Sam.jpg",
    "Kisima-Ngeda-Gallery-11.jpg",
  ];
  return (
    <>
      <div>
        <Navbar />

        {/* Showcase Section */}
        <section className="h-[85vh] flex items-center justify-center text-center text-white  overflow-hidden w-full">
          <Image
            src="/images/images/About us page cover photo.jpg"
            alt="Landcruiser"
            fill
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute  inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
            <h2 className="!mb-0 text-[40pt] font-bold">About Us</h2>
            <p className="text-lg">
              <span className="block text-[16pt]">
                We Are Specialists In Customized
              </span>
              <span className="text-[16pt]"> Trips To </span>
              <span className="typed-words text-[16pt]"></span>
            </p>
          </div>
        </section>

        {/* Main Container */}
        <div className=" flex flex-col md:flex-row w-full !pl-10 ">
          {/* Content Section */}
          <div className="w-full md:w-[68%] md:pl-[70px] pt-3 !p-2">
            <h2 className="text-4xl font-bold !mb-4">
              About Greenwise Travels
            </h2>
            <p className="story text-justify !leading-8 !mb-6">
              Welcome to our Kenyan-based travel solutions! We craft tailor-made
              sustainable journeys across Africa&apos;s top destinations. From
              wildlife to culture, we have something for every passion. With
              trusted partners worldwide, we ensure your comfort and peace of
              mind, even in the remotest corners. Our expert team customizes
              each safari program to meet your unique expectations. Let us
              create an unforgettable experience just for you – one that sets
              your journey apart. Explore Africa&apos;s wonders with us!
            </p>

            {/* Carousel - replaced owl with flex grid */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Landcruiser7.jpeg",
              "kenya-giraffe-manor.jpeg",
              "sunset 2.jpg",
              "Esirai-Gallery-9.jpg",
              "rekero-camo-maasai-mara-kenya-10-min.avif",
              "lion maasai mara.jpg",
              "Ruwenzori-Mountains-National-Park.jpg",
              "david-sheldrick-orphanage.jpg",
              "Mara - Sam.jpg",
              "Kisima-Ngeda-Gallery-11.jpg",
            ].map((img, i) => (
              <div key={i} className="w-full aspect-square relative">
                <Image
                  src={`/images/images/${img}`}
                  alt="GREENWISE"
                  fill
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
            ))}
          </div> */}

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true} // infinite looping
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="gallery-swiper"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden">
                    <Image
                      src={`/images/images/${img}`}
                      alt="GREENWISE"
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Inline styles just for this section */}
            <style jsx global>{`
              .gallery-swiper .swiper-button-prev,
              .gallery-swiper .swiper-button-next {
                display: none;
              }
              @media (max-width: 767px) {
                .gallery-swiper .swiper-button-prev,
                .gallery-swiper .swiper-button-next {
                  display: block !important;
                  color: white;
                  --swiper-navigation-size: 1.5rem;
                  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
                }
              }
              .gallery-swiper .swiper-pagination-bullet {
                background: rgba(255, 255, 255, 0.8);
              }
              .gallery-swiper .swiper-pagination-bullet-active {
                background: #10b981; /* emerald */
              }
            `}</style>

            {/* Mission & Vision */}
            <div className="max-w-5xl mx-auto !px-6 !py-16 ">
              <h4 className="text-3xl font-bold text-center mb-6 text-green-900">
                Who Are We
              </h4>

              <p className="mb-6 leading-relaxed">
                We are a Kenyan-based travel solutions provider offering
                tailor-made sustainable travel services and programs across
                Africa’s top destinations. Our main destinations include:
              </p>

              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>
                  <Link
                    href="/kenya"
                    className="text-green-700 hover:underline"
                  >
                    Kenya
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tanzania"
                    className="text-green-700 hover:underline"
                  >
                    Tanzania
                  </Link>
                </li>
                <li>
                  <Link
                    href="/uganda"
                    className="text-green-700 hover:underline"
                  >
                    Uganda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rwanda"
                    className="text-green-700 hover:underline"
                  >
                    Rwanda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ethiopia"
                    className="text-green-700 hover:underline"
                  >
                    Ethiopia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/indianocean"
                    className="text-green-700 hover:underline"
                  >
                    The Indian Ocean Islands of Zanzibar, Seychelles, Mauritius
                    and Maldives
                  </Link>
                </li>
              </ul>

              <p className="mb-6 leading-relaxed">
                Through our established business partnerships, we also
                facilitate travel to other destinations outside Africa,
                including Europe, Asia and the Americas. We offer competitive
                packages for people with passion for wildlife, birdlife,
                culture, landscapes, adventure, study, and exploration.
              </p>

              <p className="mb-6 leading-relaxed">
                All our undertakings are aimed at producing the best results for
                our customers, without compromising our mission and core values.
                We pay meticulous attention to the principles of responsible
                travel.
              </p>

              <p className="mb-6 text-right leading-relaxed">
                As specialists in tours and travel arrangements, we are totally
                focused and committed to offering our clients access to high
                quality travel services. In order to accomplish this commitment,
                we have partnered with some of the leading and like-minded
                travel industry players across the globe and built long standing
                relationships with them — so even when making a trip with us to
                the remotest parts of the world, your comfort and peace of mind
                are guaranteed.
              </p>

              <p className="mb-6 leading-relaxed">
                All our safari programs are custom-designed to suit your
                individual needs and expectations. This website contains only an
                overview of what we do, but there’s more than you can imagine.
                Upon receipt of your inquiry, our travel experts will design
                your trip just for you — creating a unique identity around your
                program that differentiates it from any other, even if the
                itinerary looks similar.
              </p>

              <p className="mb-8 leading-relaxed">
                Our professional workforce understands that quality service
                makes good business sense! We therefore strive to provide
                flexible travel solutions that offer choices which suit both
                corporate and individual budgets.
              </p>

              <div className="w-100 aspect-[16/9] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/images/Esirai-Gallery-6.jpg"
                  alt="Esirai Gallery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold !mt-8 !mb-3">Our Mission</h2>
            <p className="story">
              To inspire a generation of responsible travellers, dedicated to
              environmental conservation and community empowerment
            </p>

            <h2 className="text-2xl font-bold !mt-8 !mb-3">Our Vision</h2>
            <p className="story">
              Africa’s leading responsible travel organization, promoting
              awareness on responsible tourism and offering green travel
              solutions for the good of humanity and the planet.
            </p>

            {/* Team */}
            <h2 className="text-2xl font-bold !mt-8 !mb-3">Team</h2>
            <p className="story !mb-6">
              Meet our extraordinary team, passionate about crafting
              unforgettable adventures for you. Join us on remarkable journeys!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { name: "Ken Obat", role: "Team Leader", img: "Ken 3.jpg" },
                {
                  name: "Nickson Otieno",
                  role: "Sustainability Advisor",
                  img: "Nickson.jpg",
                },
                {
                  name: "Millicent Akinyi",
                  role: "Marketing & Administration Manager",
                  img: "Millicent.jpg",
                },
                {
                  name: "Morten Risom Nielsen",
                  role: "Partner & Scandinavia Representative",
                  img: "Morten 2.jpg",
                },
                {
                  name: "Cynthia Patricia Pliego",
                  role: "Mexico Representative",
                  img: "person_4.jpg",
                },
                {
                  name: "Erika Drazen",
                  role: "USA Representative",
                  img: "Erika Drazen.jpg",
                },
              ].map((person, i) => (
                <div
                  key={i}
                  className="w-full aspect-square relative flex flex-col items-center text-center"
                >
                  <Image
                    src={`/images/images/${person.img}`}
                    alt={person.name}
                    fill
                    className="rounded-full w-fit h-10 shadow-lg object-cover object-top"
                  />
                  <h3 className="font-bold">{person.name}</h3>
                  <p className="text-sm text-gray-700">{person.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full md:w-[30%] bg-[#0dff000a] !p-6 !mt-8 md:!mt-0 md:mr-3">
            <input
              type="text"
              placeholder="Where to?"
              className="w-full border p-2 !mb-5 rounded"
            />

            {/* Sidebar Links */}
            <ul className="list-none !p-4 bg-[#0dff000f] rounded">
              {[
                { name: "Our Story", link: "who-we-are" },
                { name: "Our Services", link: "services" },
                { name: "Meet the team", link: "team" },
                { name: "Our Process", link: "process" },
                { name: "Our Values", link: "values" },
                { name: "Greenwise Difference", link: "GreenwiseDifference" },
                { name: "Grenwise Blogs", link: "blog" },
                { name: "Itineraries", link: "themes" },
                { name: "Terms and Conditions", link: "terms" },
                { name: "Contact Us", link: "contact" },
              ].map((item, i) => (
                <li key={i} className="!mb-3">
                  <a
                    href={`/${item.link}`}
                    className="font-bold flex justify-between items-center hover:text-black"
                  >
                    {item.name}
                    <span className="text-green-700 font-extrabold opacity-0 group-hover:opacity-100">
                      &gt;
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Features */}
            <div className="!mt-10 space-y-8">
              <div>
                <h4 className="font-bold text-lg flex items-center !mb-2">
                  <i className="fa-solid fa-person-hiking mr-2"></i> Experienced
                  Local Guides
                </h4>
                <p className="text-sm text-gray-700 !mb-2">
                  We pride ourselves on having top-notch safari guides with
                  extensive knowledge of wildlife, birdlife, and African
                  culture, all committed to responsible tourism.
                </p>
                <a href="GreenwiseDifference.html" className="btn btn-primary">
                  Read More
                </a>
              </div>

              <div>
                <h4 className="font-bold text-lg flex items-center !mb-2">
                  <i className="fa-solid fa-leaf mr-2"></i> Sustainable Travel
                </h4>
                <p className="text-sm text-gray-700 !mb-2">
                  We are dedicated to sustainable travel, collaborating with
                  local communities to ensure our trips positively impact the
                  environment and residents.
                </p>
                <a href="GreenwiseDifference.html" className="btn btn-primary">
                  Read More
                </a>
              </div>

              <div>
                <h4 className="font-bold text-lg flex items-center !mb-2">
                  <i className="fa-solid fa-globe mr-2"></i> Global Partnerships
                </h4>
                <p className="text-sm text-gray-700 !mb-2">
                  Thanks to our strong business partnerships, we offer travel
                  solutions to destinations beyond Africa, leveraging our
                  long-standing relationships with global travel industry peers.
                </p>
                <a href="GreenwiseDifference.html" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}

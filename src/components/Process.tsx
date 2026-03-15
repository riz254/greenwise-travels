"use client";

// import Image from "next/image";

// import { FaSearch, FaPlane, FaSmile } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Process() {
  const cards = [
    {
      title: "STEP 1",
      text: "DISCOVER",
      subText:
        "Whether referred by others or drawn in by our advertisements, explore all that we offer.",
    },
    {
      title: "STEP 2",
      text: "ENGAGE",
      subText:
        "Contact us via the form, the 'Design Your Trip' page, or phone.",
    },
    {
      title: "STEP 3",
      text: "CURATE",
      subText:
        "Craft initial itineraries for luxury tour packages tailored to your preferences.",
    },
    {
      title: "STEP 4",
      text: "CONFIRM",
      subText:
        "Finalize the itinerary and payment details. Receive additional information before your arrival.",
    },
    {
      title: "STEP 5",
      text: "EXPERIENCE",
      subText:
        "Arrive and enjoy your adventure with everything arranged for you.",
    },
  ];
  return (
    <section
      className="max-w-full !mx-auto !px-4 sm:!px-6 lg:!p-20 !py-12 sm:!py-16 lg:!py-20"
    >
      <div className="text-center">
        <a href="/about/process">
          <h2
            className="section-title text-center !mt-4 sm:!mt-5 !mb-6 sm:!mb-8 lg:!mb-10 text-3xl sm:text-4xl lg:text-5xl"
            style={{ color: "rgb(0, 0, 0)" }}
          >
            Plan Your Trip
          </h2>
        </a>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {  // sm:
            slidesPerView: 1.5,  // partial peek for better mobile feel
            spaceBetween: 24,
          },
          768: {  // md:
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {  // lg:
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="gallery-swiper !px-2 sm:!px-4 lg:!px-0"
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#70604a] shadow-md rounded-xl p-5 sm:p-6 lg:p-8 min-h-[220px] sm:min-h-[240px] lg:h-60 flex flex-col justify-center text-center">
              <p className="font-paragraph font-bold text-lg sm:text-xl lg:text-2xl text-gray-100">
                {card.title}
              </p>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lime-950 !mt-2 sm:!mt-3">
                {card.text}
              </h4>
              <p className="!px-3 sm:!px-5 !mt-3 sm:!mt-4 text-sm sm:text-base lg:text-lg text-shadow-gray-300 text-gray-300 leading-relaxed">
                {card.subText}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Inline styles - kept yours + minor responsive tweaks */}
      <style jsx global>{`
        .gallery-swiper .swiper-button-prev,
        .gallery-swiper .swiper-button-next {
          display: none !important;
        }
        @media (max-width: 100px) {
          .gallery-swiper .swiper-button-prev,
          .gallery-swiper .swiper-button-next {
            display: block !important;
            color: white;
            --swiper-navigation-size: 2rem;  /* bigger on mobile for touch */
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
          }
        }
        .gallery-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.8);
          width: 10px;
          height: 10px;
        }
        @media (min-width: 1024px) {
          .gallery-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #10b981; /* emerald */
        }
      `}</style>
    </section>
  );
}
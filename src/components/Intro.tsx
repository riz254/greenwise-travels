"use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// const images = [
//   "/images/safari.jpg",
//   "/images/safari.jpg",
//   "/images/safari.jpg",
//   "/images/safari.jpg",
// ];

export default function CascadingImageStack() {
  // const [index, setIndex] = useState(0);

  // const handleClick = () => {
  //   setIndex((prev) => (prev + 1) % images.length);
  // };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    //   <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
    //     Access to ungoogleable experiences
    //   </h2>

    //   <div
    //     className="relative w-[400px] h-[300px] cursor-pointer"
    //     onClick={handleClick}
    //   >
    //     <AnimatePresence mode="wait">
    //       <motion.div
    //         key={index}
    //         className="absolute inset-0"
    //         initial={{ opacity: 0, scale: 0.9, y: 30 }}
    //         animate={{ opacity: 1, scale: 1, y: 0 }}
    //         exit={{ opacity: 0, scale: 0.9, y: -30 }}
    //         transition={{ duration: 0.6, ease: "easeInOut" }}
    //       >
    //         {/* Main Image */}
    //         <Image
    //           src={images[index]}
    //           alt="Experience"
    //           fill
    //           className="object-cover rounded-2xl shadow-2xl"
    //         />

    //         {/* Cascading stacked images */}
    //         <div className="absolute inset-0 -z-10 transform translate-x-8 translate-y-6 rotate-3">
    //           <Image
    //             src={images[(index + 1) % images.length]}
    //             alt="Stack 1"
    //             fill
    //             className="object-cover rounded-2xl shadow-xl opacity-90"
    //           />
    //         </div>

    //         <div className="absolute inset-0 -z-20 transform translate-x-16 translate-y-12 -rotate-3">
    //           <Image
    //             src={images[(index + 2) % images.length]}
    //             alt="Stack 2"
    //             fill
    //             className="object-cover rounded-2xl shadow-lg opacity-80"
    //           />
    //         </div>
    //       </motion.div>
    //     </AnimatePresence>
    //   </div>

    //   <p className="mt-6 max-w-xl text-center text-gray-700 leading-relaxed">
    //     We believe in unconventional luxury: true luxury isn’t just a fancy
    //     hotel room; it’s access to amazing people and places. We focus on
    //     “unGoogleable experiences” that go beyond top 10 lists and reveal the
    //     true essence of Africa.
    //   </p>
    // </div>

    <>

     <div className="!mx-auto max-w-4/6 !pb-20 text-center">
        <h2 className="!text-4xl md:text-4xl font-bold text-green-950 !mb-6">
 We welcome you to walk in our footsteps for the greatest African
              safari and adventure experience.            </h2>
                 <p className="max-w-4/5!mx-auto text-black !mb-6">

We craft tailor-made sustainable journeys across Africa&apos;s top destinations. From wildlife to culture, we have something for every passion. With trusted partners worldwide, we ensure your comfort and peace of mind, even in the remotest corners. Our expert team customizes each safari program to meet your unique expectations.

Let us create an unforgettable experience just for you – one that sets your journey apart. Explore Africa&apos;s wonders with us!

 

            </p>
</div>


    <section className="relative bg-green-50 !mt-32 max-w-full !px-6 md:!px-10 lg:!px-20">



      <div className="!mx-auto flex flex-col-reverse md:flex-row items-center !p-0 gap-12 max-w-8xl">
        {/* Right: Text Content */}
        <div className="w-full !p-8 md:w-1/2 -top-[100px] relative  ">
<div className=" relative ">
              <h2
              className="text-left  font-semibold text-green-700 text-xl md:text-2xl mb-2"
              style={{ margin: "10px" }}
            >
              Discover Africa, with Africans!
            </h2>
            <p
              className="mt-2 text-left text-lg md:text-2xl font-medium leading-snug text-gray-800"
              style={{ margin: "10px" }}
            >
              We are natives of this land and we have spent our entire life here, discovering Africa’s best-kept secrets.


            </p>
          </div>

          <div>
            <h2
              className="text-left font-extrabold text-green-800 text-xl md:text-2xl"
              style={{ margin: "10px" }}
            >
              We take the initiative,so you can travel stress-free

            </h2>
            <h2
              className="text-left font-extrabold text-green-800 text-xl md:text-2xl"
              style={{ margin: "10px" }}
            >
              {/* so you can travel stress-free */}
            </h2>
            <p
              className="mt-2 text-left text-lg md:text-2xl font-medium leading-snug text-gray-800"
              style={{ margin: "10px" }}
            >
              Our experts are ready to plan your private, personalized, and
              sustainable African safari experiences!
            </p>
          </div>

          {/* <div>
            <h2
              className="text-left text-xl md:text-2xl font-semibold text-lime-700"
              style={{ margin: "10px" }}
            >
              We welcome you to walk in our footsteps for the greatest African
              safari and adventure experience.
            </h2>
          </div> */}
        </div>
        {/* Left: Stacked Images */}
        <div className="relative w-3/4 md:w-1/2 h-[400px] flex justify-center md:justify-start">
          {/* First Image */}
          <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[70%] h-[70%]">
            <Image
              src="/images/images/kenya-giraffe-manor.jpeg"
              alt="Safari Experience"
              fill
              className="object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* Second Image */}
          <div className="absolute top-[30%] left-[40%] w-[60%] h-[60%]">
            <Image
              src="/images/images/Nairobi.png"
              alt="Cultural Experience"
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Third Image */}
          <div className="absolute top-[35%] left-[-0%] w-[50%] h-[50%]">
            <Image
              src="/images/images/kenya-diani-beach.jpg"
              alt="Adventure Experience"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe2,
  Handshake,
  Mountain,
  Trophy,
  Map,
  Hand,
  Banknote,
  Heart,
  CheckCircle2,
} from "lucide-react";

export default function GreenwiseDifference() {
  return (
    <>
      <Navbar />
      {/* Showcase Section */}
      <section className="h-[85vh] flex items-center justify-center text-center text-white  overflow-hidden w-full">
        <Image
          src="/images/images/pexels-taryn-elliott-4840134.jpg"
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

      <section className="!px-32 !py-16 bg-white text-gray-800">
        <div className="container !mx-auto !px-6">
          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-green-700 tracking-wide !mb-12"
          >
            THE GREENWISE DIFFERENCE
          </motion.h4>

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-40 !mb-10 ">
            <motion.div whileHover={{ scale: 1.02 }} className="">
              <h4 className="text-2xl font-semibold text-green-800 flex items-center shadow-lg shadow-lime-50 !mb-3 gap-3">
                <Globe2 className="text-green-600 text-4xl drop-shadow-lg" />
                Responsible Travel
              </h4>
              <p className="text-justify text-gray-900">
                This is not just a claim but our business model, the very core
                of our existence. We exist for 3 missions: happy traveller,
                better environment and empowered communities. All these three
                aspects are key and we work extra hard to ensure that none is
                fulfilled at the expense of the other.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
              <h4 className="text-2xl font-semibold text-green-800 flex items-center shadow-lg shadow-lime-50 !mb-3 gap-3">
                <Handshake className="text-green-600 text-4xl drop-shadow-md" />
                Impact that Counts
              </h4>
              <p className="text-justify text-gray-900">
                We know you are a responsible global citizen looking for any
                slight opportunity to impact the planet and its people, and we
                offer you an opportunity to do just that. Without paying
                anything extra, you are assured that part of the money you pay
                impacts our communities in a certain way. Travelling with us is
                simply a way of saying ‘I care’.
              </p>
            </motion.div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-40 !mb-10">
            <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
              <h4 className="text-2xl font-semibold text-green-800 flex items-center shadow-lg shadow-lime-50 !mb-3 gap-3">
                <Mountain className="text-green-600 text-4xl drop-shadow-md" />
                Experienced Local Guides
              </h4>
              <p className="text-justify text-gray-900">
                We boast of some of the best safari guides who possess a wealth
                of knowledge on wildlife, birdlife and the cultural aspects that
                make up Africa. Not only are they knowledgeable but fully
                committed to the principles of responsible tourism.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
              <h4 className="text-2xl font-semibold text-green-800 flex items-center shadow-lg shadow-lime-50 !mb-3 gap-3">
                <Trophy className="text-green-600 text-4xl drop-shadow-md" />
                Top-notch Safari Equipment
              </h4>
              <p className="text-justify text-gray-900">
                Our safari equipment are of the highest quality and are
                specially designed to ensure your safety and comfort. Our fleet
                of custom-designed safari vehicles ensure that you travel safely
                even in the most rugged African terrain.
              </p>
            </motion.div>
          </div>

          {/* ROW 3 */}
          <div className="grid md:grid-cols-2 gap-40 !mb-10">
            <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
              <h4 className="text-2xl font-semibold text-green-800 flex items-center shadow-lg shadow-lime-50 !mb-3 gap-3">
                <Map className="text-green-600 text-4xl drop-shadow-md" />
                Bespoke Itineraries
              </h4>
              <p className="text-justify text-gray-900">
                We understand that you are unique and special in your own way.
                We do not operate on the ‘one-size-fits-all’ basis and this
                means that even if you opt for our scheduled or group safaris,
                we will try our best to ensure that your specific needs are well
                taken care of.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
              <h4 className="text-2xl font-semibold text-green-800 flex items-center shadow-lg shadow-lime-50 !mb-3 gap-3">
                <Hand className="text-green-600 text-4xl drop-shadow-md" />
                Feel at Home with Us
              </h4>
              <p className="text-justify text-gray-900">
                Africa is our home and passion, and we are proud that we have
                travelled across this expansive region and visited the various
                places of interest. This helps us make accurate decisions and
                recommendations.
              </p>
            </motion.div>
          </div>

          {/* ROW 4 */}
          <div className="grid md:grid-cols-2 gap-40">
            <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
              <h4 className="text-2xl font-semibold text-green-800 flex items-center shadow-lg shadow-lime-50 !mb-3 gap-3">
                <Banknote className="text-green-600 text-4xl drop-shadow-md" />
                Value for Money
              </h4>
              <p className="text-justify text-gray-900">
                We offer the best value for money by ensuring we provide the
                highest possible quality service at the most competitive rates.
              </p>

              <h4 className="text-xl font-semibold text-green-800 flex items-center gap-3 !mt-10">
                <Heart className="text-green-600 text-4xl drop-shadow-md" />
                Friends for Life
              </h4>
              <p className="text-justify text-gray-900">
                The Greenwise philosophy encourages lifetime friendship with our
                clients. To us, you are first a friend before you become a
                client and we always endeavour to nurture these friendships for
                life. What a great feeling to explore and enjoy Africa with a
                friend!
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
              <h4 className="text-2xl font-semibold text-green-800 flex items-center shadow-lg shadow-lime-50 !mb-3 gap-3">
                <CheckCircle2 className="text-green-600 text-4xl drop-shadow-md" />
                Guaranteed Peace of Mind
              </h4>
              <p className="text-justify text-gray-900">
                Your trip with us is fully supported. Your dedicated safari
                consultant is available round-the-clock throughout your trip to
                assist with requests, take care of the details, and handle any
                unforeseen situations. Rest assured that you are in capable
                hands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

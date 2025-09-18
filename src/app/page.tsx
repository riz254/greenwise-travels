import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import GreenwiseDifference from "@/components/GreenwiseDifference";
import Destinations from "@/components/Destinations";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Itineraries from "@/components/Itineraries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <GreenwiseDifference />
      <Destinations />
      <Services />
      <Process />
      <Itineraries />
      <Footer />
    </>
  );
}


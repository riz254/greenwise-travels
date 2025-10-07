"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // toggle blur after 20px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full">
        <Header />
      </div>

      <nav
        className={`site-nav fixed top-0 w-full z-50 transition-all duration-300 ${
       scrolled ? "bg-[#002410]/60 backdrop-blur-md shadow-md" : "bg-transparent"

        }`}
      >
        <div className="relative h-20 w-40 ml-[50px]">
          <Link href="/">
            <Image
              src="/images/GREENWISE LOGOS 3-01.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        <div>
          <div className="site-navigation">
            <ul className="js-clone-nav d-none d-lg-inline-block site-menu float-right mt-2 text-white">
              <li className="active">
                <Link href="/">Home</Link>
              </li>

              <li className="has-children">
                <Link href="#">Destinations</Link>
                <ul className="dropdown">
                  <li><Link href="/Kenya">Kenya</Link></li>
                  <li><Link href="/Tanzania">Tanzania</Link></li>
                  <li><Link href="/Uganda">Uganda</Link></li>
                  <li><Link href="/Rwanda">Rwanda</Link></li>
                  <li><Link href="/Ethiopia">Ethiopia</Link></li>
                  <li><Link href="/Islands">Indian Ocean Islands</Link></li>
                  <li><Link href="/Southern">Southern Africa</Link></li>
                  <li><Link href="/Outbound">Outbound Destinations</Link></li>
                </ul>
              </li>

              <li className="has-children">
                <Link href="/about">About Us</Link>
                <ul className="dropdown">
                  <li><Link href="/who-we-are">Our Story</Link></li>
                  <li><Link href="/team">Our Team</Link></li>
                  <li><Link href="/services">Our Services</Link></li>
                  <li><Link href="/values">Our Values</Link></li>
                  <li><Link href="/process">Our Process</Link></li>
                  <li><Link href="/GreenwiseDifference">The Greenwise Difference</Link></li>
                  <li><Link href="/terms">Terms & Conditions</Link></li>
                </ul>
              </li>

              <li><Link href="/themes">Itineraries</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

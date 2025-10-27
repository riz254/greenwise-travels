"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

export default function Navbar() {
  // const [scrolled, setScrolled] = useState(false);

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
        className="site-nav  relative bg-black/50 backdrop-blur-sm shadow-lg 
                         "
      >
        <div className="relative h-20 w-40 ml-[50px]">
          <Link href="/">
            <Image
              src="/images/GREENWISE-LOGOS-main.png"
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
                  <li>
                    <Link href="/destinations/Kenya">Kenya</Link>
                  </li>
                  <li>
                    <Link href="/destinations/Tanzania">Tanzania</Link>
                  </li>
                  <li>
                    <Link href="/destinations/Uganda">Uganda</Link>
                  </li>
                  <li>
                    <Link href="/destinations/Rwanda">Rwanda</Link>
                  </li>
                  <li>
                    <Link href="/destinations/Ethiopia">Ethiopia</Link>
                  </li>
                  <li>
                    <Link href="/destinations/IndianOceanIslands">
                      Indian Ocean Islands
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/SouthernAfrica">
                      Southern Africa
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/Outbound">
                      Outbound Destinations
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-children">
                <Link href="/about">About Us</Link>
                <ul className="dropdown">
                  <li>
                    <Link href="/who-we-are">Our Story</Link>
                  </li>
                  <li>
                    <Link href="/about/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/about/services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/about/values">Our Values</Link>
                  </li>
                  <li>
                    <Link href="/about/process">Our Process</Link>
                  </li>
                  <li>
                    <Link href="/about/GreenwiseDifference">
                      The Greenwise Difference
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms & Conditions</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/themes">Itineraries</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

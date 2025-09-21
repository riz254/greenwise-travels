"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="  w-full ">
        <Header />
      </div>
      <nav className="site-nav  site-navigation ">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-700">
          <img
            src="/images/GREENWISE LOGOS 3-01.png"
            alt="logo"
            className="h-20"
          />
        </Link>

        <div className="container">
          <div className="site-navigation">
            <ul className="js-clone-nav d-none d-lg-inline-block site-menu float-right mt-2">
              <li className="active">
                <a href="index ">Home</a>
              </li>

              <li className="has-children">
                <a href="#">Destinations</a>
                <ul className="dropdown">
                  <li>
                    <a href="Kenya ">Kenya</a>
                  </li>
                  <li>
                    <a href="Tanzania ">Tanzania</a>
                  </li>
                  <li>
                    <a href="Uganda ">Uganda</a>
                  </li>
                  <li>
                    <a href="Rwanda ">Rwanda</a>
                  </li>
                  <li>
                    <a href="Ethiopia ">Ethiopia</a>
                  </li>
                  <li>
                    <a href="Islands ">Indian Ocean Islands</a>
                  </li>
                  <li>
                    <a href="Southern ">Southern Africa</a>
                  </li>
                  <li>
                    <a href="Outbound ">Outbound Destinations</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="about ">About Us</a>
                <ul className="dropdown">
                  <li>
                    <a href="who we are ">Our Story</a>
                  </li>
                  <li>
                    <a href="team ">Our Team</a>
                  </li>
                  <li>
                    <a href="services ">Our Services</a>
                  </li>
                  <li>
                    <a href="values ">Our Values</a>
                  </li>
                  <li>
                    <a href="process ">Our process</a>
                  </li>
                  <li>
                    <a href="GreenwiseDifference ">The Greenwise Difference</a>
                  </li>
                  <li>
                    <a href="terms ">Terms & Conditions</a>
                  </li>
                </ul>
              </li>

              {/* <!-- <li className="has-children">
						<a href="themes ">Travel Themes</a>
						<ul className="dropdown">
							<li><a href="about ">Heritage Tours</a></li>
							<li><a href="about ">Honeymoon Tours</a></li>
							<li><a href="about ">Wildlife Tours</a></li>
							<li><a href="about ">Adventure</a></li>
							<li><a href="about ">Nature & Landscape</a></li>
							<li><a href="about ">Beach</a></li>
							<li><a href="about ">Special Interests</a></li>
						</ul>
					</li> --> */}
              <li>
                <a href="themes ">Itineraries</a>
              </li>
              <li>
                <a href="blog ">Blogs</a>
              </li>
              <li>
                <a href="contact ">Contact Us</a>
              </li>
            </ul>

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
            {/* <a href="index " className="logo m-0"><img src="GREENWISE LOGOS 3-01.png" alt="logo"></a> */}
          </div>
        </div>
      </nav>
    </>
  );
}

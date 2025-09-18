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
                <a href="index.html">Home</a>
              </li>

              <li className="has-children">
                <a href="#">Destinations</a>
                <ul className="dropdown">
                  <li>
                    <a href="Kenya.html">Kenya</a>
                  </li>
                  <li>
                    <a href="Tanzania.html">Tanzania</a>
                  </li>
                  <li>
                    <a href="Uganda.html">Uganda</a>
                  </li>
                  <li>
                    <a href="Rwanda.html">Rwanda</a>
                  </li>
                  <li>
                    <a href="Ethiopia.html">Ethiopia</a>
                  </li>
                  <li>
                    <a href="Islands.html">Indian Ocean Islands</a>
                  </li>
                  <li>
                    <a href="Southern.html">Southern Africa</a>
                  </li>
                  <li>
                    <a href="Outbound.html">Outbound Destinations</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="about.html">About Us</a>
                <ul className="dropdown">
                  <li>
                    <a href="who we are.html">Our Story</a>
                  </li>
                  <li>
                    <a href="team.html">Our Team</a>
                  </li>
                  <li>
                    <a href="services.html">Our Services</a>
                  </li>
                  <li>
                    <a href="values.html">Our Values</a>
                  </li>
                  <li>
                    <a href="process.html">Our process</a>
                  </li>
                  <li>
                    <a href="GreenwiseDifference.html">
                      The Greenwise Difference
                    </a>
                  </li>
                  <li>
                    <a href="terms.html">Terms & Conditions</a>
                  </li>
                </ul>
              </li>

              {/* <!-- <li className="has-children">
						<a href="themes.html">Travel Themes</a>
						<ul className="dropdown">
							<li><a href="about.html">Heritage Tours</a></li>
							<li><a href="about.html">Honeymoon Tours</a></li>
							<li><a href="about.html">Wildlife Tours</a></li>
							<li><a href="about.html">Adventure</a></li>
							<li><a href="about.html">Nature & Landscape</a></li>
							<li><a href="about.html">Beach</a></li>
							<li><a href="about.html">Special Interests</a></li>
						</ul>
					</li> --> */}
              <li>
                <a href="themes.html">Itineraries</a>
              </li>
              <li>
                <a href="blog.html">Blogs</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
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
            {/* <a href="index.html" className="logo m-0"><img src="GREENWISE LOGOS 3-01.png" alt="logo"></a> */}
          </div>
        </div>
      </nav>
    </>
  );
}

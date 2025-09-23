"use client";

// import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
// import { Menu, X } from "lucide-react";

export default function Navbar() {
  // const [scrolled, setScrolled] = useState(false);
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div className="  w-full ">
        <Header />
      </div>
      <nav className=" site-nav ">
        {/* Logo */}
        <div className="relative h-20 w-40">
          <Link href="/">
            <Image
              src="/images/GREENWISE LOGOS 3-01.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        <div className="container">
          <div className="site-navigation">
            <ul className="js-clone-nav d-none d-lg-inline-block site-menu float-right mt-2">
              <li className="active">
                <Link href="index ">Home</Link>
              </li>

              <li className="has-children">
                <Link href="#">Destinations</Link>
                <ul className="dropdown">
                  <li>
                    <Link href="Kenya ">Kenya</Link>
                  </li>
                  <li>
                    <Link href="Tanzania ">Tanzania</Link>
                  </li>
                  <li>
                    <Link href="Uganda ">Uganda</Link>
                  </li>
                  <li>
                    <Link href="Rwanda ">Rwanda</Link>
                  </li>
                  <li>
                    <Link href="Ethiopia ">Ethiopia</Link>
                  </li>
                  <li>
                    <Link href="Islands ">Indian Ocean Islands</Link>
                  </li>
                  <li>
                    <Link href="Southern ">Southern Africa</Link>
                  </li>
                  <li>
                    <Link href="Outbound ">Outbound Destinations</Link>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <Link href="about ">About Us</Link>
                <ul className="dropdown">
                  <li>
                    <Link href="who we are ">Our Story</Link>
                  </li>
                  <li>
                    <Link href="team ">Our Team</Link>
                  </li>
                  <li>
                    <Link href="services ">Our Services</Link>
                  </li>
                  <li>
                    <Link href="values ">Our Values</Link>
                  </li>
                  <li>
                    <Link href="process ">Our process</Link>
                  </li>
                  <li>
                    <Link href="GreenwiseDifference ">
                      The Greenwise Difference
                    </Link>
                  </li>
                  <li>
                    <Link href="terms ">Terms & Conditions</Link>
                  </li>
                </ul>
              </li>

              {/* <!-- <li className="has-children">
						<Link href="themes ">Travel Themes</Link>
						<ul className="dropdown">
							<li><Link href="about ">Heritage Tours</Link></li>
							<li><Link href="about ">Honeymoon Tours</Link></li>
							<li><Link href="about ">Wildlife Tours</Link></li>
							<li><Link href="about ">Adventure</Link></li>
							<li><Link href="about ">Nature & Landscape</Link></li>
							<li><Link href="about ">Beach</Link></li>
							<li><Link href="about ">Special Interests</Link></li>
						</ul>
					</li> --> */}
              <li>
                <Link href="themes ">Itineraries</Link>
              </li>
              <li>
                <Link href="blog ">Blogs</Link>
              </li>
              <li>
                <Link href="contact ">Contact Us</Link>
              </li>
            </ul>

            <Link
              href="#"
              className="burger hidden ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </Link>
            {/* <Link href="index " className="logo m-0"><Image src="GREENWISE LOGOS 3-01.png" alt="logo"></Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}

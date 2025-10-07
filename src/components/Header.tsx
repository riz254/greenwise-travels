"use client";

import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function Header() {
    const iconStyle = {
    // width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "none",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    color: "green",
    fontSize: "20px",
    textDecoration: "none",
  };
  return (
    <header className="header text-gray-100 !p-2">
      <div className=" max-w-7xl !mx-auto flex flex-col sm:flex-row items-center justify-between !px-6">
        {/* Left Section */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <div className="flex items-center gap-2">
            <FaPhone className="text-emerald-600 text-2xl " />
            <p>+254 759 527900</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-emerald-600 text-2xl" />
            <p>info@greenwisetravels.com</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <FaLocationDot className="text-emerald-600 text-2xl" />
            <p>4892 - Mamlaka Road, Nairobi, KE</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center  gap-3 mt-2 sm:mt-0">
          {[
            { href: "http://www.youtube.com/@Greenwise_Africa", icon: <FaYoutube /> },
            { href: "https://www.tiktok.com/@greenwise_travels", icon: <FaTiktok /> },
            { href: "https://x.com/greenwise_t", icon: <FaXTwitter /> },
            { href: "https://www.instagram.com/greenwise_travels/", icon: <FaInstagram /> },
            { href: "https://www.facebook.com/greenwisetravels", icon: <FaFacebook /> },
            { href: "https://www.linkedin.com/company/greenwise-travels", icon: <FaLinkedin /> },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="!p-2 text-md bg-white rounded-full hover:bg-lime-400 transition-all duration-200"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

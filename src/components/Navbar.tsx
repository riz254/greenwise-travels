"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // shadcn/ui icon
import Header from "@/components/Header";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-green-950/95 shadow-md h-20 t!op-0"
            : "bg-green-950/70 h-30 "
        }top-0 `}
      >
        <div className="container mx-auto flex items-center justify-between px-1 h-full">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-green-700">
            <img
              src="/images/GREENWISE LOGOS 3-01.png"
              alt="logo"
              className="h-20"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <Link href="/" className="hover:text-green-300 transition">
                Home
              </Link>
            </li>
            <li className="relative group">
              <button className="hover:text-green-300 transition">
                Destinations
              </button>
              {/* Dropdown */}
              <ul className="absolute left-0 mt-2 hidden w-40 rounded-lg bg-white text-black shadow-md group-hover:block">
                <li>
                  <Link
                    href="/destinations/kenya"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Kenya
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/tanzania"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Tanzania
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/uganda"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Uganda
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-300 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden top-0  text-white"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-green-950 text-white p-6 space-y-4 grid place-items-lefts">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/destinations" onClick={() => setMobileOpen(false)}>
              Destinations
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

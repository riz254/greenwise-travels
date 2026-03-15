"use client";

// import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  // const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20); // toggle blur after 20px scroll
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const destinations = [
    { label: "Kenya", href: "/destinations/Kenya" },
    { label: "Tanzania", href: "/destinations/Tanzania" },
    { label: "Uganda", href: "/destinations/Uganda" },
    { label: "Rwanda", href: "/destinations/Rwanda" },
    { label: "Ethiopia", href: "/destinations/Ethiopia" },
    { label: "Indian Ocean Islands", href: "/destinations/IndianOceanIslands" },
    { label: "Southern Africa", href: "/destinations/SouthernAfrica" },
    { label: "Outbound Destinations", href: "/destinations/Outbound" },
  ];

  const aboutLinks = [
    // { label: "Our Story", href: "/about/who-we-are" },
    { label: "Our Team", href: "/about/team" },
    { label: "Our Services", href: "/about/services" },
    { label: "Our Values", href: "/about/values" },
    { label: "Our Process", href: "/about/process" },
    { label: "The Greenwise Difference", href: "/about/GreenwiseDifference" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Outfit:wght@300;400;500;600&display=swap');

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 40;
          pointer-events: none;
          background: rgba(0,0,0,0);
          transition: background 0.4s ease;
        }
        .mobile-overlay.open {
          pointer-events: all;
          background: rgba(0,0,0,0.55);
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100dvh;
          width: min(88vw, 360px);
          z-index: 50;
          background: linear-gradient(160deg, #0a1a0a 0%, #0d1f0d 40%, #111 100%);
          transform: translateX(110%);
          transition: transform 0.45s cubic-bezier(0.77, 0, 0.175, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-left: 1px solid rgba(163,230,53,0.12);
          box-shadow: -8px 0 40px rgba(0,0,0,0.6);
        }
        .mobile-drawer.open {
          transform: translateX(0);
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }

        .drawer-close-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(163,230,53,0.25);
          background: rgba(163,230,53,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #a3e635;
        }
        .drawer-close-btn:hover {
          background: rgba(163,230,53,0.15);
          border-color: rgba(163,230,53,0.5);
          transform: rotate(90deg);
        }

        .drawer-nav {
          flex: 1;
          overflow-y: auto;
          padding: 10px 0 24px;
          scrollbar-width: none;
        }
        .drawer-nav::-webkit-scrollbar { display: none; }

        .nav-item-link {
          display: block;
          padding: 13px 24px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          letter-spacing: 0.03em;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-item-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: #a3e635;
          border-radius: 0 2px 2px 0;
          transition: height 0.2s ease;
        }
        .nav-item-link:hover {
          color: #a3e635;
          padding-left: 30px;
        }
        .nav-item-link:hover::before {
          height: 60%;
        }

        .accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          letter-spacing: 0.03em;
          transition: all 0.2s ease;
          text-align: left;
          position: relative;
        }
        .accordion-trigger::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: #a3e635;
          border-radius: 0 2px 2px 0;
          transition: height 0.2s ease;
        }
        .accordion-trigger:hover,
        .accordion-trigger.active {
          color: #a3e635;
          padding-left: 30px;
        }
        .accordion-trigger:hover::before,
        .accordion-trigger.active::before {
          height: 60%;
        }

        .chevron-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.5;
          margin-left: 8px;
        }
        .accordion-trigger.active .chevron-icon {
          transform: rotate(180deg);
          opacity: 1;
          color: #a3e635;
        }

        .accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(0,0,0,0.25);
          border-top: 1px solid transparent;
          border-bottom: 1px solid transparent;
        }
        .accordion-body.open {
          border-color: rgba(163,230,53,0.06);
        }

        .sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 24px 10px 44px;
          font-family: 'Outfit', sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(255,255,255,0.58);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: all 0.18s ease;
        }
        .sub-link::before {
          content: '→';
          font-size: 11px;
          color: rgba(163,230,53,0.4);
          transition: all 0.18s ease;
          flex-shrink: 0;
        }
        .sub-link:hover {
          color: rgba(255,255,255,0.9);
          padding-left: 50px;
        }
        .sub-link:hover::before {
          color: #a3e635;
        }

        .nav-divider {
          height: 1px;
          margin: 6px 24px;
          background: rgba(255,255,255,0.06);
        }

        .drawer-footer {
          padding: 16px 24px 28px;
          border-top: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .contact-cta {
          display: block;
          text-align: center;
          padding: 13px 20px;
          background: linear-gradient(135deg, #a3e635, #84cc16);
          color: #0a1a0a;
          font-family: 'Outfit', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        .contact-cta:hover {
          background: linear-gradient(135deg, #bef264, #a3e635);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(163,230,53,0.3);
        }

        .hamburger-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          padding: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .hamburger-btn:hover {
          background: rgba(163,230,53,0.1);
          border-color: rgba(163,230,53,0.3);
        }
        .hamburger-line {
          display: block;
          width: 100%;
          height: 1.5px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
        .hamburger-btn.open .hamburger-line:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .hamburger-btn.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger-btn.open .hamburger-line:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        .nav-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(163,230,53,0.5);
          padding: 18px 24px 6px;
          display: block;
        }

        /* Item entrance animation */
        .drawer-nav > * {
          opacity: 0;
          transform: translateX(16px);
          animation: none;
        }
        .mobile-drawer.open .drawer-nav > *:nth-child(1) { animation: slideIn 0.35s 0.12s forwards ease-out; }
        .mobile-drawer.open .drawer-nav > *:nth-child(2) { animation: slideIn 0.35s 0.17s forwards ease-out; }
        .mobile-drawer.open .drawer-nav > *:nth-child(3) { animation: slideIn 0.35s 0.22s forwards ease-out; }
        .mobile-drawer.open .drawer-nav > *:nth-child(4) { animation: slideIn 0.35s 0.27s forwards ease-out; }
        .mobile-drawer.open .drawer-nav > *:nth-child(5) { animation: slideIn 0.35s 0.30s forwards ease-out; }
        .mobile-drawer.open .drawer-nav > *:nth-child(6) { animation: slideIn 0.35s 0.33s forwards ease-out; }
        .mobile-drawer.open .drawer-nav > *:nth-child(7) { animation: slideIn 0.35s 0.36s forwards ease-out; }
        .mobile-drawer.open .drawer-nav > *:nth-child(8) { animation: slideIn 0.35s 0.39s forwards ease-out; }
        .mobile-drawer.open .drawer-nav > *:nth-child(9) { animation: slideIn 0.35s 0.42s forwards ease-out; }
        .mobile-drawer.open .drawer-nav > *:nth-child(10) { animation: slideIn 0.35s 0.44s forwards ease-out; }

        @keyframes slideIn {
          to { opacity: 1; transform: translateX(0); }
        }

        /* Green glow dot in drawer header */
        .status-dot {
          width: 7px;
          height: 7px;
          background: #a3e635;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(163,230,53,0.8);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 6px rgba(163,230,53,0.8); }
          50% { box-shadow: 0 0 14px rgba(163,230,53,1); }
        }
      `}</style>

      <div className="w-full">
        <Header />
      </div>

      {/* ── DESKTOP NAV (completely unchanged) ── */}
      <nav className="site-nav !hidden lg:!flex relative bg-black/10 backdrop-blur-sm shadow-lg  " >
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
            <ul className="nav-item !font-bold  d-lg-inline-block site-menu float-right mt-2 text-white">
              <li className="active">
                <Link href="/" >Home</Link>
              </li>

              <li className="has-children">
                <Link href="#">Destinations</Link>
                <ul className="dropdown">
                  <li><Link href="/destinations/Kenya">Kenya</Link></li>
                  <li><Link href="/destinations/Tanzania">Tanzania</Link></li>
                  <li><Link href="/destinations/Uganda">Uganda</Link></li>
                  <li><Link href="/destinations/Rwanda">Rwanda</Link></li>
                  <li><Link href="/destinations/Ethiopia">Ethiopia</Link></li>
                  <li><Link href="/destinations/IndianOceanIslands">Indian Ocean Islands</Link></li>
                  <li><Link href="/destinations/SouthernAfrica">Southern Africa</Link></li>
                  <li><Link href="/destinations/Outbound">Outbound Destinations</Link></li>
                </ul>
              </li>

              <li className="has-children">
                <Link href="/about">About Us</Link>
                <ul className="dropdown">
                  {/* <li><Link href="/who-we-are">Our Story</Link></li> */}
                  <li><Link href="/about/team">Our Team</Link></li>
                  <li><Link href="/about/services">Our Services</Link></li>
                  <li><Link href="/about/values">Our Values</Link></li>
                  <li><Link href="/about/process">Our Process</Link></li>
                  <li><Link href="/about/GreenwiseDifference">The Greenwise Difference</Link></li>
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

      {/* ── MOBILE TOP BAR ── */}
      <div className=" lg:!hidden !fixed !top-0 !left-0 !right-0 !h-24 !z-50 bg-lime-950 backdrop-blur-md !shadow-lg !flex !items-center !justify-between !px-4 sm:!px-6">
        {/* Logo */}
        <Link href="/" className="!relative !block !h-16 !w-32  sm:!w-36">
          <Image
            src="/images/GREENWISE-LOGOS-main.png"
            alt="logo"
            fill
            className="object-contain"
          />
        </Link>

        {/* Animated Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`hamburger-btn ${mobileOpen ? "open" : ""}`}
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Dimmed Backdrop */}
      <div
        className={`mobile-overlay lg:!hidden ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide-in Drawer */}
      <div
        className={`mobile-drawer lg:!hidden ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="!flex !items-center !gap-3">
            {/* <div className="status-dot" /> */}
            {/* <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
              Greenwise Safaris
            </span> */}
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="drawer-close-btn"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Scrollable Nav */}
        <nav className="drawer-nav">
          {/* <span className="nav-label">Explore</span> */}

          <Link href="/" onClick={() => setMobileOpen(false)} className="nav-item-link">
            Home
          </Link>

          <div className="nav-divider" />

          {/* Destinations Accordion */}
          <div>
            <button
              onClick={() => toggleSection("destinations")}
              className={`accordion-trigger ${openSection === "destinations" ? "active" : ""}`}
            >
              <span>Destinations</span>
              <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className={`accordion-body ${openSection === "destinations" ? "open" : ""}`}
              style={{ maxHeight: openSection === "destinations" ? `${destinations.length * 44}px` : "0" }}
            >
              {destinations.map((d) => (
                <Link key={d.href} href={d.href} onClick={() => setMobileOpen(false)} className="sub-link">
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-divider" />

          {/* About Accordion */}
          <div>
            <button
              onClick={() => toggleSection("about")}
              className={`accordion-trigger ${openSection === "about" ? "active" : ""}`}
            >
              <span>About Us</span>
              <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className={`accordion-body ${openSection === "about" ? "open" : ""}`}
              style={{ maxHeight: openSection === "about" ? `${aboutLinks.length * 44}px` : "0" }}
            >
              {aboutLinks.map((a) => (
                <Link key={a.href} href={a.href} onClick={() => setMobileOpen(false)} className="sub-link">
                  {a.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-divider" />

          {/* <span className="nav-label">Discover</span> */}

          <Link href="/themes" onClick={() => setMobileOpen(false)} className="nav-item-link">
            Itineraries
          </Link>

          <Link href="/blog" onClick={() => setMobileOpen(false)} className="nav-item-link">
            Blogs
          </Link>
        </nav>

        {/* Footer CTA — replaces inline Contact Us link */}
        <div className="drawer-footer">
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="contact-cta">
            Plan Your Safari
          </Link>
        </div>
      </div>
    </>
  );
}

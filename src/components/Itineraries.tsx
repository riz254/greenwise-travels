"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

export default function SectionWithFixedOverlay() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [overlay, setOverlay] = useState({
    left: 0,
    top: 0,
    width: 100,
    height: 200,
    visible: false,
  });

  // Recalculate overlay position so it sits visually centered over the section
  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    function update() {
      const rect = el.getBoundingClientRect();
      // Hide on small screens
      if (window.innerWidth < 768) {
        setOverlay((s) => ({ ...s, visible: false }));
        return;
      }

      const overlayWidth = Math.min(rect.width * 0.45, 760); // limit max width
      const overlayHeight = Math.round(overlayWidth * 0.66); // aspect ratio (change if needed)

      // center of section relative to viewport
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // show overlay only when section intersects viewport (simple check)
      const inViewport = rect.bottom > 0 && rect.top < window.innerHeight;

      setOverlay({
        left: centerX,
        top: centerY,
        width: overlayWidth,
        height: overlayHeight,
        visible: inViewport,
      });
    }

    update();
    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // also run periodically while user is scrolling fast (optional)
    const rafId = requestAnimationFrame(() => update());

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // The portal target (document.body) is safe because this file is "use client"
  const overlayNode =
    typeof document !== "undefined" && overlay.visible
      ? createPortal(
          <div
            aria-hidden
            style={{
              position: "fixed",
              left: "500px",
              top: overlay.top,
              width: "250px",
              height: "300px",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none", // don't block clicks
            }}
            className="z-50 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Use <img> or next/image — using <img> here to keep sizing simple */}
            <Image
              src={"/images/images/azure.jpg"}
              alt=""
              fill
              className="w-[100px] h-[10px] object-cover"
              draggable={false}
            />
            {/* optional overlay tint */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </div>,
          document.body
        )
      : null;

  return (
    <>
      {overlayNode}

      <section
        ref={sectionRef}
        className="relative w-full py-16 container mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT - main image (col-6) */}
          <div
            className="rounded-xl overflow-hidden shadow-amber-50 shadow-md "
            style={{ padding: "70px" }}
          >
            <Image
              width={1200}
              height={800}
              src={"/images/images/outbound.jpg"}
              alt="Main"
              className="w-full h-[70vh] object-cover"
              loading="lazy"
            />
          </div>

          <div
            className="ml-64  mx-auto px-6 w-[900px] grid md:grid-cols-2 items-center "
            style={{ marginLeft: "100px" }}
          >
            {/* Left content */}
            <div>
              <h2
                className="text-4xl font-bold mb-4"
                style={{ margin: "30px" }}
              >
                Take a Look at Our Video
              </h2>
              <p
                className="mb-6 text-lg leading-relaxed"
                style={{ margin: "30px" }}
              >
                Experience the world like never before with our company&apos;s
                immersive and unforgettable travel adventures! Get ready for an
                incredible journey which includes activities such as:
              </p>

              {/* Two-column list */}
              <ul
                className="grid grid-cols-2 gap-x-8 gap-y-3 text-base"
                style={{ margin: "30px" }}
              >
                <li>Outdoor recreation activities</li>
                <li>Airlines</li>
                <li>Car Rentals</li>
                <li>Cruise Lines</li>
                <li>Hotels</li>
                <li>Railways</li>
                <li>Travel Insurance</li>
                <li>Package Tours</li>
                <li>Insurance</li>
                <li>Guide Books</li>
              </ul>

              <div className="mt-6">
                <Link
                  href="/get-started"
                  className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 hover:text-xl text-white font-semibold rounded-lg shadow-lg transition"
                  style={{ padding: "6px", margin: "10px" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// {/* RIGHT - copy and CTA (col-6) */}
// <div className="flex flex-col justify-center text-black px-2 md:px-6">
//   <h2 className="text-3xl md:text-4xl font-bold mb-4">
//     Unforgettable Adventures
//   </h2>
//   <p className="text-lg text-gray-200 mb-6 leading-relaxed">
//     Discover authentic experiences that connect you with culture,
//     nature and people. Explore with purpose, and give back to the
//     communities you visit.
//   </p>
//   <div>
//     <Link
//       href="/services"
//       className="inline-block px-6 py-3 bg-green-700 hover:bg-green-800 rounded-lg shadow text-white"
//     >
//       Learn More
//     </Link>
//   </div>
// </div>

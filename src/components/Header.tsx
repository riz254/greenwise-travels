// import {
//   FaPhone,
//   FaEnvelope,
//   FaYoutube,
//   FaTiktok,
//   FaTwitter,
//   FaInstagram,
//   FaFacebook,
//   FaLocationDot,
//   FaLinkedin,
// } from "react-icons/fa6";

import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube, FaTiktok, FaXTwitter } from "react-icons/fa6";
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
  // }

  // export default function Header() {
  return (
    <section className="header fixed  top-0 left-0 w-full z-[99] bg-green-100 text-green-700">
      {/* // return ( */}
      <div className=" bg-green-100 text-green-700  flex items-center justify-between px-4 py-2">
        {/* Left side contacts */}
        <div className="flex space-x-6">
          <Link
            className="flex no-underline items-center text-green-600 space-x-2"
            href="#"
          >
            <FaPhone />
            <span className="text-base text-green-600 mr-5">
              <p>+254 759 527900 </p>
            </span>
          </Link>

          <span className="flex items-center space-x-2">
            <FaEnvelope />
            <Link href="#" className="text-base mr-5">
              info@greenwisetravels.com
            </Link>
          </span>

          <span className="flex items-center space-x-2">
            <FaLocationDot />
            <Link href="#" className=" text-base mr-5">
              4892 - Mamlaka Road, Nairobi, KE
            </Link>
          </span>
        </div>

        {/* Right side socials */}
        <div className="flex space-x-3">
          <Link
            href="http://www.youtube.com/@Greenwise_Africa"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaYoutube />
          </Link>

          <Link
            href="https://www.tiktok.com/@greenwise_travels"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaTiktok />
          </Link>

          <Link
            href="https://x.com/greenwise_t"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaXTwitter />
          </Link>

          <Link
            href="https://www.instagram.com/greenwise_travels/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.facebook.com/greenwisetravels"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaFacebook />
          </Link>

          <Link
            href="https://www.linkedin.com/company/greenwise-travels"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      {/* //   ); */}
      {/* // } */}
    </section>
  );
}

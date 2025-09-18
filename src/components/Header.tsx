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
  FaPhoneAlt,
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
    width: "30px",
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
    <>
      {/* // return ( */}
      <div className=" bg-green-100 text-green-700 flex items-center justify-between px-4 py-2">
        {/* Left side contacts */}
        <div className="flex space-x-6">
          <a className="flex no-underline items-center text-green-600 space-x-2">
            <FaPhone />
            <span
              href="tel:+254759527900"
              className="text-base text-green-600 mr-5"
            >
              <a>+254 759 527900 </a>
            </span>
          </a>

          <span className="flex items-center space-x-2">
            <FaEnvelope />
            <a
              href="mailto:info@greenwisetravels.com"
              className="text-base mr-5"
            >
              info@greenwisetravels.com
            </a>
          </span>

          <span className="flex items-center space-x-2">
            <FaLocationDot />
            <a href="#" className=" text-base mr-5">
              4892 - Mamlaka Road, Nairobi, KE
            </a>
          </span>
        </div>

        {/* Right side socials */}
        <div className="flex space-x-3">
          <a
            href="http://www.youtube.com/@Greenwise_Africa"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.tiktok.com/@greenwise_travels"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaTiktok />
          </a>

          <a
            href="https://x.com/greenwise_t"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com/greenwise_travels/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/greenwisetravels"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/company/greenwise-travels"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      {/* //   ); */}
      {/* // } */}

      <div className="relative z-[99] w-full bg-green-100 text-green-700">
        <div className=" mx-auto flex items-center justify-evenly px-4 py-2">
          {/* Left side: phone, email, address */}
          <div className="flex flex-wrap items-center space-x-6">
            <a href="tel:+254759527900" className="flex items-center space-x-2">
              <FaPhone className="text-green-600" />
              <span className="text-sm">+254 759 527900</span>
            </a>
            <a
              href="mailto:info@greenwisetravels.com"
              className="flex items-center space-x-2"
            >
              <FaEnvelope className="text-green-600" />
              <span className="text-sm">info@greenwisetravels.com</span>
            </a>
            <span className="flex items-center space-x-2">
              <FaLocationDot className="text-green-600" />
              <span className="text-sm">4892 - Mamlaka Road, Nairobi, KE</span>
            </span>
          </div>

          {/* Right side: social icons */}
          <div className="flex space-x-4 text-green-600 text-lg">
            <a href="https://www.youtube.com/@Greenwise_Africa" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@greenwise_travels" target="_blank">
              <FaTiktok />
            </a>
            <a href="https://x.com/greenwise_t" target="_blank">
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/greenwise_travels/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/greenwisetravels" target="_blank">
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/greenwise-travels"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// components/Footer.tsx
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaMarker,
  FaEnvelope,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer bg-gray-100 pt-10">
      <div className="inner first">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap text-center md:text-left justify-between">
            {/* Vision + Mission */}
            <div className="w-full md:w-5/12 mt-5">
              <div className="widget">
                <h3 className="heading text-xl font-bold">Our Vision</h3>
                <p className="mt-2 text-gray-700">
                  Africa’s leading responsible travel organization, promoting
                  awareness on responsible tourism and offering green travel
                  solutions for the good of humanity and the planet.
                </p>
                <h3 className="heading text-xl font-bold mt-4">Our Mission</h3>
                <p className="mt-2 text-gray-700">
                  To inspire a generation of responsible travellers, dedicated
                  to environmental conservation and community empowerment.
                </p>
              </div>

              {/* Social Links */}
              <div className="widget mt-6">
                <ul className="flex justify-center md:justify-start space-x-4 text-2xl text-gray-600">
                  <li>
                    <Link
                      href="https://x.com/greenwise_t"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/greenwise_travels/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/greenwisetravels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/greenwise-travels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="http://www.youtube.com/@Greenwise_Africa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.tiktok.com/@greenwise_travels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <FaTiktok />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pages */}
            <div className="w-1/2 md:w-2/12 mt-5">
              <div className="widget">
                <h3 className="heading font-bold mb-3">Pages</h3>
                <ul className="links list-unstyled  ">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/about">Destinations</Link>
                  </li>
                  <li>
                    <Link href="/themes">Itineraries</Link>
                  </li>
                  <li>
                    <Link href="/elements">Design Your Trip</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/itinerary">Itineraries</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Useful Links */}
            <div className="w-1/2 md:w-2/12 mt-5">
              <div className="widget">
                <h3 className="heading font-bold mb-3">Useful Links</h3>
                <ul className="links list-unstyled  ">
                  <li>
                    <Link href="/Kenya">Kenya</Link>
                  </li>
                  <li>
                    <Link href="/Tanzania">Tanzania</Link>
                  </li>
                  <li>
                    <Link href="/Uganda">Uganda</Link>
                  </li>
                  <li>
                    <Link href="/Rwanda">Rwanda</Link>
                  </li>
                  <li>
                    <Link href="/Ethiopia">Ethiopia</Link>
                  </li>
                  <li>
                    <Link href="/Islands">Indian Ocean Islands</Link>
                  </li>
                  <li>
                    <Link href="/Islands">Outbound Destinations</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-3/12 mt-5">
              <div className="widget">
                <h3 className="heading font-bold text-lg mb-6 text-gray-800">
                  To Reach Us
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-green-600" />
                    <Link
                      href="tel:+254759527900"
                      className="hover:text-green-700"
                    >
                      +254 759 527900
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-green-600" />
                    <Link
                      href="tel:+254725205716"
                      className="hover:text-green-700"
                    >
                      +254 725 205716
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-green-600" />
                    <Link
                      href="mailto:info@greenwisetravels.com"
                      className="hover:text-green-700"
                    >
                      info@greenwisetravels.com
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaMarker className="text-green-600 mt-1" />
                    <p>
                      6th Floor, Utumishi Co-op House, Mamlaka Road <br />
                      P.O. Box 4892-00100 Nairobi, Kenya
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright border-t border-gray-100 text-center py-4 mt-8 ">
          <p>
            &copy; {new Date().getFullYear()} Greenwise Travels | All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

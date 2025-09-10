import {
  FaPhone,
  FaEnvelope,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";

export default function Header() {
  return (
    <div className="relative z-[99] w-full bg-green-100 text-green-700 h-10 px-12 py-2  xl:flex items-center justify-between">
      {/* <div className="flex flex-wrap items-center justify-between bg-gray-100 px-6 py-2 text-sm text-gray-700"> */}
      <div className="flex flex-wrap space-x-6">
        <a href="tel:+254759527900" className="flex items-center space-x-2">
          <FaPhone className="text-green-600" /> <span>+254 759 527900</span>
        </a>
        <a
          href="mailto:info@greenwisetravels.com"
          className="flex items-center space-x-2"
        >
          <FaEnvelope className="text-green-600" />{" "}
          <span>info@greenwisetravels.com</span>
        </a>
        <span>4892 - Mamlaka Road, Nairobi, KE</span>
      </div>
      <div className="flex space-x-4 text-green-600 text-lg">
        <a href="https://www.youtube.com/@Greenwise_Africa" target="_blank">
          <FaYoutube />
        </a>
        <a href="https://www.tiktok.com/@greenwise_travels" target="_blank">
          <FaTiktok />
        </a>
        <a href="https://x.com/greenwise_t" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/greenwise_travels/" target="_blank">
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
  );
}

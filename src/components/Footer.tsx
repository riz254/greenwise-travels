export default function Footer() {
  return (
    <footer className="site-footer  pt-10">
      <div className="inner first">
        <div className="container mx-auto px-6">
          <div className="row text-center md:text-left flex flex-wrap justify-between">
            {/* Vision + Mission */}
            <div className="col-lg-5 mt-5 w-full md:w-5/12">
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
                <ul className="flex justify-center md:justify-start space-x-4 text-xl">
                  <li>
                    <a
                      href="https://x.com/greenwise_t"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/greenwise_travels/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/greenwisetravels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/greenwise-travels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.youtube.com/@Greenwise_Africa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@greenwise_travels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pages */}
            <div className="col-lg-2 mt-5 w-1/2 md:w-2/12">
              <div className="widget">
                <h3 className="heading font-bold mb-3">Pages</h3>
                <ul className="list-unstyled space-y-1 text-gray-700">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="about.html">Destinations</a>
                  </li>
                  <li>
                    <a href="themes.html">Itineraries</a>
                  </li>
                  <li>
                    <a href="elements.html">Design Your Trip</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="itinerary.html">Itineraries</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 mt-5 w-1/2 md:w-2/12">
              <div className="widget">
                <h3 className="heading font-bold mb-3">Useful Links</h3>
                <ul className="list-unstyled space-y-1 text-gray-700">
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
                    <a href="Islands.html">Outbound Destinations</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 mt-5 w-full md:w-3/12">
              <div className="widget">
                <h3 className="heading font-bold mb-4">To Reach Us</h3>
                <ul className="list-unstyled space-y-2 text-gray-700">
                  <li className="phone">
                    <a href="tel:+254759527900">+254 759 527900</a>
                  </li>
                  <li>
                    <a href="tel:+254725205716">+254 725 205716</a>
                  </li>
                  <li className="email">
                    <a href="mailto:info@greenwisetravels.com">
                      info@greenwisetravels.com
                    </a>
                  </li>
                  <li className="address">
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
        <div className="copyright  text-center py-4 mt-8">
          <p>
            &copy; {new Date().getFullYear()} Greenwise Travels | All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

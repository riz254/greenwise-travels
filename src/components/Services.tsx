export default function Services() {
  const services = [
    "Safari Adventures",
    "Beach Holidays",
    "Mountain Treks",
    "Cultural Tours",
    "Luxury Travel",
    "Budget Safaris",
  ];
  const serviceStyle = {
    backgroundImage: "url('/images/images/kenya-zebra-rainbow.webp')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  };

  return (
    // <section
    //   className="relative py-20 bg-cover bg-center"
    //   style={{ backgroundImage: "url('/images/serengeti.jpg')" }}
    // >
    //   <div className="absolute inset-0 bg-black/50"></div>
    //   <div className="relative container mx-auto px-6 text-center text-white">
    //     <h2 className="text-3xl font-bold">Our Services</h2>
    //     <div className="mt-8 grid gap-6 md:grid-cols-3">
    //       {services.map((s, i) => (
    //         <div
    //           key={i}
    //           className="rounded-lg bg-white/10 p-6 shadow hover:bg-white/20 transition"
    //         >
    //           <h3 className="text-lg font-semibold">{s}</h3>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <div
      class=" mt-3 "
      // style="  background-image: url('images/kenya-zebra-rainbow.webp'); background-size: cover; background-attachment: fixed; background-repeat: no-repeat">
      style={serviceStyle}
    >
      <div className="w-screen h-auto mx-auto">
        <div
          className="row d-flex mb-3 justify-content-center"
          style={{ padding: "100px" }}
        >
          <div className="col-lg-12 text-center">
            <a href="services">
              <h2
                className="section-title text-center mb-2 mt-3"
                style={{ color: "rgb(218, 255, 216)" }}
              >
                OUR SERVICES
              </h2>
            </a>
            <p style={{ color: "bisque" }}>
              Unleash the potential of your travel with our exceptional services
              and embark on an unforgettable adventures with us.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="feature text-center">
              <i className="fa-solid fa-mountain-sun display-6 my-icon mb-2"></i>
              <h3
                className="d-inline-block "
                style={{
                  color: "rgb(254, 255, 233)",
                  fontWeight: 500,
                  letterSpacing: "1.3px",
                  fontSize: "20px",
                }}
              >
                Wildlife & Adventure Tours
              </h3>
              <p
                className="mt-3"
                style={{ color: "bisque", textAlign: "left" }}
              >
                Africa is renowned for its amazing wildlife reserves and
                spotless sandy beaches which, for years, have seen countless
                international visitors coming over and over again to enjoy and
                we know exactly where to take you for that incredible
                experience!
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="feature text-center">
              <i className="fa-solid fas fa-users display-6 my-icon mb-2"></i>
              <h3
                className="d-inline-block "
                style={{
                  color: "rgb(254, 255, 233)",
                  fontWeight: 500,
                  letterSpacing: "1.3px",
                  fontSize: "20px",
                }}
              >
                Meetings & Conferences
              </h3>
              <p
                className="mt-3"
                style={{ color: "bisque", textAlign: "left" }}
              >
                Our meetings and conference department specializes in offering a
                comprehensive range of facilities to cater for all types of
                meetings and conferences including international conventions.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="feature text-center">
              <div>
                <i className="fas fa-graduation-cap display-6 my-icon mb-2"></i>
              </div>
              <h3
                className="d-inline-block "
                style={{
                  color: "rgb(254, 255, 233)",
                  fontWeight: 500,
                  letterSpacing: "1.3px",
                  fontSize: "20px",
                }}
              >
                Educational Trips
              </h3>
              <p
                className="mt-3"
                style={{ color: "bisque", textAlign: "left" }}
              >
                We specialize in organizing educational trips that cater to
                learners' needs, providing affordable accommodation,
                transportation, and enriching experiences. Partner with us for
                memorable and transformative study tours for universities,
                schools, and academic institutions.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="feature text-center">
              <i className="fas fa-plane-departure display-6 my-icon mb-1"></i>
              <h3
                className="d-inline-block "
                style={{
                  color: "rgb(254, 255, 233)",
                  fontWeight: 500,
                  letterSpacing: "1.3px",
                  fontSize: "20px",
                }}
              >
                Airfare Quotation and Ticketing
              </h3>
              <p
                className="mt-3"
                style={{ color: "bisque", textAlign: "left" }}
              >
                Our experienced consultants provide personalized advice on
                schedules, fares, airline quality, and special benefits. Secure
                the best airfares with our strong airline relations and advanced
                reservation systems.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="feature text-center">
              <i className="fas fa-hands-helping display-6 my-icon mb-2"></i>
              <h3
                className="d-inline-block "
                style={{
                  color: "rgb(254, 255, 233)",
                  fontWeight: 500,
                  letterSpacing: "1.3px",
                  fontSize: "20px",
                }}
              >
                Team Building Retreats
              </h3>
              <p
                className="mt-3"
                style={{ color: "bisque", textAlign: "left" }}
              >
                Boost your team's productivity with our dynamic team building
                program. Engage in challenging outdoor activities that inspire
                behavioral change and create lasting impact.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="feature text-center">
              <i className="fas fa-globe display-6 my-icon mb-2"></i>
              <h3
                className="d-inline-block "
                style={{
                  color: "rgb(254, 255, 233)",
                  fontWeight: 500,
                  letterSpacing: "1.3px",
                  fontSize: "20px",
                }}
              >
                Mission and Humanitarian Tours
              </h3>
              <p
                className="mt-3"
                style={{ color: "bisque", textAlign: "left" }}
              >
                Our foundation on Christian values drives us to partner with
                mission groups, providing cost-effective services that make a
                meaningful impact on the lives of the underprivileged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

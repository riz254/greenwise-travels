import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/Magical Kenya.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="animate-pulse text-4xl font-bold">
            Africa is Calling
          </h2>
          <a
            href="/about"
            className="mt-6 rounded bg-green-600 px-6 py-2 font-semibold hover:bg-green-700"
          >
            Read More
          </a>
        </div> */}
        {/* <section class="showcase">
		<div class="video-container">
			<video src="videos/Magical Kenya.mp4" autoplay muted loop></video>
		</div> */}

        {/* Word Carousel */}
        <div className="relative p-20 top-52 ">
          <div
            id="carouselExample"
            className="carousel slide position-relative text-center text-white"
            data-bs-ride="carousel"
            data-bs-pause="false"
            style={{
              padding: "5px",
            }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1500">
                <h2 className="font-serif ">Africa is Calling</h2>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <h2 className="font-serif">Personalized Sustainable Travel</h2>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <h2 className="font-serif">
                  Discover impactful African experiences
                </h2>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <h2 className="font-serif">Connect with Locals</h2>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <h2 className="font-serif">Give back to Communities</h2>
              </div>
              <div className="carousel-item mb-5" data-bs-interval="3000">
                <h2 className="font-serif">
                  Authentic Travel Experiences for Every Adventurous Spirit
                </h2>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="content position-relative text-center mt-4">
            <Link
              href="/about"
              className="btn btn-success px-4 py-2 rounded-pill"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      {/* </section> */}
    </>
  );
}

import {
  FaGlobe,
  FaTrophy,
  FaHandsHelping,
  FaMap,
  FaHeart,
} from "react-icons/fa";
import { GiHiking } from "react-icons/gi";

const features = [
  {
    icon: <FaGlobe className="text-5xl text-green-800 mx-auto mb-4" />,
    title: "Responsible Travel",
    desc: "We exist for 3 missions: happy traveller, better environment and empowered communities.",
  },
  {
    icon: <FaTrophy className="text-5xl text-green-800 mx-auto mb-4" />,
    title: "Top-notch Safari Equipment",
    desc: "Our top-quality safari equipment and custom-designed vehicles ensure your safety and comfort, even in rugged terrain.",
  },
  {
    icon: <FaHandsHelping className="text-5xl text-green-800 mx-auto mb-4" />,
    title: "Impact That Counts",
    desc: "Travel with us to make a positive impact at no extra cost.",
  },
  {
    icon: <GiHiking className="text-5xl text-green-800 mx-auto mb-4" />,
    title: "Experienced Local Guides",
    desc: "Our guides are experts in Africa's wildlife, birdlife, and culture, and are dedicated to responsible tourism.",
  },
  {
    icon: <FaMap className="text-5xl text-green-800 mx-auto mb-4" />,
    title: "Bespoke Itineraries",
    desc: "We tailor our safaris to your unique needs, even on scheduled or group tours.",
  },
  {
    icon: <FaHeart className="text-5xl text-green-800 mx-auto mb-4" />,
    title: "Friends for Life",
    desc: "To us, you are first a friend before you become a client and we always endeavour to nurture these friendships for life.",
  },
];

export default function GreenwiseDifference() {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: "url('/images/images/P1060375.jpg')",
          backgroundSize: "cover",
        }}
      >
        <section
          className="bg-gradient-to-bl bg-green-100 !py-16 h-full !p-40 rounded-tr-full"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/wall-4-light.png')",
            backgroundBlendMode: "multiply",
          }}
        >
          {" "}
          <div className=" mx-auto px-6 text-center  ">
            <h2
              className="section-title text-center mb-2 mt-3 text-green-900"
              // style={{ color: "rgb(218, 255, 216)" }}
            >
              {" "}
              The Greenwise Difference
            </h2>
            <div
              className="!mt-12 grid !p-20 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              // style={{ padding: "80px" }}
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  className="rounded-lg  p-8  h-full hover:shadow-lg hover:shadow-lime-950 hover:scale-110 transition items-center text-center"
                  style={{ padding: "50px" }}
                >
                  {f.icon}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 space-x-2 font-medium">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

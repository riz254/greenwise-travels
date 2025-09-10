import { FaSearch, FaPlane, FaSmile } from "react-icons/fa";

export default function Process() {
  // const steps = [
  //   {
  //     icon: <FaSearch className="text-green-600 text-3xl" />,
  //     title: "Plan",
  //     desc: "Tell us your dream trip and preferences.",
  //   },
  //   {
  //     icon: <FaPlane className="text-green-600 text-3xl" />,
  //     title: "Travel",
  //     desc: "We handle bookings and logistics.",
  //   },
  //   {
  //     icon: <FaSmile className="text-green-600 text-3xl" />,
  //     title: "Enjoy",
  //     desc: "Experience Africa stress-free.",
  //   },
  // ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="owl-carousel owl-3-slider">
        <div className="feature-process" style={{ backgroundColor: "#bcac96" }}>
          <h2 className="mb-3">STEP 1</h2>
          <h4 className=" mb-2 ">DISCOVER</h4>

          <p>
            Whether referred by others or drawn in by our advertisements,
            explore all that we offer.
          </p>
        </div>
        <div className="feature-process" style={{ backgroundColor: "#bcac96" }}>
          <h2 className="mb-3">STEP 2</h2>
          <h4 className=" mb-2">ENGAGE</h4>
          <p>Contact us via the form, the "Design Your Trip" page, or phone.</p>
        </div>
        <div className="feature-process" style={{ backgroundColor: "#bcac96" }}>
          <h2 className="mb-3">STEP 3</h2>
          <h4 className=" mb-2">CURATE</h4>
          <p>
            Craft initial itineraries for luxury tour packages tailored to your
            preferences
          </p>
        </div>

        <div className="feature-process" style={{ backgroundColor: "#bcac96" }}>
          <h2 className="mb-3">STEP 4</h2>
          <h4 className=" mb-2">CONFIRM</h4>
          <p>
            Finalize the itinerary and payment details. Receive additional
            information before your arrival.
          </p>
        </div>

        <div className="feature-process" style={{ backgroundColor: "#bcac96" }}>
          <h2 className="mb-3">STEP 5</h2>
          <h4 className=" mb-2">EXPERIENCE</h4>
          <p>
            Arrive and enjoy your adventure with everything arranged for you.
          </p>
        </div>
      </div>
    </section>
  );
}

//  <div className="container mx-auto px-6 text-center">
//       <h2 className="text-3xl font-bold text-green-700">
//         Plan Your Trip in 3 Steps
//       </h2>
//       <div className="mt-12 grid gap-8 md:grid-cols-3">
//         {steps.map((s, i) => (
//           <div
//             key={i}
//             className="rounded-lg bg-white p-6 shadow hover:shadow-lg transition"
//           >
//             <div className="mb-4 flex justify-center">{s.icon}</div>
//             <h3 className="font-semibold text-lg">{s.title}</h3>
//             <p className="mt-2 text-gray-600">{s.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>

export default function Intro() {
  return (
    <section className="py-12 bg-white h-full">
      <div className="container mx-auto grid gap-8 h-80 md:grid-cols-2 px-6">
        <div>
          <h2 className="text-green-700 font-serif text-2xl font-bold place-self-center">
            Discover Africa, with Africans!
          </h2>
          <p className="mt-5 text-gray-700 text-4xl max-w-xl mx-auto justify-between text-center">
            The best way to discover Africa is with Africans. We are natives of
            this land and have spent our lives uncovering Africa’s best-kept
            secrets.
          </p>
        </div>
        <div>
          <h2 className="text-green-700 font-serif text-2xl font-bold place-self-center">
            Stress-free Travel
          </h2>
          <p className="mt-5 text-gray-700 text-4xl max-w-xl mx-auto justify-self-end text-center">
            Our experts are ready to plan your private, personalized, and
            sustainable African safari experiences!
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-serif font-bold  text-gray-800">
          We welcome you to walk in our footsteps for the greatest African
          safari adventure.
        </h3>
      </div>
    </section>
  );
}

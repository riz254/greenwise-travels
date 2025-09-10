export default function Hero() {
  return (
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h2 className="animate-pulse text-4xl font-bold">Africa is Calling</h2>
        <a
          href="/about"
          className="mt-6 rounded bg-green-600 px-6 py-2 font-semibold hover:bg-green-700"
        >
          Read More
        </a>
      </div>
    </section>
  );
}

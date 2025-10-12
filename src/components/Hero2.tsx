import Image from "next/image";

export default function hero2() {
  return (
    <>
      {/* Showcase Section */}
      <section className="h-[85vh] flex items-center justify-center text-center text-white  overflow-hidden w-full">
        <Image
          src="/images/images/About us page cover photo.jpg"
          alt="Landcruiser"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute  inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <h2 className="!mb-0 text-[40pt] font-bold">About Us</h2>
          <p className="text-lg">
            <span className="block text-[16pt]">
              We Are Specialists In Customized
            </span>
            <span className="text-[16pt]"> Trips To </span>
            <span className="typed-words text-[16pt]"></span>
          </p>
        </div>
      </section>
    </>
  );
}

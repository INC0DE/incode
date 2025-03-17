import Image from "next/image";

const Hero = () => {
  return (
    <section className="content-center w-full min-h-screen bg-whitelight lg:flex ">
      <div className="flex flex-col justify-center items-center p-5 space-y-4 lg:w-1/3 lg:p-0">
        <h1 className="text-5xl md:text-6xl xl:text-8xl">INCODE</h1>
        <h1 className="text-2xl md:text-3xl xl:text-4xl">Potenciando tu marca.</h1>
      </div>
      <div className="relative h-full self-end lg:w-2/3">
        <div>
          <Image src="/assets/deskhero.png" alt="computer" width={1000} height={1000} />
        </div>

        <div className="absolute inset-0 content-center justify-items-start pl-10 ">
          <h1 className="text-3xl text-gold sm:text-5xl xl:text-7xl font-semibold">
            Design, motion
          </h1>
          <h1 className="text-3xl text-black sm:text-6xl xl:text-8xl font-semibold">
            & Development
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center bg-whitelight w-full h-screen lg:pl-16 md:flex-row">
      <div className="flex flex-col justify-center h-full p-5 space-y-4 md:w-1/2 lg:p-0">
        <h1 className="text-6xl lg:text-7xl font-light ">
          Community <span className="font-bold ml-10 xl:ml-0">Manager.</span>
        </h1>
        <p className="text-3xl ml-32 text-gold mt-4 xl:ml-8">Servicio.</p>
        <h1 className="text-xl md:text-3xl text-gray ml-8">
          El puente entre la marca y la audiencia
        </h1>
      </div>

      <div className="relative lg:w-1/2">
        <Image src="/assets/phones.png" alt="hero" width={800} height={800}  priority unoptimized={true} />
      </div>
    </div>
  );
};

export default Hero;

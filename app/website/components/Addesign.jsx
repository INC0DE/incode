"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { add } from "@/public/assets";

const Addesign = () => {
  return (
    <section className="flex flex-col-reverse items-center bg-whitelight justify-center overflow-hidden xl:flex-row lg:h-96 ">
      {/* Imagen inclinada */}
      <div className="h-80 xl:h-full xl:w-1/2">
        <Image
          src={add} // Cambia esto con la ruta correcta
          alt="Modernidad y esencia"
          width={1000}
          height={1000}
        />
      </div>

      {/* Texto */}
      <div className="h-32 justify-items-center content-center xl:w-1/2 xl:h-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
          ¡Modernidad y esencia
        </h1>
        <h1 className="text-4xl sm:text-3xl md:text-5xl text-gold">
          en tu website!
        </h1>
      </div>
    </section>
  );
};

export default Addesign;

"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const data = [
  {
    title: "Brand Manager.",
    description:
      "Supervisa la identidad y reputación de tu marca en todos los canales.",
    image: "/assets/corporativas.jpg",
  },
  {
    title: "Digital Marketing Specialist.",
    description:
      "Nos encargamos de gestionar las  campañas publicitarias en tus redes sociales  y llegar a mas audiencia, generando trafico y leads frios.",
    image: "/assets/corporativas.jpg",
  },
  {
    title: "Social Media Manager.",
    description:
      "Diseñamos  las estrategias globales de tu marca para tener un balance entre la conversión y conexión de marca en redes sociales.",
    image: "/assets/corporativas.jpg",
  },
];

const Strategy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  return (
    <section>
      <div className="flex flex-col h-56 bg-whitelight justify-center items-center space-y-5">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-gold justify-self-center">
          Nuestros Managers
        </h1>
        <h1 className="text-lg sm:text-xl lg:text-3xl text-gray justify-self-center lg:ml-52 ">
          Detrás de cada estrategia exitosa.
        </h1>
      </div>

      <div className="h-auto flex justify-center items-center py-6 px-4">
        <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
              <Image
                src={data[currentIndex].image}
                alt="Slide"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500"
                unoptimized={true}
              />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-bold text-gold">
                {data[currentIndex].title}
              </h2>
              <p className="text-sm sm:text-lg mt-2">
                {data[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Botón Izquierda */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray p-2 sm:p-3 rounded-full shadow-lg hover:bg-black transition"
          >
            <ChevronLeftIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </button>

          {/* Botón Derecha */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray p-2 sm:p-3 rounded-full shadow-lg hover:bg-black transition"
          >
            <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-4">
            {data.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 mx-1 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-gray"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;

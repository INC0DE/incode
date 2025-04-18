"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Content Manager.",
    description:
      "Responsable de la planificación y creación de contenido de calidad para blogs, redes y otros medios digitales.",
    image: "/assets/contentmanager.png",
  },
  {
    title: "Brand Manager.",
    description:
      "Supervisa la identidad y reputación de tu marca en todos los canales.",
    image: "/assets/branding.png",
  },
  {
    title: "Digital Marketing Specialist.",
    description:
      "Nos encargamos de gestionar las  campañas publicitarias en tus redes sociales  y llegar a mas audiencia, generando trafico y leads frios.",
    image: "/assets/digital.png",
  },
  {
    title: "Social Media Manager.",
    description:
      "Diseñamos  las estrategias globales de tu marca para tener un balance entre la conversión y conexión de marca en redes sociales.",
    image: "/assets/social.png",
  },
];

const Strategy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

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

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    gsap.from(subtitleRef.current, {
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
      },
      x: -40,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
      },
      x: 40,
      opacity: 0,
      duration: 1,
      delay: 0.4,
    });
  }, [currentIndex]);

  return (
    <section>
      <div className="flex flex-col h-56 bg-white justify-center items-center space-y-5">
        <h1
          ref={titleRef}
          className="text-4xl font-bold sm:text-6xl lg:text-8xl text-gold justify-self-center"
        >
          Nuestros Managers
        </h1>
        <h1
          ref={subtitleRef}
          className="text-lg text-center sm:text-xl lg:text-3xl text-gray justify-self-center"
        >
          Los responsables detrás de cada estrategia exitosa.
        </h1>
      </div>

      <div className="h-auto flex justify-center items-center py-6 px-4">
        <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Imagen */}
              <div
                ref={imageRef}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80"
              >
                <Image
                  src={data[currentIndex].image}
                  alt="Slide"
                  width={400}
                  height={400}
                  className="transition-all duration-500 object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Texto */}
              <div ref={textRef} className="w-full flex flex-col justify-center">
                <h2 className="text-lg sm:text-2xl font-bold text-gold">
                  {data[currentIndex].title}
                </h2>
                <p className="text-sm sm:text-lg mt-2">
                  {data[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full shadow-lg hover:bg-black transition"
          >
            <ChevronLeftIcon className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full shadow-lg hover:bg-black transition"
          >
            <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
          </button>

          {/* Dots */}
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

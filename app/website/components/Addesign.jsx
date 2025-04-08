"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Addesign = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación para la imagen
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animación para los títulos
      gsap.from(titleRefs.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse items-center bg-white overflow-hidden xl:flex-row lg:h-96"
    >
      {/* Imagen animada */}
      <div
        ref={imageRef}
        className="h-full w-full sm:w-full sm:h-80 xl:h-full xl:w-1/2"
      >
        <Image
          src="/assets/add.jpg"
          alt="Modernidad y esencia"
          width={1000}
          height={1000}
        />
      </div>

      {/* Títulos animados */}
      <div className="h-32 justify-items-center content-center xl:w-1/2 xl:h-full">
        <h1
          ref={(el) => (titleRefs.current[0] = el)}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-black"
        >
          ¡Modernidad y esencia
        </h1>
        <h1
          ref={(el) => (titleRefs.current[1] = el)}
          className="text-4xl sm:text-3xl md:text-5xl text-gold"
        >
          en tu website!
        </h1>
      </div>
    </section>
  );
};

export default Addesign;

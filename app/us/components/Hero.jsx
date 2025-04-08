"use client"; // Si usas App Router

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const leftContentRef = useRef(null);
  const imageRef = useRef(null);
  const titleWhiteRef = useRef(null);
  const titleBlackRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftContentRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      [titleWhiteRef.current, titleBlackRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="content-center w-full min-h-screen bg-white lg:flex ">
      <div
        ref={leftContentRef}
        className="flex flex-col justify-center items-center p-5 space-y-4 lg:w-1/3 lg:p-0"
      >
        <h1 className="text-5xl md:text-6xl xl:text-8xl">INCODE</h1>
        <h1 className="text-2xl md:text-3xl xl:text-4xl">
          Potenciando tu marca.
        </h1>
      </div>
      <div className="relative h-full self-end lg:w-2/3">
        <div ref={imageRef}>
          <Image
            src="/assets/deskhero.png"
            alt="computer"
            width={1000}
            height={1000}
          />
        </div>

        <div className="absolute inset-0 content-center justify-items-start pl-10">
          <h1
            ref={titleWhiteRef}
            className="text-3xl text-white sm:text-5xl xl:text-7xl font-semibold"
          >
            Design, motion
          </h1>
          <h1
            ref={titleBlackRef}
            className="text-3xl text-black sm:text-6xl xl:text-8xl font-semibold"
          >
            & Development
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

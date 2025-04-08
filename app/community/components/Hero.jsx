"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1 })
      .from(subtitleRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.8")
      .from(descriptionRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.8")
      .from(imageRef.current, { x: 100, opacity: 0, duration: 1 }, "-=0.8");
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center bg-white w-full h-screen lg:pl-16 md:flex-row"
    >
      <div className="flex flex-col justify-center h-full p-5 space-y-4 md:w-1/2 lg:p-0">
        <h1 ref={titleRef} className="text-6xl lg:text-7xl font-light">
          Community <span className="font-bold ml-10 xl:ml-0">Manager.</span>
        </h1>
        <p ref={subtitleRef} className="text-3xl ml-32 text-gold mt-4 xl:ml-8">
          Servicio.
        </p>
        <h1 ref={descriptionRef} className="text-xl md:text-3xl text-gray ml-8">
          El puente entre la marca y la audiencia
        </h1>
      </div>

      <div className="relative lg:w-1/2">
        <div ref={imageRef}>
          <Image
            src="/assets/phones.png"
            alt="hero"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

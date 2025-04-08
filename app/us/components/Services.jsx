"use client";

import { useRef, useEffect } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const devRef = useRef(null);
  const devImgRef = useRef(null);
  const cmRef = useRef(null);
  const cmImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(devRef.current, {
        x: -100,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: devRef.current,
          start: "top 80%",
        },
      });

      gsap.from(devImgRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: devImgRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cmRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cmRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cmImgRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cmImgRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // limpiar animaciones si el componente se desmonta
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="flex flex-col h-56 bg-white justify-center items-center space-y-5 p-5">
        <h1 className="text-4xl sm:text-7xl">Servicio</h1>
        <h1 className="text-lg text-center sm:text-xl sm:text-left text-gray">
          Agencia especializada en marketing digital.
        </h1>
      </div>

      <div className="flex flex-col items-center px-10 lg:flex-row lg:h-96 lg:py-10">
        {/* Desarrollo Web */}
        <div className="p-5 lg:w-1/2 lg:px-1">
          <div ref={devRef} className="flex flex-row space-x-5 lg:space-x-10">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-7xl text-gray">Desarrollo</h1>
              <h1 className="text-3xl md:text-6xl font-bold">Web.</h1>
            </div>
            <div className="self-center">
              <Button
                as={Link}
                className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg"
                color="primary"
                href="/website"
              >
                Ver más.
              </Button>
            </div>
          </div>

          <div className="justify-self-end" ref={devImgRef}>
            <Image
              src="/assets/deskdev.png"
              alt="computer"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0 border-1 border-black lg:h-full lg:w-0"></div>

        {/* Community Manager */}
        <div className="p-5 lg:w-1/2 lg:px-1 lg:ml-10">
          <div ref={cmRef} className="flex flex-row space-x-5 xl:space-x-10">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-6xl text-gray">Community</h1>
              <h1 className="text-3xl md:text-6xl font-bold">Manager.</h1>
            </div>
            <div className="self-center">
              <Button
                as={Link}
                className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg"
                color="primary"
                href="/community"
              >
                Ver más.
              </Button>
            </div>
          </div>

          <div className="justify-self-end" ref={cmImgRef}>
            <Image
              src="/assets/phonemark.png"
              alt="computer"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

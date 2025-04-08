"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRefs.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        x: 100,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup al desmontar
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col lg:flex-row">
      <div className="space-y-10 px-5 py-20 lg:w-3/5 lg:px-10 sm:space-y-20">
        <div className="content-center sm:justify-items-end">
          <h1
            ref={(el) => (titleRefs.current[0] = el)}
            className="text-4xl md:text-6xl lg:text-7xl font-bold lg:mr-3"
          >
            ¡Una web profesional
          </h1>
          <h1
            ref={(el) => (titleRefs.current[1] = el)}
            className="text-5xl md:text-7xl lg:text-8xl text-gold"
          >
            más clientes,
          </h1>
          <h1
            ref={(el) => (titleRefs.current[2] = el)}
            className="text-5xl md:text-6xl lg:text-7xl text-gold"
          >
            más crecimiento!
          </h1>
        </div>
        <div className="lg:w-80 lg:ml-10">
          <p ref={paragraphRef} className="text-2xl text-gray">
            Creamos páginas web optimizadas para dar a conocer tu marca y poder
            vender tus productos de la manera más accesible y efectiva.
          </p>
        </div>
      </div>
      <div
        className="aboslute content-end justify-items-end lg:w-2/5"
        ref={imageRef}
      >
        <Image
          alt="page"
          src="/assets/pagesdesk.png"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Intro;

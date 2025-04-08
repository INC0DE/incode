"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const paraRefs = useRef([]);

  const setParaRef = (el) => {
    if (el && !paraRefs.current.includes(el)) {
      paraRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from([title1Ref.current, title2Ref.current], {
        x: -100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(paraRefs.current, {
        opacity: 0,
        y: 20,
        duration: 1.5,
        stagger: 0.3,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // limpia animaciones cuando el componente se desmonta
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex flex-col-reverse p-5 lg:flex-row lg:h-80 md:px-8 md:p-0 md:pt-5"
    >
      <div className="flex w-full items-end lg:w-1/2 xl:w-2/5">
        <div ref={imageRef}>
          <Image
            src="/assets/tablet.png"
            alt="Mockup"
            width={800}
            height={800}
          />
        </div>
      </div>

      <div className="w-full space-y-8 content-center lg:w-1/2 xl:w-3/5">
        <div>
          <h1
            ref={title1Ref}
            className="text-5xl sm:text-7xl xl:text-8xl text-black"
          >
            Tu página web
          </h1>
          <h1
            ref={title2Ref}
            className="text-3xl text-center text-gold sm:text-6xl xl:text-7xl xl:ml-10"
          >
            con community manager.
          </h1>
        </div>

        <div className="space-y-5 justify-self-center xl:w-[700px] md:ml-14">
          <p
            ref={setParaRef}
            className="text-gray text-xl xl:text-2xl leading-relaxed"
          >
            Especialistas en potenciar el marketing digital de tu marca, creando
            su página web para el desarrollo de un buen community manager.
          </p>
          <p
            ref={setParaRef}
            className="text-gray text-lg xl:text-2xl leading-relaxed"
          >
            Nuestra propuesta asegura impulsar tus valores y la conexión con
            audiencia, posicionando profesionalmente a tu negocio en lo alto del
            sector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

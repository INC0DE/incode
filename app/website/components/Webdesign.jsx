"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Webdesign = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRefs.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col md:flex-row">
      <div className="flex flex-row h-40 justify-center items-center space-x-4 md:flex-col md:self-center lg:flex-row xl:pl-5 md:h-0 md:w-1/3 ">
        <h1
          ref={(el) => (titleRefs.current[0] = el)}
          className="text-5xl sm:text-6xl xl:text-7xl font-bold"
        >
          Diseño
        </h1>
        <h1
          ref={(el) => (titleRefs.current[1] = el)}
          className="text-5xl sm:text-6xl xl:text-7xl"
        >
          Web.
        </h1>
      </div>

      <div className="md:w-2/3" ref={imageRef}>
        <Image
          src="/assets/design.jpg"
          alt="design"
          width={1100}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Webdesign;

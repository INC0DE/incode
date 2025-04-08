"use client";

import { useRef, useEffect } from "react";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Webdev = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRefs.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        scale: 0.95,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-t-2">
      <div className="flex flex-col h-52 justify-center items-center space-x-4 lg:flex-row">
        <h1
          ref={(el) => (titleRefs.current[0] = el)}
          className="text-6xl lg:text-7xl font-bold"
        >
          Desarrollo
        </h1>
        <h1
          ref={(el) => (titleRefs.current[1] = el)}
          className="text-6xl lg:text-7xl"
        >
          Web.
        </h1>
      </div>
      <div ref={imageRef}>
        <Image
          src="/assets/webdev.jpeg"
          alt="webdev"
          width={2000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Webdev;

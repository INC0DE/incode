"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@heroui/card";
import FormAll from "../../components/form";

gsap.registerPlugin(ScrollTrigger);

const Contactweb = () => {
  const titleRef = useRef(null);
  const formRef = useRef(null);

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

    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 90%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });
  }, []);

  return (
    <div className="min-h-screen p-10 bg-white">
      <div
        ref={titleRef}
        className="flex flex-col items-center justify-center h-52"
      >
        <h1 className="text-4xl md:text-5xl text-gray">¿Quieres tu</h1>
        <h1 className="text-3xl md:text-7xl">página personalizada?</h1>
      </div>

      <div className="flex justify-center">
        <Card
          ref={formRef}
          className="flex items-center w-64 h-72 p-10 sm:w-80"
        >
          <FormAll />
        </Card>
      </div>
    </div>
  );
};

export default Contactweb;

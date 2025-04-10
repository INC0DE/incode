"use client";

import Link from "next/link";
import TiltedCard from "./TiltedCard";

const images = [
  {
    src: "/assets/evolutiongym.jpeg",
    title: "Evolution GYM",
    href: "https://evolution-swart.vercel.app/",
  },
  {
    src: "/assets/josecarlos.jpeg",
    title: "Jose Carlos",
    href: "https://www.josecarloscervantes.com/",
  },
  {
    src: "/assets/incode.jpeg",
    title: "INCODE",
    href: "https://incodeweb.com/",
  },
];

const Proyects = () => {
  return (
    <section className="w-full lg:min-h-screen flex flex-col bg-whitelight items-center gap-20 py-5">
      <div className="bg-white w-full h-56 content-center">
        <h1 className="text-5xl text-center lg:text-7xl text-gray">
          Nuestros{" "}
          <span className="text-black text-6xl lg:text-8xl">proyectos.</span>
        </h1>
      </div>

      <div className="relative w-full flex flex-col gap-10  md:flex-row md:gap-20 md:overflow-x-auto scrollbar-hide md:p-20">
        {images.map((item, index) => (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiltedCard
              key={index}
              imageSrc={item.src}
              altText={item.title}
              captionText={item.title}
              imageWidth="550px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text text-gold">{item.title}</p>
              }
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Proyects;

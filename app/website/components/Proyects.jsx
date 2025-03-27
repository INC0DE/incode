"use client";

import Image from "next/image";
import TiltedCard from "./TiltedCard";

const images = [
  {
    src: "/assets/corporativas.jpg",
    title: "Landing-Pages",
  },
  {
    src: "/assets/e-commerce.jpeg",
    title: "E-Commerce",
  },
  {
    src: "/assets/blog.jpg",
    title: "Blog",
  },
  {
    src: "/assets/menu.jpg",
    title: "Menú",
  },
  {
    src: "/assets/portfolio.jpg",
    title: "Portafolio",
  },
];

const Proyects = () => {
  return (
    <section className="w-full min-h-screen flex flex-col bg-whitelight items-center gap-20">
      <div className="bg-white w-full h-56 content-center">
        <h1 className="text-5xl text-center lg:text-7xl text-gray">
          Nuestros{" "}
          <span className="text-black text-6xl lg:text-8xl">proyectos.</span>
        </h1>
      </div>

      <div className="relative w-full flex flex-col gap-10 md:flex-row md:gap-20 md:overflow-x-auto scrollbar-hide md:p-20">
        {images.map((item, index) => (
          <TiltedCard
            key={index}
            imageSrc={item.src}
            altText={item.title}
            captionText={item.title}
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-gold">{item.title}</p>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Proyects;

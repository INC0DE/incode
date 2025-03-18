import React from "react";
import Image from "next/image";

const items = [
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

const Examplesweb = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-whitelight ">
      <div className="flex flex-col h-56 justify-center items-center space-y-5">
        <h1 className="text-5xl lg:text-7xl text-gray md:mr-32">¿Qué página</h1>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl md:ml-32">
          buscas para tu negocio?
        </h1>
      </div>

      <div className="relative overflow-hidden w-full py-10">
        <div className="flex w-max animate-scroll gap-16">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 w-[500px]"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-[500px] h-[300px]"
                unoptimized={true}
              />
              <p className="mt-4 text-xl font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examplesweb;

import React from "react";
import Image from "next/image";
import { blog, ecommerce, corporativo, menu, portfolio } from "@/public/assets";

const items = [
  {
    src: corporativo,
    title: "Landing-Pages",
  },
  {
    src: ecommerce,
    title: "E-Commerce",
  },
  {
    src: blog,
    title: "Blog",
  },

  {
    src: menu,
    title: "Menú",
  },
  {
    src: portfolio,
    title: "Portafolio",
  },
];

const Examplesweb = () => {
  return (
    <section className="min-h-screen bg-whitelight ">
      <div className="flex flex-col h-56 justify-center items-center space-y-5">
        <h1 className="text-5xl lg:text-7xl text-gray md:mr-32">¿Qué página</h1>
        <h1 className="text-3xl lg:text-5xl md:ml-32">
          buscas para tu negocio?{" "}
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
                className="rounded-lg shadow-lg w-[500px] h-[300px]"
              />
              <p className="mt-4 text-xl font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examplesweb;

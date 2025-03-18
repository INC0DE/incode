"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Experiencia de usuario",
    content:
      "Un diseño web bien estructurado hace que la navegación sea intuitiva, mejorando la satisfacción del usuario y aumentando el tiempo de permanencia en la página.",
  },
  {
    id: 2,
    title: "Mayor conversión y ventas",
    content:
      "En un e-commerce, un diseño atractivo y funcional puede aumentar las conversiones, ya que facilita la compra y genera confianza.",
  },
  {
    id: 3,
    title: "Mejora el SEO",
    content:
      "Google premia los sitios bien diseñados con buena velocidad, estructura optimizada y experiencia de usuario, lo que mejora el posicionamiento en buscadores.",
  },
  {
    id: 4,
    title: "Identidad de marca",
    content:
      "Un diseño coherente con tu branding (colores, tipografía, imágenes) ayuda a que los usuarios te reconozcan y confíen más en tu marca.",
  },
  {
    id: 5,
    title: "Diferenciación de la competencia",
    content:
      "Un sitio bien diseñado destaca y transmite profesionalismo, lo que te ayuda a sobresalir en un mercado competitivo.",
  },
];

const Browsedes = () => {
  const [selected, setSelected] = useState(items[0]);
  return (
    <section>
      <div className="flex flex-col h-44 px-5 justify-center bg-whitelight items-center space-y-5 md:px-20 md:h-56 xl:px-72 ">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-gray self-start ">¿Por qué tener</h1>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl self-end ">un diseño web único? </h1>
      </div>

      <div className="h-screen gap-24 bg-black flex flex-col-reverse items-center justify-center md:h-96 lg:flex-row lg:gap-6">
        <motion.div
          key={selected.id}
          className="flex-2 w-full p-6 lg:w-1/2 bg-white h-full content-center lg:p-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div className="text-xl w-full text-center lg:text-left md:text-2xl lg:text-3xl">
            {selected.content}
          </motion.div>
        </motion.div>

        <div className="w-full p-6 lg:w-1/2 flex flex-col gap-2 lg:gap-8 lg:p-12">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`text-2xl lg:text-4xl transition-all duration-300 ${
                selected.id === item.id
                  ? "text-black bg-gold md:px-4 md:py-2 rounded-xl shadow-lg"
                  : "text-gray hover:text-white"
              }`}
            >
              {item.title}.
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Browsedes;

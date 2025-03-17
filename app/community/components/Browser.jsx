"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Gestión de redes sociales",
    content:
      "Diseño web bien estructurado hace que la navegación sea intuitiva, mejorando la satisfacción del usuario y aumentando el tiempo de permanencia en la página.",
    incluye: [
      "Estrategia de contenido",
      "Monitoreo de redes",
      "Análisis de datos",
    ],
  },
  {
    id: 2,
    title: "Contenido",
    content:
      "En un e-commerce, un diseño atractivo y funcional puede aumentar las conversiones, ya que facilita la compra y genera confianza.",
    incluye: ["Creación de posts", "Diseño gráfico", "Edición de videos"],
  },
  {
    id: 3,
    title: "Moderación",
    content:
      "Google premia los sitios bien diseñados con buena velocidad, estructura optimizada y experiencia de usuario, lo que mejora el posicionamiento en buscadores.",
    incluye: [
      "Gestión de comentarios",
      "Filtrado de mensajes",
      "Atención al cliente",
    ],
  },
  {
    id: 4,
    title: "Adds Meta",
    content:
      "Un diseño coherente con tu branding (colores, tipografía, imágenes) ayuda a que los usuarios te reconozcan y confíen más en tu marca.",
    incluye: [
      "Diseñar contenido",
      "Segmentación de audiencia",
      "Análisis de rendimiento",
    ],
  },
  {
    id: 5,
    title: "Landing Page",
    content:
      "Un sitio bien diseñado destaca y transmite profesionalismo, lo que te ayuda a sobresalir en un mercado competitivo.",
    incluye: ["Diseño UX/UI", "Optimización SEO", "Integración con CRM"],
  },
  {
    id: 6,
    title: "Copywriting",
    content:
      "Un sitio bien diseñado destaca y transmite profesionalismo, lo que te ayuda a sobresalir en un mercado competitivo.",
    incluye: ["Redacción persuasiva", "Storytelling", "SEO copywriting"],
  },
];

const Browser = () => {
  const [selected, setSelected] = useState(items[0]);
  return (
    <section className="content-center justify-center space-y-5 xl:space-y-20  p-6 lg:p-12 xl:max-h-screen ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-bold sm:text-4xl xl:text-left lg:text-5xl ">
          ¡El puente entre la marca y la audiencia incluye!
        </h1>
      </div>

      <div className="gap-24 flex flex-col items-center justify-center p-6  lg:flex-row xl:p-12 lg:gap-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`text-2xl lg:text-3xl xl:text-4xl transition-all duration-300 ${
                selected.id === item.id
                  ? "text-black bg-gold md:px-4 md:py-2 rounded-xl shadow-lg"
                  : "text-gray hover:text-white"
              }`}
            >
              {item.title}.
            </button>
          ))}
        </div>

        <motion.div
          key={selected.id}
          className="flex-2 w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-full space-y-10">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl text-gold">{selected.title}</h1>
              <p className="text-lg md:text-xl text-black">{selected.content}</p>
            </div>

            {selected.incluye && selected.incluye.length > 0 && (
              <div className="border-l-4 pl-4">
                <h1 className="w-28 md:w-32 text-3xl md:text-4xl bg-gold px-2 py-2 rounded-xl">
                  Incluye:
                </h1>
                <ul className="list-disc pl-6 mt-2 text-lg text-black">
                  {selected.incluye.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Browser;

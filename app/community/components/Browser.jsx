"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Gestión de redes sociales",
    content:
      "Optimizamos la presencia digital de tu marca con una gestión estratégica de redes sociales. Desde la planificación de contenido hasta la creación de un cronograma mensual de publicaciones, nos aseguramos de que tu mensaje llegue a la audiencia correcta en el momento ideal.",
    incluye: [
      "Planificador de contenido.",
      "Cronograma  mensual de publicaciones.",
      "Reporte de análisis y estadísticas.",
    ],
  },
  {
    id: 2,
    title: "Contenido",
    content:
      "Optimizamos el contenido visualmente atractivo que impulsa tu marca. Utilizando herramientas tecnológicas para llegar a su audiencia. Creando contenido estratégico efectivo para conectar con tu audiencia y generar resultados. ",
    incluye: [
      "Diseñar contenido.",
      "Composición visual.",
      "Creación de estrategia de contenido.",
      "Edición de contenido.",
    ],
  },
  {
    id: 3,
    title: "Moderación",
    content:
      " Gestionamos la interacción de tu marca con su comunidad, asegurando respuestas oportunas y creando conexiones auténticas. ",
    incluye: [
      "Interacción con comunidad.",
      "Programación de publicaciones.",
      "Composición visual.",
    ],
  },
  {
    id: 4,
    title: "Ads en Meta",
    content:
      "Garantizamos el alcance de tu negocio con campañas estratégicas en Meta. Diseñamos anuncios efectivos para generar tráfico, atraer leads y aumentar la interacción a través de campañas de mensajes.",
    incluye: [
      "Campañas de mensajes.",
      "Campañas de tráfico",
      "Generación de leads.",
      "Análisis y estadísticas de audiencia.",
    ],
  },
  {
    id: 5,
    title: "Landing Page",
    content:
      "Diseñamos Landing Pages con ayuda de nuestro servicio Website Development, creando páginas optimizadas para convertir visitantes en clientes. Desarrollamos una estrategia de ventas basada en un análisis de mercado detallado, combinando un diseño web atractivo y funcional.",
    incluye: [
      "Estrategia de ventas para la página web.",
      "Análisis de mercado.",
      "Diseño de página web.",
      "E-Commerce | Portafolio | blog",
    ],
  },
  {
    id: 6,
    title: "Copywriting",
    content:
      "Transformamos ideas en palabras que conectan y convierten. Creando estrategias de escritura persuasiva para las publicaciones y redactamos objetivos, asegurando que cada palabra impulse tu crecimiento.",
    incluye: [
      "Estrategias de escritura para las publicaciones.",
      "Escritura de objetivos.",
    ],
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
              <h1 className="text-4xl md:text-5xl text-gold">
                {selected.title}
              </h1>
              <p className="text-lg md:text-xl text-black">
                {selected.content}
              </p>
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Mayor Personalización",
    content:
      "Cuando programas desde cero, tienes control total sobre el diseño, la funcionalidad y la experiencia del usuario, sin limitaciones impuestas por plantillas predefinidas.",
  },
  {
    id: 2,
    title: "Mejor Rendimiento y Velocidad",
    content:
      "Las páginas hechas con código suelen ser más rápidas y ligeras, ya que puedes optimizar el código y evitar el exceso de scripts o plugins innecesarios.",
  },
  {
    id: 3,
    title: "Mayor Seguridad",
    content:
      "Los sitios creados con código propio son menos vulnerables a ataques comunes en plataformas populares, como los exploits en WordPress o Joomla.",
  },
  {
    id: 4,
    title: "Escalabilidad y Flexibilidad",
    content:
      "Si necesitas agregar nuevas funcionalidades, puedes hacerlo sin depender de plugins o actualizaciones de terceros, permitiendo que tu web crezca de manera eficiente.",
  },
  {
    id: 5,
    title: "Idependencia de Terceros.",
    content:
      "No dependes de plataformas de terceros que pueden cambiar sus políticas, cerrar servicios o limitar funciones a menos que pagues suscripciones.",
  },
];

const Browsedev = () => {
  const [selected, setSelected] = useState(items[0]);
  return (
    <section>
      <div className="flex flex-col h-44 px-5 bg-white justify-center items-center space-y-5 md:px-20 md:h-56">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-gray">
          ¿Por qué tener
        </h1>
        <h1 className="text-3xl sm:text-5xl lg:text-7xl">
          un website en código?
        </h1>
      </div>
      <div className="h-screen gap-24 bg-black flex flex-col items-center justify-center  md:h-96 lg:flex-row lg:gap-6">
        <div className="w-full p-6 lg:w-1/2 flex flex-col gap-2 lg:gap-8 lg:p-12 ">
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
        <motion.div
          key={selected.id}
          className="flex-2 p-6 w-full h-full content-center lg:w-1/2 lg:p-12 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div className="text-xl text-whitelight w-full  text-center lg:text-left md:text-2xl lg:text-3xl">
            {selected.content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Browsedev;

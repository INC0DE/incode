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
      <div className="flex flex-col h-44 md:h-56 bg-whitelight justify-center items-center space-y-5">
        <h1 className="text-2xl sm:text-5xl lg:text-7xl text-gray lg:mr-32">
          ¿Por que tener
        </h1>
        <h1 className="text-3xl sm:text-3xl lg:text-5xl lg:ml-32">
          una website en codigo ?
        </h1>
      </div>
      <div className="h-screen gap-24 bg-black flex flex-col items-center justify-center p-6 md:h-96 lg:flex-row  lg:p-12 lg:gap-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-8">
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
          className="flex-2 w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div className="text-xl w-full h-full text-white text-center md:text-left md:text-2xl lg:text-3xl">
            {selected.content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Browsedev;

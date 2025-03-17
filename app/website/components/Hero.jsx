"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [binaryNumbers, setBinaryNumbers] = useState([]);

  useEffect(() => {
    const generateRow = () =>
      Array.from({ length: 58 }, () => `${Math.random() < 0.5 ? 0 : 1}`).join(" ");
    const numbers = Array.from({ length: 57 }, generateRow);
    setBinaryNumbers(numbers);
  }, []);

  return (
    <div className="relative flex flex-col bg-whitelight p-5 items-center justify-between w-full h-screen md:px-16 md:flex-row">
      <div className="flex h-full flex-col justify-center lg:h-full">
        <h1 className="text-6xl lg:text-7xl font-light ">
          Desarrollo <span className="font-bold ml-10 xl:ml-0">Web.</span>
        </h1>
        <p className="text-3xl ml-32 text-gold mt-2 xl:ml-8">Servicio.</p>
      </div>

      <div className="w-full h-full relative flex justify-end items-center overflow-hidden md:w-1/2">
        <div className="relative w-[100%] h-full overflow-hidden">
          <motion.div
            className="absolute w-full text-xl font-mono leading-2"
            initial={{ y: 0 }}
            animate={{ y: [-600, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {binaryNumbers.concat(binaryNumbers).map((num, i) => (
              <div
                key={i}
                className={`text-${
                  i % 2 === 0 ? "gold" : "black"
                } text-left`}
              >
                {num}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

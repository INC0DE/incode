import React from "react";
import Image from "next/image";
import { add, webdev } from "@/public/assets";
const Webdev = () => {
  return (
    <section className="border-t-2">
      <div className="flex flex-col h-52 justify-center items-center space-x-4 lg:flex-row">
        <h1 className="text-6xl lg:text-7xl font-bold">Desarrollo</h1>
        <h1 className="text-6xl lg:text-7xl">Web.</h1>
      </div>
      <div className="">
        <Image src={webdev} alt="webdev" />
      </div>
    </section>
  );
};

export default Webdev;

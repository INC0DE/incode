import React from "react";
import Image from "next/image";

const Webdev = () => {
  return (
    <section className="border-t-2">
      <div className="flex flex-col h-52 justify-center items-center space-x-4 lg:flex-row">
        <h1 className="text-6xl lg:text-7xl font-bold">Desarrollo</h1>
        <h1 className="text-6xl lg:text-7xl">Web.</h1>
      </div>
      <div className="">
        <Image src="/assets/webdev.jpeg" alt="webdev" width={2000} height={1000} />
      </div>
    </section>
  );
};

export default Webdev;

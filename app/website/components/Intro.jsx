import Image from "next/image";
import { pagedesk } from "@/public/assets";

const Intro = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="space-y-20 px-10 py-20 lg:w-3/5 ">
        <div className="content-center justify-items-end">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold lg:mr-3">¡Una web profesional</h1>
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-gold ">más clientes,</h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gold ">más crecimiento!</h1>
        </div>
        <div className="lg:w-80 lg:ml-10">
          <p className="text-2xl text-gray">
            Creamos páginas web optimizadas para dar a conocer la marca y poder
            vender tu producto de la manera más accesible y efectiva.
          </p>
        </div>
      </div>
      <div className="aboslute content-end justify-items-end  lg:w-2/5 ">
        <Image alt="page" src={pagedesk} width={1000} height={1000}/>
      </div>
    </section>
  );
};

export default Intro;

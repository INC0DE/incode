import Image from "next/image";

const Intro = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="space-y-10 px-5 py-20 lg:w-3/5 lg:px-10 sm:space-y-20 ">
        <div className="content-center sm:justify-items-end">
          <h1 className="text-4xl  md:text-6xl lg:text-7xl font-bold lg:mr-3">
            ¡Una web profesional
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-gold ">
            más clientes,
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gold ">
            más crecimiento!
          </h1>
        </div>
        <div className="lg:w-80 lg:ml-10">
          <p className="text-2xl text-gray">
            Creamos páginas web optimizadas para dar a conocer tu marca y poder
            vender tus productos de la manera más accesible y efectiva.
          </p>
        </div>
      </div>
      <div className="aboslute content-end justify-items-end  lg:w-2/5 ">
        <Image
          alt="page"
          src="/assets/pagesdesk.png"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Intro;

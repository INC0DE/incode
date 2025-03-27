import Image from "next/image";

const Intro = () => {
  return (
    <div>
      <section className="lg:h-96 flex flex-col-reverse lg:flex-row">
        <div className="w-full pl-32 justify-center content-end lg:pl-0 lg:w-2/5">
          <Image src="/assets/handphone.png" alt="Hand" width={500} height={1000} />
        </div>
        <div className="space-y-10 content-center p-5 lg:w-3/5 lg:p-0 lg:py-20 lg:space-y-20 ">
          <div className="content-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gray font-bold mr-3"> ¡Haz que tu</h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl"> negocio destaque!</h1>
          </div>
          <div className="xl:w-[800px] ml-10">
            <p className="text-xl md:text-2xl">
              Nos encargamos de gestionar las redes sociales de tu negocio,
              potenciando tu marca con marketing y branding digital estratégico,
              para generar interacción, conexión y confianza con tu audiencia.
            </p>
          </div>
        </div>
      </section>

      <section className="h-72 flex flex-col bg-black justify-center items-center space-y-5 xl:px-5 lg:flex-row lg:items-center">
        <h1 className="text-3xl text-gold font-bold sm:text-5xl md:text-5xl xl:text-6xl lg:w-1/2">¿Qué hacemos por ti?</h1>
        <p className="text-xl lg:w-1/2 text-white text-center md:text-2xl lg:text-left">
          Nuestra responsabilidad está en crear, planificar y publicar
          contenido, manteniendo una presencia activa en las plataformas
          digitales.{" "}
        </p>
      </section>
    </div>
  );
};

export default Intro;

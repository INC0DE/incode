import Image from "next/image";

const Intro = () => {
  return (
    <section className="min-h-screen relative flex flex-col-reverse p-5 lg:flex-row lg:h-80 md:px-8 md:p-0 md:pt-5">
      <div className="flex w-full items-end lg:w-1/2 xl:w-2/5">
        <Image src="/assets/tablet.png" alt="Mockup" width={800} height={800} unoptimized={true}/>
      </div>

      <div className="w-full space-y-8 content-center lg:w-1/2 xl:w-3/5">
        <div>
          <h1 className="text-5xl sm:text-7xl xl:text-8xl text-black">Tu página web</h1>
          <h1 className="text-3xl text-center text-gold sm:text-6xl xl:text-7xl  xl:ml-10">con community manager.</h1>
        </div>

        <div className="space-y-5 justify-self-center xl:w-[700px] md:ml-14">
          <p className="text-gray text-xl xl:text-2xl leading-relaxed">
            Especialistas en potenciar el marketing digital de tu marca, creando
            su página web para el desarrollo de un buen community manager.
          </p>
          <p className="text-gray text-lg xl:text-2xl leading-relaxed ">
            Nuestra propuesta asegura impulsar tus valores y la conexión con
            audiencia, posicionando profesionalmente a tu negocio en lo alto del
            sector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

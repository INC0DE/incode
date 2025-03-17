import { Card, CardBody } from "@heroui/card";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Productor",
    subtitle: "Audiovisual",
    content:
      " Integramos los elementos y estrategias visuales, audios, textos, guiones para crear piezas audiovisuales completas. Buscandocaptar la atención, transmitir mensaje de marca e impulsar la interacción, según tendencias y estrategias específicas.",
  },
  {
    id: 2,
    title: "Creador",
    subtitle: "Audiovisual",
    content:
      "Como creador digital audiovisual y fotográfico nos especializamos en capturar grabar, editar y montar videos, crea animaciones y añade efectos especiales. Aseguramos coherencia con la marca y buscamos maximizar la interacción e impacto visual en el público.",
  },
  {
    id: 3,
    title: "Diseño",
    subtitle: "Digital",
    content:
      " Como diseñador grafico digital, elaboramos imágenes, logotipos, ilustraciones, tipografías y otros elementos visuales para generar la identidad visual del proyecto. Nos encargamos de adaptar las tendencias y características de cada plataforma. Instagram, Facebook, etc. ",
  },
];

const Services = () => {
  return (
    <section
      id="introduction"
      className="flex flex-col bg-black lg:flex-row w-full min-h-screen"
    >
      <div className="px-5 pt-5 justify-items-center lg:w-1/2 lg:pt-10 xl:px-0 ">
        <div className="">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white">Hacemos contenido</h1>
          <h1 className="text-5xl  md:text-6xl lg:text-7xl text-white font-bold">de alto valor.</h1>
          <p className="text-center text-lg mt-5 text-gold lg:text-left">
            ¡Inspiramos a tu audiencia con productos de fotografía y video
            original!
          </p>
        </div>

        <div className="content-end">
          <Image src="/assets/tablet.png" alt="image" width={1000} height={1000} />
        </div>
      </div>

      <div className="justify-items-center content-center lg:w-1/2 ">
        <div className="space-y-10 max-h-[100vh] overflow-y-auto scroll-smooth scrollbar-hide md:space-y-12">
          {items.map((item) => (
            <Card key={item.id} className="w-64 h-52 mt-10 p-4 items-center md:w-80 md:h-64">
              <CardBody>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl text-gray">{item.title}</h1>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl ">{item.subtitle}</h1>
                <p className="text-md md:text-xl text-gray mt-4">{item.content}</p>
              </CardBody>
            </Card>
          ))}
          ƒƒ
        </div>
      </div>
    </section>
  );
};

export default Services;

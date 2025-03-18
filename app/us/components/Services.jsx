import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";

const Services = () => {
  return (
    <section>
      <div className="flex flex-col h-56 bg-whitelight justify-center items-center space-y-5 p-5">
        <h1 className="text-4xl  sm:text-7xl">Servicio</h1>
        <h1 className="text-lg text-center sm:text-xl sm:text-left text-gray">
          Agencia especializada en marketing digital. 
        </h1>
      </div>

      <div className="flex flex-col items-center px-10 lg:flex-row lg:h-96 lg:py-10">
        <div className="p-5 lg:w-1/2 lg:px-1 ">
          <div className="flex flex-row space-x-5 lg:space-x-10 ">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-7xl  text-gray">
                Desarrollo
              </h1>
              <h1 className="text-3xl md:text-6xl  font-bold">
                Web.
              </h1>
            </div>
            <div className="self-center">
              <Button as={Link} className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg" color="primary" href="/website">
                Ver más.
              </Button>
            </div>
          </div>

          <div className="justify-self-end">
            <Image src="/assets/deskdev.png" alt="computer" width={600} height={600} />
          </div>
        </div>

        <div className="w-full h-0 border-1 border-black lg:h-full lg:w-0"></div>

        <div className="p-5 lg:w-1/2 lg:px-1 lg:ml-10">
          <div className="flex flex-row space-x-5 xl:space-x-10">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-6xl text-gray">
                Community
              </h1>
              <h1 className="text-3xl md:text-6xl font-bold">
                Manager.
              </h1>
            </div>
            <div className="self-center">
              <Button as={Link} className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg" color="primary" href="/community">
                Ver más.
              </Button>
            </div>
          </div>

          <div className="justify-self-end">
            <Image src="/assets/phonemark.png" alt="computer" width={600} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

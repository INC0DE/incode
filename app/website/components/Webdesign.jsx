import Image from "next/image";
import { design } from "@/public/assets";

const Webdesign = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex flex-row h-40 justify-center items-center space-x-4 md:flex-col md:self-center lg:flex-row  xl:pl-5 md:h-0 md:w-1/3 ">
        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold">Diseño</h1>
        <h1 className="text-5xl sm:text-6xl xl:text-7xl">Web.</h1>
      </div>

      <div className="md:w-2/3">
        <Image src={design} alt="design" />
      </div>
    </section>
  );
};

export default Webdesign;

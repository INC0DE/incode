import { motion } from "framer-motion";
import { Card } from "@heroui/card";
import FormAll from "../../components/form";

const Contactweb = () => {
  return (
    <div className="min-h-screen p-10">
      <div className="flex flex-col items-center h-52">
        <h1 className="text-4xl text-gray">¿Quieres tu</h1>
        <h1 className="text-4xl md:text-7xl">página personalizada?</h1>
      </div>

      <div className="flex justify-center">
        <Card className="flex items-center w-64 h-72 p-10 sm:w-80">
          <FormAll />
        </Card>
      </div>
    </div>
  );
};

export default Contactweb;

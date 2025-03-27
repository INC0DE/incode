import { motion } from "framer-motion";
import { Card } from "@heroui/card";
import FormAll from "../../components/form";

const Contact = () => {
  return (
    <div className="min-h-screen p-10 bg-white">
      <div className="flex flex-col items-center justify-center h-52">
        <h1 className="text-4xl text-gray">¡Cotiza tu</h1>
        <h1 className="text-4xl md:text-7xl">paquete ideal!</h1>
      </div>

      <div className="flex justify-center">
        <Card className="flex items-center w-64 h-72 p-10 sm:w-80">
          <FormAll />
        </Card>
      </div>
    </div>
  );
};

export default Contact;

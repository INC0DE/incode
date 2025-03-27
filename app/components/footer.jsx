import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full h-60  justify-around items-center border-t-2 border-black rounded-xl p-6 bg-whitelight">
      {/* Logo o Nombre */}
      <div>
        <h1 className="text-2xl">INCODE</h1>
      </div>

      {/* Derechos Reservados */}
      <div className="text-center">
        <h1 className="text-xl text-gray ">
          © 2025. All rights reserved. <br /> Philippians 4:13.
        </h1>
      </div>

      {/* Redes Sociales */}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-2">Redes</h1>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61566862540608&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-black text-2xl hover:text-blue transition" />
          </a>
          <a
            href="https://www.instagram.com/incodeweb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-black text-2xl hover:text-pink transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

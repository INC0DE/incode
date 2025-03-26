import React from "react";
import Hero from "./components/Hero";
import Intro from "../website/components/Intro";
import Videodev from "./components/Video";
import Webdesign from "./components/Webdesign";
import Browsedes from "./components/Browsedes";
import Addesign from "./components/Addesign";
import Webdev from "./components/Webdev";
import Browsedev from "./components/Browsedev";
import Examplesweb from "./components/Examplesweb";
import Contactweb from "./components/Contactweb";
import Proyects from "./components/Proyects";

const PageWebsite = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Intro />
      <Videodev />
      <Webdesign />
      <Browsedes />
      <Addesign />
      <Examplesweb />
      <Webdev />
      <Browsedev />
      <Proyects />
      <Contactweb />
    </div>
  );
};

export default PageWebsite;

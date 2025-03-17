import Hero from "./us/components/Hero";
import Intro from "./us/components/Intro";
import VideoLoop from "./us/components/video";
import Services from "./us/components/Services";

const page = () => {
  return (
    <div  className="overflow-hidden ">
      <Hero />
      <Intro />
      <VideoLoop />
      <Services />
    </div>
  );
};

export default page;

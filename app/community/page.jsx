import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Browser from "./components/Browser";
import Video from "./components/Video";
import Services from "./components/Services";
import Strategy from "./components/Strategy";
import Contact from "./components/Contact";

const PageCommunity = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Intro />
      <Browser />
      <Video />
      <Services />
      <Strategy />
      <Contact />
    </div>
  );
};

export default PageCommunity;

import ButtonGradient from "./assets/svg/ButtonGradient";
import Whytech from "./components/Whytech";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Whoare from "./components/Whoare";
import Coming from "./components/Comingsoon";
import Description from "./components/Description";
import Infoplans from "./components/Infoplans";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Whoare />
        <Description />
        <Technologies />
        <Whytech />
        <Pricing />
        <Infoplans />
        <Portfolio />
        <Coming />
        <Footer />
      </div>


    </>
  );
};

export default App;

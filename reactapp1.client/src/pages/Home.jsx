import PicCarousel from "../componentsJSX/PicCarousel";
import Filterbar from "../componentsJSX/Filterbar";
import PromotionSection from "../componentsJSX/PromotionSection";
import Rank from "../componentsJSX/Rank";
import Area from "../componentsJSX/Area";
import Bot from "../componentsJSX/bot";
import Weather from "../componentsJSX/Weather";


const Home = () => {
  // const islogin=true;
  return (
    <>
      {/* {islogin&&()} */}
      <PicCarousel />
      <Filterbar />
      <PromotionSection />
      <Rank />
          <Area />
          <Bot />
          <Weather />
    </>
  );
};

export default Home;

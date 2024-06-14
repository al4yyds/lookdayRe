import PicCarousel from "../componentsJSX/PicCarousel";
import Filterbar from "../componentsJSX/Filterbar";
import PromotionSection from "../componentsJSX/PromotionSection";
import Rank from "../componentsJSX/Rank";
import Area from "../componentsJSX/Area";
import Redeye from "../componentsJSX/Redeye";
import Loader from "../componentsJSX/Loader";
import Weather from "../componentsJSX/Weather";
import Bot from "../componentsJSX/Bot";


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
      <Redeye/>
    </>
  );
};

export default Home;

import PicCarousel from "../componentsJSX/PicCarousel"
import Filterbar from "../componentsJSX/Filterbar"
import PromotionSection from "../componentsJSX/PromotionSection"
import Rank from "../componentsJSX/Rank"
import Footer from "../componentsJSX/Footer"

const Home = () => {
  return (
    <>
        <PicCarousel />
        <Filterbar />
        <PromotionSection />
        <Rank />
        <Footer />
    </>

  )
}

export default Home
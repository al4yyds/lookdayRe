import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PicCarousel.scss";

// 引入本地圖片
import ad1 from "../assets/images/adHome/ad1.jpg";
import ad2 from "../assets/images/adHome/ad2.jpg";
import ad3 from "../assets/images/adHome/ad3.jpg";
import ad4 from "../assets/images/adHome/ad4.jpg";
import ad5 from "../assets/images/adHome/ad5.jpg";
import ad6 from "../assets/images/adHome/ad6.jpg";
import ad7 from "../assets/images/adHome/ad7.jpg";
import ad8 from "../assets/images/adHome/ad8.jpg";
import ad9 from "../assets/images/adHome/ad9.jpg";
import ad10 from "../assets/images/adHome/ad10.jpg";

const PicCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={ad1} alt="Ad 1" />
        </div>
        <div className="carousel-slide">
          <img src={ad2} alt="Ad 2" />
        </div>
        <div className="carousel-slide">
          <img src={ad3} alt="Ad 3" />
        </div>
        <div className="carousel-slide">
          <img src={ad4} alt="Ad 4" />
        </div>
        <div className="carousel-slide">
          <img src={ad5} alt="Ad 5" />
        </div>
        <div className="carousel-slide">
          <img src={ad6} alt="Ad 6" />
        </div>
        <div className="carousel-slide">
          <img src={ad7} alt="Ad 7" />
        </div>
        <div className="carousel-slide">
          <img src={ad8} alt="Ad 8" />
        </div>
        <div className="carousel-slide">
          <img src={ad9} alt="Ad 9" />
        </div>
        <div className="carousel-slide">
          <img src={ad10} alt="Ad 10" />
        </div>
      </Slider>
    </div>
  );
};

const SampleNextArrow = ({ onClick }) => {
  return (
    <div
      className="custom-arrow custom-next"
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
      </svg>
    </div>
  );
};

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="custom-arrow custom-prev"
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24">
        <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
      </svg>
    </div>
  );
};

export default PicCarousel;

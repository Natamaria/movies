import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

function Carousel({ children }) {
  const settings = {
    dots: false,
    Infinity: false, // true
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    // sliesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-wrapper">
      <slider {...settings}>{children}</slider>
    </div>
  );
}

export default Carousel;

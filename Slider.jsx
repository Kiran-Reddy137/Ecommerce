import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

const CustomSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed in milliseconds
  };

  return (
    <Slider ref={sliderRef} {...sliderSettings} className="custom-slider">
      <div>
        <img
          className="banner-img"
          src="/images/LiveCarousel.jpg"
          alt="Slide 1"
          style={{ height: 550 }} />
      </div>
      <div>
        <img
          className="banner-img"
          src="/images/LiveCarousel1.gif"
          alt="Slide 2"
          style={{ height: 550 }} />
      </div>
      <div>
        <img
          className="banner-img"
          src="/images/LiveCarousel2.jpg"
          alt="Slide 3"
          style={{ height: 550 }} />
      </div>
      <div>
        <img
          className="banner-img"
          src="/images/LiveCarouselLaptop.jpg"
          alt="Slide 4"
          style={{ height: 550 }} />
      </div>
      
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default CustomSlider;

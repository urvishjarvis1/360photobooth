import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import myImg from "../../Assets/avatar/product.png";
import myImg2 from "../../Assets/avatar/360.jpeg";
import myImg3 from "../../Assets/avatar/360-2.jpg";

const slideImages = [
  { img: myImg, alt: "360 photo booth setup" },
  { img: myImg2, alt: "Guests using the 360 photo booth" },
  { img: myImg3, alt: "360 photo booth in action" },
];

function Slides() {
  return (
    <div className="slide-container">
      <Slide
        indicators
        arrows
        autoplay
        duration={5000}
        transitionDuration={600}
        infinite
        canSwipe
        pauseOnHover
      >
        {slideImages.map((slide, index) => (
          <div key={index} className="each-slide">
            <div className="slide-item">
              <img src={slide.img} className="slide-image" alt={slide.alt} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slides;

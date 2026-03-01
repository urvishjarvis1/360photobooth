import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import myImg from "../../Assets/avatar/product.png";
import myImg2 from "../../Assets/avatar/360.jpeg";
import myImg3 from "../../Assets/avatar/360-2.tiff";
function Slides() {
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px',
    width: '600px',
    accessibility: false,
  }
  const slideImages = [
    {
      img: myImg,
      caption: 'Slide 1'
    },
    {
      img: myImg2,
      caption: 'Slide 2'
    },
    {
      img: myImg3,
      caption: 'Slide 3'
    },
  ];
  return (

    <div className="slide-container" >

      <Slide indicators={true} arrows={false} autoplay={true} duration={1700} transitionDuration={1000} infinite={true} indicators={true} >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            < img src={slideImage.img} style={divStyle} className="img-fluid" alt="avatar" ></img>
          </div>
        ))
        }
      </Slide >
    </div >
  )
};



export default Slides;

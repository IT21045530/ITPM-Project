import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../Styles/Slider.css'



const fadeImages = [
  {
  url: 'SW1.jpg',
  caption: 'First Slide'
  },
  {
  url: 'SW2.jpg',
  caption: 'Second Slide'
  },
  {
  url: 'ThankYou.png',
  caption: 'Third Slide'
  }
];

const properties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const AdSlideShow = () => {
  return (
    <div className = "slideMain">
      <center>
        <div className="slide-container" style={{height:"50%",borderRadius:"10px",marginTop:'1px'}}>
          <Fade {...properties}>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index} >
                <div className="image-container">
                  <img src = {require(`../Images/${fadeImage.url}`)} width='50%' height='50%' style={{marginTop:'20px', borderRadius:"10px"}}/>
                </div>
                <div style={{padding:'5px'}}>
                  <h3>{fadeImage.caption}</h3>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </center>
    </div>
  )
}

export default AdSlideShow
   


   


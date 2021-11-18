import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";

/* eslint-disable */

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideDuration = 800000;
  var interval;
  var timeout;
  var time = new Date();
  var remainingTime = slideDuration;
  var animationDelaySet = false;

  useEffect(() => {
    interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      time = new Date();
      remainingTime = slideDuration;
    }, slideDuration);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  function pauseTransition() {
    clearInterval(interval);
    clearTimeout(timeout);
    
    //Get the elapsed time since setting time
    var elapsedTime = (new Date()).getTime() - time.getTime();
    console.log("elapsedTime: " + elapsedTime);

    //Remove elapsed time from remaining time
    remainingTime = remainingTime > elapsedTime ? remainingTime - elapsedTime : 1;
    console.log("remainingTime: " + remainingTime);
  }

  function resumeInterval() {
    time = new Date();
    timeout = setTimeout(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, remainingTime);
  }

  return (
    <div onMouseEnter={pauseTransition} onMouseLeave={resumeInterval} className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() => {
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
          if(animationDelaySet === false){
            document.documentElement.style.setProperty('--slideContentDelay', '0.8s')
            animationDelaySet = true;
          };
        }
        }
        nextSlide={() => {
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
          if(animationDelaySet === false){
            document.documentElement.style.setProperty('--slideContentDelay', '0.8s')
            animationDelaySet = true;
          };
        }
        }
      />
      {/* <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      /> */}
    </div>
  );
}

export default Slider;

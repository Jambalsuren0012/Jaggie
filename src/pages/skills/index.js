import styles from "./style.module.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className="{styles.Container}">        
        <Slider {...settings}>
         
  

          
        </Slider>
      </div>
    );
  };
};
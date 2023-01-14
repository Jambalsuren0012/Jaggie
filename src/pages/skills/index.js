
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
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="{styles.Container}">
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <h3><img src="https://images.unsplash.com/photo-1673566392187-6d0585f2e56d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></h3>
          </div>
          <div>
            <h3><img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></h3>
          </div>
          <div>
            <h3><img src="https://images.unsplash.com/photo-1673631038927-ca2e6f6cadca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" /></h3>
          </div>
          <div>
            <h3><img src="https://images.unsplash.com/photo-1671726805228-dc54c08408ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" /></h3>
          </div>
          <div>
            <h3><img src="https://images.unsplash.com/photo-1673708242378-fa867a0a285d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" /></h3>
          </div>
          <div>
            <h3><img src="https://images.unsplash.com/photo-1671726203389-d50b6239d3c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
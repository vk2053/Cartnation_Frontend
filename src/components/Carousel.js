import React from 'react';
import {Carousel} from 'react-bootstrap';
import image1 from './../assests/images/laptop.jpeg'
import image2 from './../assests/images/t-shirt.jpeg'
import './../App.css'

const Carouselcomp = () => {
   return(
    <Carousel>
    <Carousel.Item>
      <img
        className="uiop"
        src={image1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Laptops Deals</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="uiop"
        src={image2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Clothes Deals</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="uiop"
        src={image2}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Clothes Deals</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
   )
}

export default Carouselcomp;
import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel className='slides'>
      <Carousel.Item interval={1000}>
        <img
          className='d-block'
          src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1603579432/walter-otto-PT70CT6mATQ-unsplash_ohawmc.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className='d-block w-100 img-fluid'
          src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1603580054/artur-tumasjan-qLzWvcQq-V8-unsplash_zflx8z.jpg'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1603581952/pexels-tima-miroshnichenko-5452209_ak1i97.jpg'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

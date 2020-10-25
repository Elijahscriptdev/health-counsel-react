import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Testimonial.css";
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {
  return (
    <div className='mb-5'>
      <Container>
        <h2>What patients say about us ...</h2>
        <Row>
          <Col xs={12} md={4} className='my-3'>
            <div className='testimonial'>
              <div className='name my-2'>John Waddrob</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                repellat aspernatur temporibus assumenda sint odio minima.
                Voluptate alias possimus aspernatur voluptates excepturi placeat
                iusto cupiditate.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} className='my-3'>
            <div className='testimonial'>
              <div className='name my-2'>John Waddrob</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                repellat aspernatur temporibus assumenda sint odio minima.
                Voluptate alias possimus aspernatur voluptates excepturi placeat
                iusto cupiditate.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} className='my-3'>
            <div className='testimonial'>
              <div className='name my-2'>John Waddrob</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                repellat aspernatur temporibus assumenda sint odio minima.
                Voluptate alias possimus aspernatur voluptates excepturi placeat
                iusto cupiditate.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;

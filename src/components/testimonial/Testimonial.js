import React from "react";
import { Col, Row, Container } from "react-bootstrap";
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {
  return (
    <div>
        <Container>
        <h2>What patients say about us</h2>
      <Row>
        <Col xs={12} md={4}>
          <div class='testimonial'>
            {/* <img src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
            <div class='name'>John Waddrob</div>
            <div class='stars'>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellat aspernatur temporibus assumenda sint odio minima.
              Voluptate alias possimus aspernatur voluptates excepturi placeat
              iusto cupiditate.
            </p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div class='testimonial'>
            {/* <img src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
            <div class='name'>John Waddrob</div>
            <div class='stars'>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellat aspernatur temporibus assumenda sint odio minima.
              Voluptate alias possimus aspernatur voluptates excepturi placeat
              iusto cupiditate.
            </p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div class='testimonial'>
            {/* <img src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
            <div class='name'>John Waddrob</div>
            <div class='stars'>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
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

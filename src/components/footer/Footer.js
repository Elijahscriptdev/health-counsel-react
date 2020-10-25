import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col xs={12} md={4} className='text-cente'>
            <h1>Health Counsel</h1>
            <br />
            Spitalstrasse 25, 60030
            <br />
            Lucerne, Switzerland
            <br />
            <br />
            <strong>Tel</strong>:{" "}
            <Link to='tel:+2348062540732' className=''>
              +2348062540732
            </Link>
            <br />
            <strong>Mail</strong>:{" "}
            <Link to='mailto:elijjaaahhhh@gmail.com' className=''>
              elijjaaahhhh@gmail.com
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <h3>Services</h3>
            <ul>
              <li>Patient Care</li>
              <li>Medical Advices</li>
              <li>Check ups</li>
              <li>24/7 Emergency</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3>Useful Links</h3>
            <ul>
              <li>Doctors</li>
              <li>Appointments</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

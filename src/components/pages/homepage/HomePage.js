import React from "react";
import Slider from "./Slider";
import "./HomePage.css";
import { Col, Container, Row, Table, Image } from "react-bootstrap";
import CustomBtn from "../../button/CustomBtn";
import Testimonial from "../../testimonial/Testimonial";

const HomePage = () => {
  return (
    <div className='homepage'>
      <Slider />
      <Container className='mt-5'>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={8}>
            <h2 className='mb-4'>
              Caring for the growing needs of our community.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              accusamus quam ut eos reiciendis doloremque tempore, sunt atque
              ipsum hic nam in optio quas cum neque, eligendi quia? Quia
              delectus enim odio? Recusandae aperiam cumque libero natus neque
              minus, qui aliquid placeat? Quisquam voluptas quis deserunt totam
              consequatur eaque magnam.
            </p>
            <ul className='ml-5'>
              <li>Quidem accusamus quam ut eos reiciendis doloremque</li>
              <li>Quidem accusamus quam ut eos reiciendis doloremque</li>
              <li>Quidem accusamus quam ut eos reiciendis doloremque</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h2>Working Hours</h2>
            <p>We are availble every day of the week</p>
            <Table striped bordered hover size='sm' className='mt-5'>
              <thead>
                <tr>
                  <th>Days</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday-Friday</td>
                  <td>07:00am - 10:00pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>09:00am - 10:00pm</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>12:00pm - 10:00pm</td>
                </tr>
              </tbody>
            </Table>
            <CustomBtn className='btn-app'>Book an Appoiment</CustomBtn>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
          <h2>Doctors</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illum quod commodi doloremque veniam quia corporis 
              magnam molestiae aut unde! Porro.</p>
              <CustomBtn className='btn-doctor'>View more</CustomBtn>
        <Row>
          <Col xs={6} md={3}>
            <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded />
            <h4>Elijah Obominuru</h4>
            <p>Dentist</p>
          </Col>
          <Col xs={6} md={3}>
            <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded />
            <h4>Elijah Obominuru</h4>
            <p>Dentist</p>
          </Col>
          <Col xs={6} md={3}>
            <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded />
            <h4>Elijah Obominuru</h4>
            <p>Dentist</p>
          </Col>
          <Col xs={6} md={3}>
            <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded />
            <h4>Elijah Obominuru</h4>
            <p>Dentist</p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
          <h2>Medical services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illum quod commodi doloremque veniam quia corporis 
              magnam molestiae aut unde! Porro.</p>
        <Row>
          <Col xs={6} md={4}>
            {/* <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded /> */}
            <h4>Patient Care</h4>
            <p>Our helpful staff takes care of each patient offering personal nurse.</p>
          </Col>
          <Col xs={6} md={4}>
            {/* <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded /> */}
            <h4>New Facilities</h4>
            <p>Our clinic is equipped with new high technology facilities.</p>
          </Col>
          <Col xs={6} md={4}>
            {/* <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded /> */}
            <h4>24/7 Emergency</h4>
            <p>We are available for you everyday throughout the year.</p>
          </Col>
          <Col xs={6} md={4}>
            {/* <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded /> */}
            <h4>Medical Advices</h4>
            <p>Need advices for your health, consult any of our doctors by visiting our clinic.</p>
          </Col>
          <Col xs={6} md={4}>
            {/* <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded /> */}
            <h4>Professional Doctors</h4>
            <p>Dentist</p>
          </Col>
          <Col xs={6} md={4}>
            {/* <Image src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg' rounded /> */}
            <h4>Check ups</h4>
            <p>Regular check-ups elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </Col>
        </Row>
      </Container>
      <Testimonial />
    </div>
  );
};

export default HomePage;

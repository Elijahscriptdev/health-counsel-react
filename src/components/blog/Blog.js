import React from "react";
import { CardDeck, Card, Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className='mb-5 blog'>
      <Container>
        <h2 className='mt-3'>News and Events</h2>
        <p className='mt-3'>
          Get the latest information related to our medical centre, company news
          and more.
        </p>
        <CardDeck>
          <Card>
            <Card.Img
              variant='top'
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1603581457/pexels-anna-shvets-3845653_ikthep.jpg'
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant='top'
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1603571201/med_iifel5.jpg'
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant='top'
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1603580930/francisco-venancio-M4Xloxsg0Gw-unsplash_jkgp7t.jpg'
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};

export default Blog;

import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CenteredGrid from "./Product_Management/ViewProducts";

function Blog() {
  return (
    <>
      <Container
        style={{ height: "100%", backgroundColor: "lightgreen", padding: "5%" }}
      >
        <marquee>
          <h1>The Farm of the Future: Sustainable, Efficient, and Smart </h1>
        </marquee>
        <Button href="Blog_Management/Testpage" style={{ padding: "%" }}>
          Blogs
        </Button>
        <br></br>
        <br></br>
        <Button href="/AddBlog">Add Blogs</Button>
        <br></br>
        <br></br>
        <Button href="/TestBlog2">Test Blog</Button>

        {/* this is slider part*/}
        {/* ---------------------------------------------------------------------------------------------- */}
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://nigeriacic.org/wp-content/uploads/2017/07/SA-1000x500-1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                {/*01*/}
                <h3>A Greener Future</h3>
                <p>Sustainable Farming Practices That Work</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.horizonbank.com/images/default-source/advice-images-1000x500/ag_2.jpg?sfvrsn=b0a732d_1"
                alt="Second slide"
              />

              <Carousel.Caption>
                {/*02*/}
                <h3>Precision Farming</h3>
                <p>Growing More with Less</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.daviteq.com/blog/wp-content/uploads/2020/07/SmartAgri.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                {/*03*/}
                <h3>The Future of Farming</h3>
                <p>The Future of Farming is Here: Embrace Smart Agriculture</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://article.murata.com/sites/default/files/styles/medium/public/static/ja-jp/images/article/future-of-smart-agriculture-using-iiot/agriculture-main0001.png?itok=rwLeLvt_"
                alt="Forth slide"
              />
              <Carousel.Caption>
                {" "}
                {/*04*/}
                <h3>Growing Smarter</h3>
                <p>How Our Technology is Changing the Game</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/*strat of bloging part*/}
        {/* ---------------------------------------------------------------------------------------------- */}

        <CardGroup>
          <div style={{ padding: "20px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/english/wall-2018-whatareplantsmp4.transform/content-tile-large/image.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div style={{ padding: "20px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/english/wall-2018-whatareplantsmp4.transform/content-tile-large/image.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Card.Text>

                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div style={{ padding: "20px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/english/wall-2018-whatareplantsmp4.transform/content-tile-large/image.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </CardGroup>
      </Container>
    </>
  );
}

export default Blog;

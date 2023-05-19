import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomeSlider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://euraxess.ec.europa.eu/sites/default/files/news/farm_to_fork_ec.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/*01*/}
            <h3>A Greener Future</h3>
            {/* <p>Sustainable Farming Practices That Work</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.ecmag.com/images/default-source/articles/ea2c730c-275e-4d39-920c-019161533a44.tmb-art-detail.jpeg?sfvrsn=a7d1e2e5_3"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/*02*/}
            <h3>Revolutionizing Agriculture</h3>
            {/* <p>Growing More with Less</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/5e60f802a05fa52749946e5e/1619696819143-EF4KM7XYHST251O4OYST/agriculture-tech.jpg?format=1000w"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/*03*/}
            <h3>Exploring Smart Agriculture</h3>
            {/* <p>The Future of Farming is Here: Embrace Smart Agriculture</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.grantthornton.ie/globalassets/1.-member-firms/ireland/insights/2023/featured-banner/future-of-irish-food-featured-banner.jpg"
            alt="Forth slide"
          />
          <Carousel.Caption>
            {" "}
            {/*04*/}
            <h3>The Benefits of Smart Farming</h3>
            {/* <p>How Our Technology is Changing the Game</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mytechdecisions.com/wp-content/uploads/2019/05/AdobeStock_126414595-1000x500.jpeg"
            alt="Forth slide"
          />
          <Carousel.Caption>
            {" "}
            {/*05*/}
            <h3>Growing Smarter</h3>
            {/* <p>How Our Technology is Changing the Game</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br></br>

      <div>
        <div
          className="text-center"
          style={{
            backgroundColor: "#3cb371",
            paddingTop: "5%",
            paddingBottom: "4%",
          }}
        >
          <h1 className="text-uppercase text-white">
            Introducing Smart Farming
          </h1>
          {/* <span className="text-uppercase" style={{ color: "white" }}>
            HOME / Resource Dashboard
          </span> */}
        </div>
        <div className="container">
          <div
            className="row"
            style={{ paddingTop: "5%", paddingBottom: "5%" }}
          >
            <div className="col">
              <div class="card">
                <div class="card-body text-center">
                  <img
                    src="https://www.avanti-europe.ch/wp-content/uploads/2020/02/QA-service-300x291.png" //                    src="../img/land.png"
                    class="card-img-top"
                    alt="..."
                    style={{ width: "25%" }}
                  />
                  <h2 class="card-title text-uppercase pt-4">Our Services</h2>
                  <p>
                    We offer a comprehensive range of smart farming services
                    that harness cutting-edge technologies to revolutionize
                    agricultural practices. Our services are designed to enhance
                    productivity, optimize resource utilization, and promote
                    sustainable farming methods.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="text-end pt-3 pb-3">
                    <center>
                      {" "}
                      <button
                        href="/ViewProducts"
                        className="btn btn-outline-dark"
                      >
                        Go to Our Services
                      </button>{" "}
                    </center>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <div class="card-body text-center">
                  <img
                    src="https://img.freepik.com/free-vector/blogging-illustration-concept_114360-851.jpg?w=2000"
                    class="card-img-top"
                    alt="..."
                    style={{ width: "25%" }}
                  />
                  <h2 class="card-title text-uppercase pt-4">Blogs</h2>
                  <p>
                    Welcome to the Smart Harvest blogs. Your go-to resource for
                    all things smart farming! Here, we share insightful
                    articles, expert tips, and the latest industry trends to
                    help farmers and agricultural enthusiasts stay informed and
                    inspired.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="text-end pt-3 pb-3">
                    <center>
                      {" "}
                      <button className="btn btn-outline-dark">
                        Go to Blogs
                      </button>{" "}
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <div
          className="text-center"
          style={{
            backgroundColor: "#243A1D",
            paddingTop: "5%",
            paddingBottom: "4%",
          }}
        >
          <h1 className="text-uppercase text-white">
            Resource Management Dashboard
          </h1>
          <span className="text-uppercase" style={{ color: "#9CB693" }}>
            HOME / Resource Dashboard
          </span>
        </div> */}

        <div>
          <div
            className="text-center"
            style={{
              backgroundColor: "#3cb371",
              paddingTop: "5%",
              paddingBottom: "4%",
            }}
          >
            <h1 className="text-uppercase text-white">
              Mission / Vision / About Us
            </h1>
            {/* <span className="text-uppercase" style={{ color: "white" }}>
              HOME / Resource Dashboard
            </span> */}
          </div>
          <div className="container">
            <div
              className="row"
              style={{ paddingTop: "5%", paddingBottom: "5%" }}
            >
              <div className="col">
                <div class="card">
                  <div class="card-body text-center">
                    <img
                      src="https://www.clipartmax.com/png/full/202-2027635_our-mission-mission-vision-icon-png.png"
                      class="card-img-top"
                      alt="..."
                      style={{ width: "25%" }}
                    />
                    <h2 class="card-title text-uppercase pt-4">Mission</h2>
                    <p>
                      Our mission is to transform agriculture through smart
                      farming technologies, empowering farmers with innovative
                      solutions that enhance productivity, optimize resource
                      utilization, and promote sustainability. We aim to
                      revolutionize farming practices and contribute to a more
                      efficient, profitable, and environmentally conscious
                      agricultural industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <div class="card-body text-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLEB3lqbrM2b6Qirwlw6qPGOcsaJ0aymSEcUnK-TyS0TwZPPeufO-9_9arMqa0wk9i74&usqp=CAU"
                      class="card-img-top"
                      alt="..."
                      style={{ width: "25%" }}
                    />
                    <h2 class="card-title text-uppercase pt-4">Vision</h2>
                    <p>
                      Our vision is to lead the way in shaping the future of
                      farming by driving the adoption of smart farming
                      technologies worldwide. We envision a world where
                      precision agriculture, automation, and data-driven
                      decision-making are commonplace, enabling farmers to
                      achieve higher yields, reduce environmental impact, and
                      ensure food security for all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div class="card">
                  <div class="card-body text-center">
                    <img
                      src="https://st2.depositphotos.com/30291372/46142/v/600/depositphotos_461424770-stock-illustration-flat-vector-illustration-for-about.jpg"
                      class="card-img-top"
                      alt="..."
                      style={{ width: "28%" }}
                    />
                    <h2 class="card-title text-uppercase pt-4">About Us</h2>
                    <p>
                      At Smart Harvest, we are a pioneering smart farming
                      solutions provider. With a passion for innovation and
                      sustainability, we empower farmers with cutting-edge
                      technologies to optimize crop production, reduce resource
                      wastage, and promote environmentally friendly farming
                      practices. Join us on the journey to revolutionize
                      agriculture for a brighter future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;

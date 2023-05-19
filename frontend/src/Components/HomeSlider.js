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
            Resource Management Dashboard
          </h1>
          <span className="text-uppercase" style={{ color: "white" }}>
            HOME / Resource Dashboard
          </span>
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
                    src="../img/land.png"
                    class="card-img-top"
                    alt="..."
                    style={{ width: "25%" }}
                  />
                  <h2 class="card-title text-uppercase pt-4">
                    Lands Managment
                  </h2>
                  <p>
                    Land management refers to the process of overseeing and
                    making decisions about the use, development, and
                    conservation of land resources. It involves a range of
                    activities aimed at optimizing the economic, social, and
                    environmental benefits derived from land.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="text-end pt-3 pb-3">
                  <center> <button className="btn btn-outline-dark">Next</button> </center>                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <div class="card-body text-center">
                  <img
                    src="../img/investing.png"
                    class="card-img-top"
                    alt="..."
                    style={{ width: "25%" }}
                  />
                  <h2 class="card-title text-uppercase pt-4">
                    Investers Managment
                  </h2>
                  <p>
                    Land management refers to the process of overseeing and
                    making decisions regarding the use, development, and
                    conservation of land resources. It involves various
                    activities aimed at optimizing land utilization while
                    considering social, economic,
                  </p>
                </div>
                <div className="card-footer">
                  <div className="text-end pt-3 pb-3">
                  <center> <button className="btn btn-outline-dark">Next</button> </center>
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
            Resource Management Dashboard
          </h1>
          <span className="text-uppercase" style={{ color: "white" }}>
            HOME / Resource Dashboard
          </span>
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
                    src="../img/land.png"
                    class="card-img-top"
                    alt="..."
                    style={{ width: "25%" }}
                  />
                  <h2 class="card-title text-uppercase pt-4">
                    Lands Managment
                  </h2>
                  <p>
                    Land management refers to the process of overseeing and
                    making decisions about the use, development, and
                    conservation of land resources. It involves a range of
                    activities aimed at optimizing the economic, social, and
                    environmental benefits derived from land.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="text-end pt-3 pb-3">
                  <center> <button className="btn btn-outline-dark">Next</button> </center>                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <div class="card-body text-center">
                  <img
                    src="../img/investing.png"
                    class="card-img-top"
                    alt="..."
                    style={{ width: "25%" }}
                  />
                  <h2 class="card-title text-uppercase pt-4">
                    Investers Managment
                  </h2>
                  <p>
                    Land management refers to the process of overseeing and
                    making decisions regarding the use, development, and
                    conservation of land resources. It involves various
                    activities aimed at optimizing land utilization while
                    considering social, economic,
                  </p>
                </div>
                <div className="card-footer">
                  <div className="text-end pt-3 pb-3">
                  <center> <button className="btn btn-outline-dark">Next</button> </center>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card">
                <div class="card-body text-center">
                  <img
                    src="../img/investing.png"
                    class="card-img-top"
                    alt="..."
                    style={{ width: "25%" }}
                  />
                  <h2 class="card-title text-uppercase pt-4">
                    Investers Managment
                  </h2>
                  <p>
                    Land management refers to the process of overseeing and
                    making decisions regarding the use, development, and
                    conservation of land resources. It involves various
                    activities aimed at optimizing land utilization while
                    considering social, economic,
                  </p>
                </div>
                <div className="card-footer">
                  <div className="text-end pt-3 pb-3">
                  <center> <button className="btn btn-outline-dark">Next</button> </center>
                  </div>
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

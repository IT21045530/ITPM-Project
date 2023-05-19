import React from "react";
import Carousel from "react-bootstrap/Carousel";

function BlogSlider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nigeriacic.org/wp-content/uploads/2017/07/SA-1000x500-1.jpg"
          //alt="First slide"
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
          //alt="Second slide"
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
          //alt="Third slide"
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
          //alt="Forth slide"
          />
          <Carousel.Caption>
            {" "}
            {/*04*/}
            <h3>Growing Smarter</h3>
            <p>How Our Technology is Changing the Game</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default BlogSlider;

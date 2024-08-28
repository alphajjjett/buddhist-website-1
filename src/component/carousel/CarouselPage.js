import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; 

function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/carouselpage1.jpg"
              alt="First slide"
            />
        </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/carouselpage2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselPage
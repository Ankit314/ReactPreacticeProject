import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg';
import slider3 from '../img/slider3.jpg';
 import './slider.css'


export default function Slider() {
  return (
    <div>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100 sliderImg" src={slider1} alt="First slide"   />
         
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 sliderImg" src={slider2} alt="second slide"  />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 sliderImg" src={slider3} alt="Third slide"   />
        {/* <Carousel.Caption>
          <h5 className='text-info'>Third slide label</h5>
          <p className='text-info'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slayder() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        style={{height : '600px'}}
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.cb1c8792757843d1f7a434b761950848?rik=2EIhm1JAA6DgaQ&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height : '600px'}}
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.af6ec19f4ca2ad7acabe04df78bb3dce?rik=WH3os%2fZAsTs9vg&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height : '600px'}}
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.fbb18407912c9d57ea1e2e12d083aaca?rik=qL35hmBNaprPHA&pid=ImgRaw&r=0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slayder;
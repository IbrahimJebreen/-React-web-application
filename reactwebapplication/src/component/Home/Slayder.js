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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/b37b6dbc-affb-4153-afe3-79c2eef5a1f7/JO-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height : '600px'}}
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.06d9d7e2c87bfabfab91a740dad41cac?rik=BYHahGxvC%2b6sdA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f3%2fd%2f184318.jpg&ehk=87b88avuU9%2bwBJ4X%2fUjGou18lJpbNNStckpBLiqTKKM%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height : '600px'}}
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.8555a02566b33b434c3537b292e14bfa?rik=tAAR9tYcYiVGGg&pid=ImgRaw&r=0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slayder;
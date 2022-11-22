import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cards.css';
import axios from "axios";
function Cards({page}) {
    const baseURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a911e0c4c9e428116cda4b17a76dd843&with_genres="+page;
    const [movies, setMovies] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setMovies(response.data);
    });
    },[]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      if(movies==null)
      return <h1>looding</h1>
      else
    return (
        <div className='App'>
            {/* {console.log(movies)} */}
              {console.log(movies)}
            <Slider {...settings}>
            {movies.results.map(item=>{
                return(
            <div className='cardx' style={{backgroundColor:'black'}}>
            <div className='card-top' style={{backgroundColor:'black'}}>
                <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} alt={item.adult} />
                <h1>{item.title}</h1>
            </div>
                <div className='card-bottom' style={{backgroundColor:'black'}}>
                <h3>{item.overview}</h3>
                {/* <spam className='category'>{item.overview}</spam> */}
                </div>
                </div>
                
                )})}
            </Slider>
        </div>
    );
}

export default Cards;
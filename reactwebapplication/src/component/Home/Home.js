import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Slayder from './Slayder';
import Slider from "react-slick";
import { display, style } from '@mui/system';


function Home(props) {
  // const url = 'https://jsonplaceholder.typicode.com/todos/'
  const [search, setSearch] = useState([]);
  const [searchValue,setSearchValue]= useState('');
  const url =
    `https://api.themoviedb.org/3/search/movie?api_key=a911e0c4c9e428116cda4b17a76dd843&query=`+searchValue;

  useEffect(() => {
    axios.get(url).then(json =>{ setSearch(json.data)
      setSearch(json.data.results);
      console.log(json.data);
    })
    
    
  }, [searchValue])
  
  function handelSearch(e){ 
    if(e==''){
     return setSearchValue({});
    }
    setSearchValue(e);
  }
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
  if(search==null){
    return <h1>loding</h1>
  }
  const renderTable = () => { return(
        <div className='App'>
        <Slider {...settings}>
     {search.map(item => {
      return (
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
               
      )
    },[])}
    </Slider>
    </div>
  )}
  return (
    <div>
      {/* { console.log(search)} */}
      <Slayder/>
      <center>
      <input type='search' placeholder='Search movies' style={{marginTop:'50px',width:'35%',borderRadius: '10px / 20px'}} onChange={e=>handelSearch(e.target.value)}/>
     
      </center>
      
        {renderTable()}
      <h3 style={{marginLeft:'100px',paddingTop:'50px' ,color:'black'}}>Action & Adventure</h3>
      <Cards page={80}/>
      <h3 style={{marginLeft:'100px',color:'black',paddingTop:'50px'}}>Drama</h3>
      <Cards page={18}/>
      <h3 style={{marginLeft:'100px',paddingTop:'50px' ,color:'black'}} >Animation</h3>
      <Cards page={16}/>
      <h3 style={{marginLeft:'100px',paddingTop:'50px' ,color:'black'}}>Comedy</h3>
      <Cards page={35}/>
    </div>
  );
}

export default Home;
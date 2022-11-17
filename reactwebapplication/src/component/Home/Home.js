import React from 'react';
import Cards from './Cards';
import Slayder from './Slayder';


function Home(props) {
  return (
    <div>
      <Slayder/>
      <Cards page={1}/>
      <Cards page={2}/>
      <Cards page={3}/>
      <Cards page={4}/>
    </div>
  );
}

export default Home;
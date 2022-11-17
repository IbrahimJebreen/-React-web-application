import React from 'react';
import { Footer } from './component/Footer';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './component/Contact';
import About from './component/About';
import Home from './component/Home/Home';


function App(props) {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
      <Footer/>
            </Router>
    </div>
  );
}

export default App;
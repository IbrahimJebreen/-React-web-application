import React, { useState } from 'react';
import { Footer } from './component/Footer';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './component/Contact';
import About from './component/About';
import Home from './component/Home/Home';
import SignInSide from './component/lgoin&regester/SignInSide';
import SignUpSide from './component/lgoin&regester/SignUpSide';
import { AuthProvider } from 'react-auth-kit';







function App(props) {
  const[isSignedIn,setIsSignedIn]=useState(false);
  return (
    <div>
       <AuthProvider authType = {'cookie'}
                  authName={'_auth'}>
      <Router>
      <Navbar SignInSide={isSignedIn}/>
      <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
                <Route exact path='/login' element={< SignInSide SignInSide={setIsSignedIn} />} ></Route>
                <Route exact path='/register' element={< SignUpSide />}></Route>
    
            </Routes>
      <Footer/>
            </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

import logo from '../assest/logo.png'
import { useIsAuthenticated, useSignOut } from 'react-auth-kit';
export default function Navbar() {
    const isAut=useIsAuthenticated();
    const singnOut=useSignOut();
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);

    return (

<MDBNavbar expand='lg' dark  style={{backgroundColor:'black'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' style={{marginLeft:'100px'}}><img style={{height:'60px'}} src={logo}/></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02' style={{marginLeft:'20%'}}>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page'>
                <Link to="/" className='link-light ' style={{marginLeft:'50px'}}>Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                <MDBNavbarLink ><Link to="/about" className='link-light' style={{marginLeft:'50px'}} >About</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink ><Link to="/contact" className='link-light ' style={{marginLeft:'50px'}}>Contact</Link></MDBNavbarLink>
              </MDBNavbarItem>
              {!isAut() ?(
              <>
              <MDBNavbarItem>
                <MDBNavbarLink ><Link to="/login" className='link-light ' style={{marginLeft:'50px'}}>Login</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink ><Link to="/register" className='link-light ' style={{marginLeft:'50px'}}>Register</Link></MDBNavbarLink>
            </MDBNavbarItem>
            </>
            ):
              (<MDBNavbarItem>
                <MDBNavbarLink ><Link to="/register" onClick={(e)=>{ singnOut()}} className='link-light ' style={{marginLeft:'50px'}}>Logout</Link></MDBNavbarLink>
              </MDBNavbarItem>)}
              
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      
     





);
}
{/* <Router>
<MDBNavbar expand='lg' light bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/' className='ms-5 ' ><img src= 'https://dcassetcdn.com/design_img/236622/125761/125761_2412375_236622_thumbnail.jpg' alt="pic" /></MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavSecond(!showNavSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavSecond}>
                        <MDBNavbarNav style={{marginLeft:'60%'}}>
                            <MDBNavbarLink tabIndex={-1} aria-disabled='true'>
                                <Link to="/" className='link-light ms-5'>Home</Link>
                            </MDBNavbarLink>
                            <MDBNavbarLink tabIndex={-1} aria-disabled='true'>
                                <Link to="/about" className='link-light ms-5'>About</Link>
                            </MDBNavbarLink>
                            <MDBNavbarLink >
                                <Link to="/contact" className='link-light ms-5'>Contact</Link>
                            </MDBNavbarLink>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
        </Router> */}
import React from 'react';
import { useSignOut } from 'react-auth-kit';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";

// import {refreshTokenSetup} from './refreshToken' 


const clientId ='902898062155-a1m445ou1bo512ekubiktfhdl1ej4nt5.apps.googleusercontent.com';

function Logout() {
    const navigate = useNavigate();
    const singnOut=useSignOut();
  const onSuccess = () => {
    singnOut();
    localStorage.setItem('user','');
    navigate('/login');
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout clientId={clientId} icon={false}  buttonText="Logout" onLogoutSuccess={onSuccess}></GoogleLogout>
    </div>
  );
}

export default Logout;
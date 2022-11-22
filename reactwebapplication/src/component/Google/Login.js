import { React, useEffect } from 'react';
import { gapi } from "gapi-script";

import { useNavigate } from "react-router-dom";

import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';
import { refreshTokenSetup } from './refreshToken';
import { useSignIn } from 'react-auth-kit';


const clientId ='811734137404-hhrtadvvmigcnhsl0am5nnrga1iajqpo.apps.googleusercontent.com';

function LoginGoogle() {
    const navigate = useNavigate()
    const Login = useSignIn();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  function setDataInLocalStorage(user){
    return localStorage.setItem('user',JSON.stringify(user));
}


  const onSuccess = (res) => {
    if (Login({
        token: 'user',
        expiresIn: 10000,
        tokenType: "Bearer",
        authState: res.profileObj
    })) {
        navigate('/');

    }
    setDataInLocalStorage(res.profileObj);
    console.log('Login Success: currentUser:', res.profileObj);
    navigate("/");
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px', color: 'red', backgroundColor: 'red' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogle;
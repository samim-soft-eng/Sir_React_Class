import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { useState } from 'react';   

function Mygoogle() {
    const [myimg, setMyimg] = useState(null);
    const [myname, setMyname] = useState('');

    const handleSuccess = (response) => {
        console.log('Login Success:', response.credential);
        const result = jwtDecode(response.credential);
        console.log(result);
        setMyimg(result.picture);
        setMyname(result.name);

      }
    const handleError = (error) => {
        console.log('Login Error:', error);
      }
  return (
    <div className="google-auth-card">
      <div className="google-auth-header">
        <span className="eyebrow">Google Sign-In</span>
        <h1>Welcome</h1>
      </div>

      {!myname ? (
        <div className="login-panel">
          <p>Sign in with your Google account</p>
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </div>
      ) : (
        <div className="profile-panel">
          <div className="profile-header">
            <img src={myimg} alt={myname} className="avatar" />
            <div>
              <span className="badge">Signed in</span>
              <h2>{myname}</h2>
            </div>
          </div>

          <div className="user-info">
            <div>
              <label>Name</label>
              <p>{myname}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mygoogle
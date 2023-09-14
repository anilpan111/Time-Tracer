import React from 'react'
import {GoogleLogin} from 'react-google-login';
import "./calendar.scss";

export default function Calendar() {

    const responseGoogle =(response)=>{
        console.log(response)
      }
    
      const responseError =(error)=>{
        console.log(error)
      }
  return (
    <div >
      <GoogleLogin 
       clientId="894662773295-vq25chv2r23cp9j7og9ogh2993bd8ctd.apps.googleusercontent.com"
       buttonText="sign-in"
       onSuccess={responseGoogle}
       onFailure={responseError}
       cookiePolicy={'single_host_origin'}
       responseType="code"
       accessType="offline"
       scope="openid email profile"
        
       className="calendar"/>
    </div>
  )
}

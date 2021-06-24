import React from 'react';
import './Login.css';
import image2 from './login.png';  



function App() {
  return (
    <>
   <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  
  <div id="main-div">
  <div className="image-box-div">
  <img src={image2} alt="Background image" /> 
    <div className="heading-div"> 
      <h1 className="eschool">eSchool</h1> 
    </div> 
    <div className="form-box-div">
      <div className="form-items-div"> 
        <div className="title-div">
          <span>Login</span> 
        </div>
        <div className="form-div">
          <div className="uname">
            <label htmlFor="username">Email</label><br />
            <input type="text" className="input-field" required />  
          </div> 
          <div className="password-div">
            <label htmlFor="password">Password</label><br />
            <input type="password" className="input-field" required />
            <p>Forgot Password?</p>
          </div> 
          <div className="button-line-div"> 
            <button className="login-div" type="submit">Login</button>
            <button className="signup-div" type="submit">Sign up</button> 
          </div> 
        </div>
      </div>
      {/* ICONS DIV */}
      <div className="icons-div">
        <p className="para-div">or login with</p>
        <div className="icon-img-div">
          <i className="fab fa-google" id="google-icon-div" />
          <i className="fab fa-facebook-f" id="fb-icon-div" /> 
          <i className="fab fa-twitter" id="tw-icon-div" /> 
        </div>
        <p>Don't have an account? SIGNUP</p>
      </div> 
    </div>
    <div className="footer-div">
      <p>Privacy Policy | Acceptable Use Policy | Facebook | Twitter</p>
    </div>
  </div>
</div>
</>


  );
}

export default App;

import React from 'react';
import './Signup.css';
import image1 from './signup.png'  


function App() {
  return (
<>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
<div className="main">
  <div className="image-box">
  <img src={image1} alt="Background image" /> 
    <div className="heading">
      <h1>eSchool</h1>
    </div>  
    <div className="form-box">
      <div className="title">
        <span>Sign Up</span> 
      </div> 
      <div className="email-content">
        <div className="name">
          <div className="fname">
            <label htmlFor="firstname">First Name*</label>
            <input type="text" className="input-field" required />
          </div>
          <div className="mname">
            <label htmlFor="Middlename">Middle Name</label>
            <input type="text" className="input-field" required />
          </div>
          <div className="lname">
            <label htmlFor="lastname">Last Name*</label>
            <input type="text" className="input-field" required />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email*</label><br />
          <input type="text" className="input-field" required />
        </div>
        <div className="uname">
          <label htmlFor="lastname">Username*</label><br />
          <input type="text" className="input-field" required /> 
        </div>
        <div className="password">
          <div className="pword">
            <label htmlFor="password">Password*</label>
            <input type="text" className="input-field" required />
          </div>
          <div className="cword">
            <label htmlFor="password">Confirm Password*</label>
            <input type="text" className="input-field" required />
          </div>
        </div>
        <div className="sname">
          <label htmlFor="schoolname">School Name*</label><br />
          <input type="text" className="input-field" required />
        </div>
        <div className="conname">
          <div className="country">
            <label htmlFor="country">Country*</label><br />
            <input type="text" className="input-field" required />
          </div>
          <div className="city">
            <label htmlFor="city">City*</label><br />
            <input type="text" className="input-field" required />
          </div>
        </div>
        <div className="button-line">
          <button className ="btn" type="submit">Sign up</button>
          <div className="icons">
            <p>or Sign up with</p>
            <i className="fab fa-google" id="google-icon" />
          <i className="fab fa-facebook-f" id="fb-icon" /> 
          <i className="fab fa-twitter" id="tw-icon" /> 
          </div>
        </div>
        <div className="last-line">
          <p>Already have an account? LOGIN</p>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>Privacy Policy | Acceptable Use Policy | Facebook | Twitter</p>
    </div>
  </div> 
</div>

</>
   
);
}

export default App;

import React, { useState } from 'react';
import '../LoginForm/LoginForm.css';



import { IoEyeSharp } from "react-icons/io5";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="form-container">
        <div className="register-header">
         
          <div className="register-pulse"></div>
      
          
        </div>
        

        <form action="">
        <div className="register-text">
            <h1 className='new-account-text'>New <br />Account</h1>
        </div>
        <div className="name-header">
            <h2>First Name</h2>
            <h2>Last Name</h2>
        </div>
            <div className="name-form">
            <input
            className="fill"
            type="text"
            id="email"
            required=""
            placeholder="hello@example.com"
          />
          <input
            className="fill"
            type="text"
            id="email"
            required=""
            placeholder="hello@example.com"
          />
            </div>
 
          
          <h2>Username</h2>
          <input
            className="fill"
            type="text"
            id="email"
            required=""
            placeholder="hello@example.com"
          />
          <div className="password-div">
            <h2>Create Password</h2>
            <a href="#">Forgot Password</a>
          </div>
          <div className="password-input">
            <input
              className="fill"
              type={showPassword ? 'text' : 'password'}
              id="password"
              required=""
              placeholder="Password"
            />
            <IoEyeSharp className="eye-icon" onClick={togglePasswordVisibility} />
          </div>
          <div className="password-div">
            <h2>Re-type Password</h2>
          </div>
          <div className="password-input">
            <input
              className="fill"
              type={showPassword ? 'text' : 'password'}
              id="password"
              required=""
              placeholder="Password"
            />
            <IoEyeSharp className="eye-icon" onClick={togglePasswordVisibility} />
          </div>
          <h2>Mobile No.</h2>
          <input
            className="fill"
            type="tel"
            id="phone"
            required=""
            placeholder='Phone Number'
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <div className="checkbox">
            <input type="checkbox" /> <p>Keep me sign in</p>
          </div>
          <button className="button-submit"type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="#">Sign in here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

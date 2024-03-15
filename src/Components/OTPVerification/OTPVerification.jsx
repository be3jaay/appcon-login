import '../LoginForm/LoginForm.css';
import React, { useState } from 'react';
import { FaHashtag } from "react-icons/fa6";

const OTPVerification = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleChange = (event) => {
    const input = event.target.value;
    if (/^[0-9]*$/.test(input)) {
      setMobileNumber(input);
    }
  };
    return (
    <div>
      <div className="form-container">
        <div className="header-container">
          <div className="otp-pulse"></div>
        </div>
      <div className="otp-container">
        <div className="otp-info">
          <h1>OTP Verification</h1>
          <p>Please enter your mobile number</p>
        </div>
        <div className="otp-input">
        <FaHashtag />
        <input
            className="mobile-tel"
            type="tel"
            placeholder="Mobile number"
            value={mobileNumber}
            onChange={handleChange}
            maxLength={11}
          />
        </div>
        <div className="otp-button">
          <button type="submit"><a href="/OTP">Continue</a></button>
          <p><a href="/LoginForm">Back</a></p>
        </div>
      </div>
          
      </div>
    </div>
  );
};

export default OTPVerification;

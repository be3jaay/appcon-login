import React, { useState, useRef } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const inputRefs = useRef([...Array(4)].map(() => React.createRef()));

  const handleChange = (index, value) => {
    if (/^[0-9]*$/.test(value)) {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);
      if (value !== '' && index < 3) {
        inputRefs.current[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && index > 0 && otpDigits[index] === '') {
      inputRefs.current[index - 1].current.focus();
    }
  };

  return (
    <div>
      <div className="form-container">
        <div className="header-container">
          <div className="otp-pulse"></div>
        </div>
        <div className="otp-header">
          <Link to="/OTPVerification"><SlArrowLeft /></Link>
          <h1> <Link to="/LoginForm">Previous</Link></h1>
        </div>
        <div className="otp-container">
          <div className="otp-info">
            <h1>Enter authentication code</h1>
            <p>Enter the 4-digit code that we have sent via the phone number <br /> +63 956 6674 853</p>
          </div>
          <div className="otp-input">
            {otpDigits.map((digit, index) => (
              <input
                key={index}
                className="otp-num"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={inputRefs.current[index]}
              />
            ))}
          </div>
          <div className="otp-button">
            <button type="submit">Continue</button>
            <p>Resend code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

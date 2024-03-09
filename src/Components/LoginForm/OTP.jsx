import '../LoginForm/LoginForm.css';
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
    <div>
      <div className="form-container">
        <div className="header-container">
          <div className="otp-pulse"></div>
        </div>
        <div className="otp-header">
              <SlArrowLeft />
              <h1>Change Number</h1>
          </div>
      <div className="otp-container">
        <div className="otp-info">
          <h1>Enter authentication code</h1>
          <p>Enter the 4-digit that we have sent via the phone number <br /> +63 956 6674 853</p>
        </div>
        <div className="otp-input">
        <input
              className="otp-num"
              id="otp-num"
              maxLength={1}
              required=""
              autoFocus
            />
            <input
              className="otp-num"
              id="otp-num"
              maxLength={1}
              required=""
              autoFocus
            />
            <input
              className="otp-num"
              id="otp-num"
              maxLength={1}
              required=""
              autoFocus
            />
            <input
              className="otp-num"
              id="otp-num"
              maxLength={1}
              required=""
              autoFocus
            />
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

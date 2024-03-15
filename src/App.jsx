import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import OTP from './Components/OTPForm/OTP';
import OTPVerification from "./Components/OTPVerification/OTPVerification";

function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
              <Route exact path="/" element={<LoginForm />} />
              <Route path="/LoginForm" element={<LoginForm />} />
              <Route path="/RegisterForm" element={<RegisterForm />} />
              <Route path="/OTPVerification" element={<OTPVerification />} />
              <Route path="/OTP" element={<OTP />} />
            </Routes>
          </div>
    </Router>
  );
}

export default App;


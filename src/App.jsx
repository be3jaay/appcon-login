import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/LoginForm/RegisterForm';

function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
              <Route exact path="/" element={<LoginForm />} />
              <Route path="/LoginForm" element={<LoginForm />} />
              <Route path="/RegisterForm" element={<RegisterForm />} />
            </Routes>
          </div>
    </Router>
  );
}

export default App;


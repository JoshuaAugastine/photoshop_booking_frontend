// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import your CSS file

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // Implement logic to send OTP to the provided phone number
    // For simplicity, we'll assume the OTP is sent successfully
    setIsOtpSent(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Implement logic to verify OTP
    // For simplicity, we'll assume the OTP is correct
    navigate('/categories');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {isOtpSent ? (
          <form onSubmit={handleOtpSubmit}>
            <label>Enter OTP:</label>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button type="submit">Submit OTP</button>
          </form>
        ) : (
          <form onSubmit={handlePhoneSubmit}>
            <label>Phone Number:</label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <button type="submit">Send OTP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

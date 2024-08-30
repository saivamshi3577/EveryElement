import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [view, setView] = useState('login');

  const handleSignUpClick = () => setView('sign-up');
  const handleForgotPasswordClick = () => setView('forgot-password');
  const handleBackToLogin = () => setView('login');

  return (
    <div className="login-container">
      {view === 'login' && (
        <>
          <h2>Login to Your Account</h2>
          <form className="login-form">
            <label>
              Email or Mobile Number
              <input type="text" placeholder="Enter your email or mobile number" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Enter your password" />
            </label>
            <button type="submit" className="login-button">Login</button>
            <div className="login-links">
              <button type="button" onClick={handleForgotPasswordClick}>Forgot Password?</button>
              <button type="button" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </form>
        </>
      )}

      {view === 'sign-up' && (
        <>
          <h2>Create a New Account</h2>
          <form className="sign-up-form">
            <label>
              Email
              <input type="email" placeholder="Enter your email" />
            </label>
            <label>
              Verify Email
              <input type="text" placeholder="Enter verification code" />
            </label>
            <label>
              Mobile Number
              <input type="text" placeholder="Enter your mobile number" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Create a password" />
            </label>
            <label>
              Confirm Password
              <input type="password" placeholder="Confirm your password" />
            </label>
            <button type="submit" className="sign-up-button">Sign Up</button>
            <button type="button" className="back-button" onClick={handleBackToLogin}>Back to Login</button>
          </form>
        </>
      )}

      {view === 'forgot-password' && (
        <>
          <h2>Forgot Password</h2>
          <form className="forgot-password-form">
            <label>
              Email
              <input type="email" placeholder="Enter your email" />
            </label>
            <label>
              Verify OTP
              <input type="text" placeholder="Enter OTP" />
            </label>
            <label>
              New Password
              <input type="password" placeholder="Enter new password" />
            </label>
            <label>
              Confirm Password
              <input type="password" placeholder="Confirm new password" />
            </label>
            <button type="submit" className="forgot-password-button">Submit</button>
            <button type="button" className="back-button" onClick={handleBackToLogin}>Back to Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
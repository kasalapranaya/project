import React, { useState } from 'react';
import './Loginsignup.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Loginsignup = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const validateField = (fieldName, value) => {
    const newErrors = {...errors};
    
    if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailRegex.test(value)) {
        newErrors.email = "Please enter a valid email address.";
      } else {
        delete newErrors.email;
      }
    }

    if (fieldName === 'password') {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!value || !passwordRegex.test(value)) {
        newErrors.password = "Invalid Password";
      } else {
        delete newErrors.password;
      }
    }

    if (fieldName === 'name') {
      if (action === "Sign Up" && (!value.trim() || value.length < 3)) {
        newErrors.name = "Name is required and must be at least 3 characters long.";
      } else {
        delete newErrors.name;
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`${action} successful!`);
    }
  };

  return (
    <div className="head">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <></>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => validateField('name', e.target.value)}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input 
              type="email" 
              placeholder="Email ID" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => validateField('email', e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => validateField('password', e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
        </div>
        {action === "Sign Up" ? (
          <></>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click here!</span>
          </div>
        )}
        <div className="submit-container">
          <div 
            className={action === "Login" ? "submit gray" : "submit"} 
            onClick={() => { setAction("Sign Up"); setErrors({}); }}
          >
            Sign Up
          </div>
          <div 
            className={action === "Sign Up" ? "submit gray" : "submit"} 
            onClick={() => { setAction("Login"); setErrors({}); }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;

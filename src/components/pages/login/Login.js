import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginPatient = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Success");
  };

  return (
    <div className='login-form '>
      <h3 className='login-form-header'>Sign in as a PATIENT</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='input-group'>
          <span className='input-group-addon'>
            {" "}
            <i className='fa fa-envelope'></i>{" "}
          </span>
          <input
            className='form-control'
            type='email'
            name='email'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='input-group'>
          <span className='input-group-addon'>
            {" "}
            <i className='fa fa-lock'></i>{" "}
          </span>
          <input
            className='form-control'
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <Button block disabled={!validateForm()} type='submit'>
          Login
        </Button>
        <p className='alternate-form-link'>
          <Link to='/patient/register'>I'm new here.</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPatient;

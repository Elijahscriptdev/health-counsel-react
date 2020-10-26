import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css";

const RegisterPatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const { name, email, password, password2 } = formData;

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='login-form '>
      <h3 className='login-form-header'>Signup as a PATIENT</h3>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <span className='input-group-addon'>
            {" "}
            <i className='fas fa-user'></i>{" "}
          </span>
          <input
            className='form-control'
            type='text'
            value={name}
            placeholder='Name'
            name='name'
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
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
        <div className='input-group'>
          <span className='input-group-addon'>
            {" "}
            <i className='fa fa-lock'></i>{" "}
          </span>
          <input
            className='form-control'
            type='password'
            placeholder='Confirm Password'
            value={password2}
            name='password2'
            onChange={(e) => onChange(e)}
            // minLength='6'
          />
        </div>
        <Button block disabled={!validateForm()} type='submit'>
          Register
        </Button>
        <p className='alternate-form-link'>
          <Link to='/patient/login'>I'm new here.</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPatient;

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css";

const DoctorRegister = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    speciality: "",
    hospital: "",
    age: "",
    experience_level: "",
  });

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const {
    name,
    email,
    password,
    password2,
    speciality,
    hospital,
    age,
    experience_level,
  } = formData;

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='login-form '>
      <h3 className='login-form-header'>Signup as a DOCTOR</h3>
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
            <i className='fas fa-clinic-medical'></i>{" "}
          </span>
          <input
            className='form-control'
            type='text'
            value={hospital}
            placeholder='Hospital'
            name='hospital'
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className='input-group'>
          <span className='input-group-addon'>
            {" "}
            <i class='fas fa-stethoscope'></i>{" "}
          </span>
          <input
            className='form-control'
            type='text'
            value={speciality}
            placeholder='Speciality'
            name='speciality'
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className='input-group'>
          <span className='input-group-addon'>
            {" "}
            <i class='fas fa-level-up-alt'></i>{" "}
          </span>
          <input
            className='form-control'
            type='text'
            value={experience_level}
            placeholder='Years of experience'
            name='experience_level'
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className='input-group'>
          <span className='input-group-addon'>
            {" "}
            <i class='fas fa-percentage'></i>{" "}
          </span>
          <input
            className='form-control'
            type='text'
            value={age}
            placeholder='Age'
            name='age'
            onChange={(e) => onChange(e)}
            // required
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
          <Link to='/doctor/login'>
            I already have an account, Login as a doctor.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default DoctorRegister;

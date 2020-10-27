import React, { useState } from "react";
// import axios from "axios";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./register.css";
import { setAlert } from "../../../actions/alert";
import PropTypes from "prop-types";

const RegisterPatient = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords dont match", "danger");
    } else {
      console.log("Success");
      // try {
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };
      //   const newUser = { name, email, password, password2 };
      //   const body = JSON.stringify(newUser);
      //   const res = await axios.post(
      //     "https://healthcounsel-api.herokuapp.com/signup",
      //     body,
      //     config
      //   );
      //   console.log(res);
      // } catch (error) {
      //   console.log(error.res);
      // }
    }
  };

  return (
    <div className='login-form '>
      <h3 className='login-form-header'>Signup as a PATIENT</h3>
      <form onSubmit={(e) => onSubmit(e)}>
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
            required
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

RegisterPatient.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(RegisterPatient);

import React from "react";
import "./CustomBtn.css";
import Button from "react-bootstrap/Button";

const CustomBtn = ({ children, ...otherProps }) => {
  return (
    <Button className='custom-button' {...otherProps}>
      {children}
    </Button>
  );
};

export default CustomBtn;

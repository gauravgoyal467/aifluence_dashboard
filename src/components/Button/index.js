import React from "react";
import "./styles.css";

const Button = ({ text, image }) => {
  return (
    <>
      {text ? (
        <div className="btn">{text}</div>
      ) : (
        <div className="btn btn-img">
          <img src={image} alt="logo" />
        </div>
      )}
    </>
  );
};

export default Button;

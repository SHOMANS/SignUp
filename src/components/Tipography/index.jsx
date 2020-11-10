import React from "react";
import "./style.css";

export const Input = (props) => {
  const { type, placeHolder, value, handleOnChange, name, label } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="input"
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={handleOnChange}
        name={name}
        required
      />
    </>
  );
};

export const Check = (props) => {
  const { handleOnChange, name, label, checked } = props;
  return (
    <div className="check">
      <input
        className="check"
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
        name={name}
        required
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export const Button = (props) => {
  const { content, handleClick, type, className } = props;
  return (
    <button className={className} type={type} onClick={handleClick}>
      {content}
    </button>
  );
};

export const Back = (props) => {
  const { back } = props;
  return (
    <div className="backContainer">
      <strong>&lt;</strong>
      <a className="back" onClick={back}>
        Back
      </a>
    </div>
  );
};

export const TestPass = (props) => {
  const { testPass, passTestPar } = props;
  return (
    <div className="strongTest">
      <div className={testPass}></div>
      <p className="paspar">{passTestPar}</p>
    </div>
  );
};

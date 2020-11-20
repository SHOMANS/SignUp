import React from "react";
import { useState } from "react";
import * as T from "../Tipography";
import * as yup from "yup";
import { Link } from "react-router-dom";

import "./style.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const [testPass, setTestPass] = useState("");
  const [passTestPar, setPassTestPar] = useState("Write a strong password");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { Email, password, rePasseord, checkBox } = this.state;
    const signUpSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
      rePassword: yup.string().required(),
      checkBox: yup.boolean().required(),
    });
    signUpSchema
      .validate(
        { email, password, rePassword, checkBox },
        { abortEarly: false }
      )
      .then(() => {
        console.log("valid");
      })
      .catch((err) => {
        console.log("Error");
        console.log(err.message);
        setErrMsg(err.message);
      });
  };

  const passwordStrong = (e) => {
    const { value } = e.target;
    if (value.length < 5) {
      setTestPass("none");
      setPassTestPar("Write a strong password");
    } else if (value.length <= 8) {
      setTestPass("week");
      setPassTestPar("Your password is too week");
    } else if (value.length <= 14) {
      setTestPass("normal");
      setPassTestPar("You can make strronger password");
    } else if (value.length <= 20) {
      setTestPass("strong");
      setPassTestPar("Your password is strong enouph");
    } else {
      setTestPass("vstrong");
      setPassTestPar("Your password is too strong");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="headen">Register Individual Account!</h3>
      <p className="paragraph">
        For the purpose of gamers regulation, your details are required.
      </p>
      <span>{errMsg}</span>
      <T.Input
        type="text"
        name="Email"
        placeHolder="Email"
        handleOnChange={(e) => setEmail(e.target.value)}
        label="Email address*"
        value={email}
      />
      <T.Input
        type="password"
        name="password"
        placeHolder="password"
        handleOnChange={(e) => {
          setPassword(e.target.value);
          passwordStrong(e);
        }}
        label="Create Password*"
        passwordStrong={passwordStrong}
        value={password}
      />
      <T.TestPass testPass={testPass} passTestPar={passTestPar} />
      <T.Input
        type="password"
        name="rePasseord"
        placeHolder="Repeat Passeord"
        handleOnChange={(e) => setRePassword(e.target.value)}
        label="Repeat password*"
        value={rePassword}
      />
      <T.Check
        type="checkbox"
        name="checkBox"
        label="I agree to terms &amp; conditions"
        handleOnChange={(e) => setCheckBox(e.target.checked)}
        checked={checkBox}
      />
      <T.Button
        className="button normalButton"
        type="submit"
        content="Register new Account"
      />
      <div className="or">
        <hr />
        OR
        <hr />
      </div>
      <Link to="/LogIn">
        <T.Button
          className="button google"
          type="button"
          content="You have an account? Login"
        />
      </Link>
    </form>
  );
}

import React from "react";
import * as T from "../Tipography";
import { Link } from "react-router-dom";
import * as yup from "yup";

import "./style.css";

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { Email, password, rePasseord, checkBox } = this.state;
    const signUpSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });
    signUpSchema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        console.log("valid");
      })
      .catch((err) => {
        console.log("Error");
        console.log(err.message);
        setErrMsg(err.message);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Register Individual Account!</h3>
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
      />
      <T.Input
        type="password"
        name="password"
        placeHolder="password"
        handleOnChange={(e) => setPassword(e.target.value)}
        label="Your Password"
        passwordStrong={password}
      />
      <T.Button className="button normalButton" type="submit" content="Login" />
      <Link to="/">
        <T.Button
          className="button google"
          type="button"
          content="Register new Account"
        />
      </Link>
    </form>
  );
}

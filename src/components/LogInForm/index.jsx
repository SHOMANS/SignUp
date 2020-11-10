import React from "react";
import * as T from "../Tipography";

import "./style.css";

export default class Form extends React.Component {
  state = {
    Email: "",
    password: "",
    rePasseord: "",
    checkBox: true,
    testPass: "",
    passTestPar: "Write a strong password",
  };

  handleOnChange = (e) => {
    const { value, name, checked } = e.target;
    this.setState(() => {
      if (name === "checkBox") {
        return {
          [name]: checked,
        };
      }
      return {
        [name]: value,
      };
    });
  };

  passwordStrong = (e) => {
    const { value } = e.target;
    if (value.length < 5) {
      this.setState({
        testPass: "none",
        passTestPar: "Write a strong password",
      });
    } else if (value.length <= 8) {
      this.setState({
        testPass: "week",
        passTestPar: "Your password is too week",
      });
    } else if (value.length <= 14) {
      this.setState({
        testPass: "normal",
        passTestPar: "You can make strronger password",
      });
    } else if (value.length <= 20) {
      this.setState({
        testPass: "strong",
        passTestPar: "Your password is strong enouph",
      });
    } else {
      this.setState({
        testPass: "vstrong",
        passTestPar: "Your password is too strong",
      });
    }
  };

  submit = (e) => {
    const s = this.state;
    e.preventDefault();
    console.log(s);
  };

  render() {
    // const { testPass, passTestPar, checkBox } = this.state;
    return (
      <form className="form" onSubmit={this.submit}>
        <h3>Register Individual Account!</h3>
        <p className="paragraph">
          For the purpose of gamers regulation, your details are required.
        </p>
        <T.Input
          type="text"
          name="Email"
          placeHolder="Email"
          handleOnChange={this.handleOnChange}
          label="Email address*"
        />
        <T.Input
          type="password"
          name="password"
          placeHolder="password"
          handleOnChange={(e) => {
            this.handleOnChange(e);
            this.passwordStrong(e);
          }}
          label="Create Password*"
          passwordStrong={this.passwordStrong}
        />
        {/* <T.TestPass testPass={testPass} passTestPar={passTestPar} /> */}
        {/* <T.Input
          type="password"
          name="rePasseord"
          placeHolder="Repeat Passeord"
          handleOnChange={this.handleOnChange}
          label="Repeat password*"
        /> */}
        {/* <T.Check
          type="checkbox"
          name="checkBox"
          label="I agree to terms &amp; conditions"
          handleOnChange={this.handleOnChange}
          checked={checkBox}
        /> */}
        <T.Button
          className="button normalButton"
          type="submit"
          content="Register new Account"
        />
        {/* <T.Button
          className="button google"
          type="button"
          content="You have an account? Login"
        /> */}
      </form>
    );
  }
}

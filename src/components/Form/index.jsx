import React from "react";
import Input from "../Input";
import Button from "../Button";

class Form extends React.Component {
  state = {
    Username: "",
    Email: "",
    password: "",
  };

  handleOnChange = (e) => {
    const { value, name } = e.target;
    console.log(value);
    console.log(name);
  };

  render() {
    return (
      <form>
        <Input
          type="text"
          name="Username"
          placeHolder="Username"
          handleOnChange={this.handleOnChange}
        />
        ;
        <Input
          type="text"
          name="Email"
          placeHolder="Email"
          handleOnChange={this.handleOnChange}
        />
        ;
        <Input
          type="password"
          name="password"
          placeHolder="password"
          handleOnChange={this.handleOnChange}
        />
        ;
        <Button type="submit" content="Submit" />;
        <Button type="button" content="google" />;
      </form>
    );
  }
}

export default Form;

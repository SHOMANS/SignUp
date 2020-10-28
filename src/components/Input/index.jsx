import React from "react";

class Input extends React.Component {
  render() {
    const { inputType, placeHolder, value, handleOnChange, name } = this.props;
    return (
      <input
        type={inputType}
        placeholder={placeHolder}
        value={value}
        onChange={handleOnChange}
        name={name}
      />
    );
  }
}

export default Input;

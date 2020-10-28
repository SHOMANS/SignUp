import React from "react";

class Button extends React.Component {
  render() {
    const { content, handleClick, type } = this.props;
    return (
      <button type={type} onClick={handleClick}>
        {content}
      </button>
    );
  }
}

export default Button;

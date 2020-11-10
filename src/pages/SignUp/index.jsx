import React from "react";
import Form from "../../components/Form";
import Section from "../../components/Section";
import * as T from "../../components/Tipography";
import Rectangle from "../../components/images/Rectangle.png";
import "./style.css";

function SignUp() {
  return (
    <div className="container">
      <Section
        paragraph="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
        imgsrc={Rectangle}
        imgalt=""
        imgClass="signUpImg"
      />
      <aside className="aside">
        <T.Back />
        <Form />
      </aside>
    </div>
  );
}

export default SignUp;

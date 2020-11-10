import React from "react";
import LogInForm from "../../components/LogInForm";
import Section from "../../components/Section";
// import * as T from "../../components/Tipography";
// import "./style.css";

function SignUp() {
  return (
    <div className="container">
      <Section
        paragraph="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
        span="Hideo Kojima"
      />

      <aside className="aside">
        <LogInForm />
      </aside>
    </div>
  );
}

export default SignUp;

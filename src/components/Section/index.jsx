import React from "react";
import "./style.css";
// import FlatColorIconsGoogle from "../images/FlatColorIconsGoogle.svg";

function Section(props) {
  const { paragraph, imgsrc, imgalt, imgClass } = props;
  return (
    <>
      <section className="section">
        {/* <svg src={FlatColorIconsGoogle} alt="logo" /> */}

        <img className={imgClass} src={imgsrc} alt={imgalt} />
        <div className="blueLayer">
          <p className="textInBlue">
            {paragraph}
            <span className="span">Hideo Kojima</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Section;

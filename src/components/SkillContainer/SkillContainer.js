import React from "react";
import { Element } from "react-scroll";
import skillimg from "../../assets/download.jfif";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./SkillContainer.css";
const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer__image">
        <img src={skillimg} alt="" />
      </div>
      <div className="skillcontainer__text">
        <h2>SKILLSET</h2>
        <div className="skillcontainer__skillset">
          <h5>React</h5>
          <div className="skillcontainer__slider skillcontainer__slider1">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>Node js</h5>
          <div className="skillcontainer__slider skillcontainer__slider2">
            <LinearProgress variant="determinate" value={65} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>React Native</h5>
          <div className="skillcontainer__slider skillcontainer__slider3">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>js</h5>
          <div className="skillcontainer__slider skillcontainer__slider4">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>html</h5>
          <div className="skillcontainer__slider skillcontainer__slider5">
            <LinearProgress variant="determinate" value={98} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>css</h5>
          <div className="skillcontainer__slider skillcontainer__slider6">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;

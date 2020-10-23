import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p
          className="footer-text tc"
          style={{ color: props.theme.secondaryText }}
        >
          Made with{" "}
          <span role="img">
            <strike className="strikeout">love</strike>{" "}
            <em> a keyboard&nbsp; </em>
          </span>
          {"  "}
          by {greeting.title}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}

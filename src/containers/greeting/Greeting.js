import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import StandingGuy from "./StandingGuy";
import Typewriter from "typewriter-effect";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <Typewriter
                  options={{
                    strings: greeting.subTitle,
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                />
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Check out my resume!"
                  newTab={true}
                  href="https://drive.google.com/file/d/15vWAY_2RXzXNn9eDfr1dTVkVP3QAy3Zb/view?usp=sharing"
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <StandingGuy theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

import React from "react";
import "./ExperienceButton.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export const ExperienceButton = ({
  text,
  className,
  href,
  newTab,
  theme,
  experience,
}) => {
  return (
    <div className={className}>
      <a
        class="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.body,
          backgroundColor: experience.color,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={(event) =>
          onMouseEnter(event, experience.color, theme.body)
        }
        onMouseOut={(event) => onMouseOut(event, theme.body, experience.color)}
      >
        {text}
      </a>
    </div>
  );
};

export default ExperienceButton;

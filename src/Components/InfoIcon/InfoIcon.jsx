import React, { useState } from "react";
import "./InfoIcon.css";

const InfoIcon = ({ child, bgColor, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleClicked, setIsVisibleClicked] = useState(false);

  return (
    <div
      className="info-icon-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => !isVisibleClicked && setIsVisible(false)}
    >
      <span
        className="info-icon"
        onClick={() => setIsVisibleClicked((prev) => !prev)}
      >
        i
      </span>
      {isVisible && (
        <div
          className="details-modal-container"
          style={{
            backgroundColor: bgColor,
            "--tooltip-border-color": bgColor,
            color: color,
          }}
        >
          {child}
        </div>
      )}
    </div>
  );
};

export default InfoIcon;

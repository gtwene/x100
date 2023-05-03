import React from "react";

function ButtonComponent({
  label,
  buttonBackgroundColor,
  buttonColor,
  buttonWidth,
  buttonHeight,
  background,
}) {
  // height should be in percentages and width should be in pixels
  return (
    <button
      className="button"
      style={{
        backgroundColor: buttonBackgroundColor,
        color: buttonColor,
        border: "none",
        background: background,
        borderRadius: "4px",
        height: buttonHeight,
        width: buttonWidth,
        marginBottom: "",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

export default ButtonComponent;

import React from "react";

function Label({ label, labelWidth, fontSize, fontWeight, color, id, required, }) {
  // label width should be in percentages
  return (
    <label
      for={id}
      style={{
        margin: "15px",
        color: "rgb(92, 92, 92)",
        width: labelWidth,
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
    >
      {label}
      {required ? <span style={{ color: "red" }}> *</span> : null}
    </label>
  );
}

export default Label;

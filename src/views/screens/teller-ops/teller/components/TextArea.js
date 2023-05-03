import React from "react";

import "./index.css";

function TextAreaField({
  labelWidth,
  inputWidth,
  label,
  disabled,
  required,
  rows,
  cols,
  onChange,
  value,
}) {
  // disabled & required should be true or false, width should be in percentages, type: tel, number, text
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // marginBottom: "15px",
        whiteSpace: "nowrap",
        color: "rgb(92, 92, 92)",
      }}
    >
      <label style={{ width: labelWidth }}>
        {label}
        {required === true ? <span style={{ color: "red" }}> *</span> : null}
      </label>

      <textarea
        className="textareafield"
        rows={rows}
        style={{ width: inputWidth, color: "#595959", height: "25px" }}
        disabled={disabled}
        required={required}
        cols={cols}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TextAreaField;

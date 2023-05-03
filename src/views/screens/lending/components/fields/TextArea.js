import React from "react";

function TextAreaField({ labelWidth,rows,cols, inputWidth, label, disabled, required }) {
  // disabled & required should be true or false, width should be in percentages, type: tel, number, text
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // marginBottom: "15px",
        margin: "15px",
        whiteSpace: "nowrap",
        color: "rgb(92, 92, 92)",
      }}
    >
      <label style={{ width: labelWidth, fontSize: "90%" }}>
        {label}
        {required === true ? <span style={{ color: "red" }}> *</span> : null}
      </label>

      <textarea
        className="textareafield "
        style={{ width: inputWidth, color: "#595959" }}
        disabled={disabled}
        required={required}
        rows={rows}
        cols={cols}
      ></textarea>
    </div>
  );
}

export default TextAreaField;

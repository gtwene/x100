import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { DatePicker } from "antd";
import "./index.css";

function InputField({
  labelWidth,
  inputWidth,
  type,
  label,
  maxLength,
  disabled,
  required,
  value,
  marginBottom,
  labelColor,
  paddingRight,
  margin,
  onChange,
  onKeyDown,
  onBlur
}) {
  // disabled & required should be true or false, width should be in percentages, type: tel, number, text
  return (
    <div
      className="w-full flex items-center"
      style={{
        // display: "flex",
        // alignItems: "center",
        whiteSpace: "nowrap",
        color: "rgb(92, 92, 92)",
        marginBottom: marginBottom,
        margin: margin
      }}
    >
      <label style={{ width: labelWidth, fontSize: "85%", color: labelColor }}>
        {label}
        {required ? <span style={{ color: "red" }}> *</span> : null}
      </label>

      {type === "date" ? (
        <input
        width={inputWidth}
        style={{width: inputWidth,color: "rgb(92, 92, 92)"}}
        placeholder="Pick a date"
        id="dateField"
        value={value}
        type="date"
    />
        // <DatePicker
        //   variant="unstyled"
        //   width={inputWidth}
        //   style={{ width: inputWidth, color: "rgb(92, 92, 92)" }}
        //   // inputFormat="DD/MM/YYYY"
        //   placeholder="Pick a date"
        //   id="dateField"
        //   rightSection={<IoCalendarOutline size={15} color="grey" />}
        //   styles={{ rightSection: { pointerEvents: "none" } }}
        // />
      ) : (
        <input
          type={type}
          className={disabled ? "inputFieldDisabled" : "inputField"}
          style={{
            width: inputWidth,
            color: "rgb(92, 92, 92)",
            paddingRight: paddingRight,
          }}
          maxLength={maxLength}
          min={type === "number" && 0}
          disabled={disabled}
          required={required}
          value={value}
          onChange={onChange}
          onKeyDown={ onKeyDown}
          onBlur={ onBlur}
        />
      )}
    </div>
  );
}

export default InputField;

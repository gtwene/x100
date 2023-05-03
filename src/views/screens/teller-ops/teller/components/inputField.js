import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { DatePicker } from "antd";
import "../../../../../components/others/Fields/index.css";

function InputField({
  textAlign,
  onKeyPress,
  onChange,
  id,
  labelWidth,
  inputWidth,
  type,
  label,
  maxLength,
  disabled,
  required,
  value,
  marginBottom,
  onBlur,
  name,
  setFormData,
}) {
  return (
    <div
      className="w-full flex items-center"
      style={{
        // display: "flex",
        // alignItems: "center",
        whiteSpace: "nowrap",
        color: "rgb(92, 92, 92)",
        marginBottom: marginBottom,
      }}
    >
      <label style={{ width: labelWidth, color: "rgb(92, 92, 92)" }}>
        {label}
        {required ? <span style={{ color: "red" }}> *</span> : null}
      </label>

      {/* type === "date" ? (
        <DatePicker
          variant="unstyled"
          width={inputWidth}
          style={{ width: inputWidth, color: "rgb(92, 92, 92)" }}
          // inputFormat="DD/MM/YYYY"
          placeholder="Pick a date"
          id="dateField"
          rightSection={<IoCalendarOutline size={15} color="grey" />}
          styles={{ rightSection: { pointerEvents: "none" } }}
        />
      ) :  */}
      {
        <input
          id={id}
          name={name}
          onKeyPress={onKeyPress}
          type={type}
          className={disabled ? "inputFieldDisabled" : "inputField"}
          style={{
            width: inputWidth,
            color: "rgb(92, 92, 92)",
            paddingRight: "5px",
            textAlign: `${textAlign ? "right" : "left"}`,
          }}
          // maxLength={maxLength}
          // min={type === "number" && 0}
          disabled={disabled}
          required={required}
          value={value}
          onBlur={onBlur}
          // onChange={(e) =>
          //   setFormData((prev) => ({
          //     ...prev,
          //     [e.target.name]: e.target.value,
          //   }))
          // }
          onChange={onChange}
        />
      }
    </div>
  );
}

export default InputField;

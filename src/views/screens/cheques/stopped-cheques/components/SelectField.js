import React from "react";
import { Select } from "@mantine/core";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

function SelectField({
  labelWidth,
  inputWidth,
  label,
  placeholder,
  data,
  required,
  onChange,
  value,
  marginBottom
}) {
  //   const dat = ["male", "female", "other"];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: marginBottom,
        whiteSpace: "nowrap",
        color: "rgb(92, 92, 92)",
      }}
    >
      <label style={{ width: labelWidth, fontSize: "85%" }}>
        {label}
        {required ? <span style={{ color: "red" }}> *</span> : null}
      </label>
      <Select
        onChange={onChange}
        value={value}
        required={required}
        placeholder={placeholder}
        style={{
          width: inputWidth,
        }}
        variant="unstyled"
        searchable
        size={"xs"}
        id="selectField"
        rightSection={
          <FiChevronDown
            style={{ marginLeft: "15px" }}
            size={18}
            color="grey"
          />
        }
        styles={{ rightSection: { pointerEvents: "none" } }}
        data={data}
      />
    </div>
  );
}

export default SelectField;

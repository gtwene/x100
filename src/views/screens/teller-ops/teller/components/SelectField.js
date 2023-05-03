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
  onChange,
  value,
}) {
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
      <label style={{ width: labelWidth }}>{label}</label>
      <Select
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
        value={value}
        styles={{ rightSection: { pointerEvents: "none" } }}
        onChange={onChange}
        data={[
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
        ]}
      />
    </div>
  );
}

export default SelectField;

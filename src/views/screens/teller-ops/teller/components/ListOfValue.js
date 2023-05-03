import React from "react";
import { Select } from "@mantine/core";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

import "./index.css";
function ListOfValue({
  labelWidth,
  inputWidth,
  label,
  placeholder,
  data,
  columns,
  title,
  marginBottom,
  onChange,
  value,
}) {
  if (!data) {
    data = ["No data"];
  } else {
    data = data;
  }
  //   const dat = ["male", "female", "other"];
  return (
    <div
      className="w-full"
      style={{
        display: "flex",
        alignItems: "center",
        // marginBottom: "15px",
        whiteSpace: "nowrap",
        color: "rgb(92, 92, 92)",
        marginBottom: marginBottom,
      }}
    >
      <label style={{ width: labelWidth }}>{label}</label>
      <Select
        placeholder={placeholder}
        style={{
          width: inputWidth,
        }}
        // className="bg-white"
        variant="unstyled"
        searchable
        size={"xs"}
        id="selectField"
        rightSection={
          <IoMdSearch style={{ marginLeft: "15px" }} size={18} color="grey" />
        }
        value={value}
        title={title}
        columns={columns}
        styles={{ rightSection: { pointerEvents: "none" } }}
        data={data}
        onChange={onChange}
      />
    </div>
  );
}

export default ListOfValue;

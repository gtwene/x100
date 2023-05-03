import React, { useState } from "react";

function HeaderComponent({
  icon,
  title,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
}) {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // width: "98.3%",
          background:
            `url(` +
            window.location.origin +
            `/assets/images/headerBackground/` +
            getTheme.theme.headerImage +
            `)`,
          height: "35px",
          padding: "10px",
          color: "white",
          backgroundColor: "rgb(21 163 183)",
          fontSize: "16px",
          // textTransform: "uppercase",
          fontWeight: "700",
          borderRadius: borderRadius,
          borderTopLeftRadius: borderTopLeftRadius,
          borderTopRightRadius: borderTopRightRadius,
        }}
      >
        <div style={{ marginRight: "10px" }}>{icon}</div>
        {title}
      </div>
    </div>
  );
}

export default HeaderComponent;

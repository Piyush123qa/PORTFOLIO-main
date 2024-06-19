import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <footer>
      <div className="f-cont" style={{ display: "flex" }}>
        <div className="copy-icon">
          <CopyrightIcon style={{ fontSize: "small" }} />
        </div>
        <div className="para">
          <p>Copyright {new Date().getFullYear()} - Piyush Kumar Das</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

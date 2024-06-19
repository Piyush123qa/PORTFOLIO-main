import React from "react";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-cont">
        <div className="s-title">
          <h2>SKILLS</h2>
        </div>
        <div className="logos-cont">
          <div className="logos">
            <div className="logo1">
              <img src={require("./c++.png")} alt="" />
            </div>
            <div className="logo1">
              <img src={require("./OOPS.gif")} alt="" />
            </div>
            <div className="logo1">
              <img src={require("./dsa.jpg")} alt="" />
            </div>
            <div className="logo1">
              <img src={require("./html.png")} alt="" />
            </div>
          </div>

          <div className="logos">
            <div className="logo1">
              <img src={require("./css.png")} alt="" />
            </div>
            <div className="logo1">
              <img src={require("./bootstrap.png")} alt="" />
            </div>
            <div className="logo1">
              <img src={require("./JavaScript-Logo.png")} alt="" />
            </div>
            <div className="logo1">
              <img src={require("./react.jpg")} alt="" />
            </div>
          </div>

          <div className="logos">
            <div className="logo1">
              <img src={require("./node.png")} alt="" />
            </div>
            <div className="logo1">
              <img src={require("./postresql.png")} alt="" />
            </div>
          </div>
        </div>

        <div className="logos-contResp">
          <div className="logos">
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./c++.png")} alt="" />
            </div>
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./OOPS.gif")} alt="" />
            </div>
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./dsa.jpg")} alt="" />
            </div>
          </div>

          <div className="logos">
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./html.png")} alt="" />
            </div>
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./css.png")} alt="" />
            </div>
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./bootstrap.png")} alt="" />
            </div>
          </div>

          <div className="logos">
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./JavaScript-Logo.png")} alt="" />
            </div>
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./react.jpg")} alt="" />
            </div>
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./node.png")} alt="" />
            </div>
          </div>

          <div className="logos">
            <div className="logo1" style={{ width: "40%" }}>
              <img src={require("./postresql.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

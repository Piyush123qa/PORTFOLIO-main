import React from "react";

function Home() {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1t3w75_eYyVxMWojr_rHIRCGwXFyHyqG1/view?usp=sharing", //resume link to be changed
      "_blank"
    );
  };

  return (
    <div className="section">
      <div className="left">
        <p>Hii, my name is</p>
        <span className="name">Piyush Kumar Das</span>
        <p>Full Stack Developer</p>

        <button className="home-btn" onClick={openResume}>
          <span style={{ fontSize: "1rem" }}>VIEW RESUME📄</span>
        </button>
      </div>
      <div className="right" style={{ float: "right" }}>
        <img src={require("./pic.png")} alt="" />
      </div>
    </div>
  );
}

export default Home;

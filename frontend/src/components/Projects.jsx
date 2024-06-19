import React from "react";

function Projects() {
  const openProject1 = () => {
    window.open("https://piyushkumardaswebverse.netlify.app/", "_blank");
  };
  const openProject2 = () => {
    window.open("https://blogsby-yashraj.netlify.app/", "_blank");
  };
  const openProject3 = () => {
    window.open("https://amazonclonebyyashrajsingh.netlify.app/", "_blank");
  };
  const openProject4 = () => {
    window.open("https://services-anand.netlify.app/", "_blank");
  };

  return (
    <div className="project">
      <div className="Projects-container">
        <div className="p-title">
          <h2>PROJECTS</h2>
        </div>
        {/*  PROJECT- 1 */}
        <div className="pro-cont" style={{ marginBottom: "4rem" }}>
          <div className="p-left">
            <h2 className="h3">PORTFOLIO WEBSITE</h2>
            <p className="p-desc">
              A visually appealing and user-friendly portfolio website that
              showcases my skills, projects, and achievements, highlighting my
              expertise in Software Development.Designed to impress potential
              clients or employers, offering a comprehensive view of my
              capabilities and past work.
            </p>
            <ul className="ul">
              <li className="li">HTMLS | CSS</li>
              <li className="li">React</li>
              <li className="li">Node/Express.JS</li>
              <li className="li">PostgreSQL</li>
            </ul>
            <button className="btn-p" onClick={openProject1}>
              VIEW PROJECT
            </button>
          </div>
          <div className="p-right">
            <img
              className="img"
              src={require("./Portfolio image.PNG")}
              alt=""
            />
          </div>
        </div>

        {/*  PROJECT - 2 */}
        <div className="pro-cont" style={{ marginBottom: "4rem" }}>
          <div className="p-left">
            <h2 className="h3">BLOGS WEBSITE</h2>
            <p className="p-desc">
              A dynamic blog website that connects readers with engaging content
              across various topics i post regularly like Tech related, Web Dev
              related, Coding and many more exciting things.
            </p>
            <ul className="ul">
              <li className="li">HTML</li>
              <li className="li">CSS</li>
              <li className="li">React</li>
              <li className="li">Node/Express.JS</li>
              <li className="li">PostgreSQL</li>
            </ul>
            <button className="btn-p" onClick={openProject2}>
              VIEW PROJECT
            </button>
          </div>
          <div className="p-right">
            <img className="img" src={require("./Blog_pic.png")} alt="" />
          </div>
        </div>
        {/*  PROJECT- 3 */}
        <div className="pro-cont" style={{ marginBottom: "4rem" }}>
          <div className="p-left">
            <h2 className="h3">WEBSITE FOR CS</h2>
            <p className="p-desc">
              A React-based website tailored specifically for a Company
              Secretary Finalist, enhancing their online presence and enabling
              streamlined communication with clients and stakeholders. [Client -
              Project]
            </p>
            <ul className="ul">
              <li className="li">HTMLS | CSS</li>
              <li className="li">React</li>
              <li className="li">Node/Express.JS</li>
              <li className="li">Nodemailer</li>
            </ul>
            <button className="btn-p" onClick={openProject4}>
              VIEW PROJECT
            </button>
          </div>
          <div className="p-right">
            <img className="img" src={require("./anand-project.png")} alt="" />
          </div>
        </div>
        {/* 4th project */}
        <div className="pro-cont" style={{ marginBottom: "4rem" }}>
          <div className="p-left">
            <h2 className="h3">AMAZON CLONE</h2>
            <p className="p-desc">
              A clone of amazon’s website to gain hands on experience of HTML,
              CSS, React, and to know prerequisite for frontend development.
            </p>
            <ul className="ul">
              <li className="li">HTMLS</li>
              <li className="li">CSS</li>
              <li className="li">BOOTSTRAP</li>
              <li className="li">React</li>
              <li className="li">Material UI</li>
            </ul>
            <button className="btn-p" onClick={openProject3}>
              VIEW PROJECT
            </button>
          </div>
          <div className="p-right">
            <img className="img" src={require("./amaz.png")} alt="" />
          </div>
        </div>
        {/* 5th project */}
        <div className="pro-cont" style={{ marginBottom: "4rem" }}>
          <div className="p-left">
            <h2 className="h3">NOTES KEEPER</h2>
            <p className="p-desc">
              A notes app for the one’s who needed aid in note taking. Writing
              neatly and legibly so that notes are easily used.With edit and
              delete functionality.
            </p>
            <ul className="ul">
              <li className="li">HTMLS</li>
              <li className="li">CSS</li>
              <li className="li">Material UI</li>
              <li className="li">React</li>
              <li className="li">Express.js</li>
              <li className="li">PostgreSQL</li>
            </ul>
            {/* <button className="btn-p">VIEW PROJECT</button> */}
          </div>
          <div className="p-right">
            <img className="img" src={require("./note-app.png")} alt="" />
          </div>
        </div>
        {/* 6th project */}
        <div className="pro-cont" style={{ marginBottom: "4rem" }}>
          <div className="p-left">
            <h2 className="h3">NEWZ TODAY</h2>
            <p className="p-desc">
              This is a news website developed using News Api. A place where you
              get current affairs from all the spheres like Entertainment,
              Business, Science and Technology etc.
            </p>
            <ul className="ul">
              <li className="li">HTMLS</li>
              <li className="li">CSS</li>
              <li className="li">BOOTSTRAP</li>
              <li className="li">JavaScript</li>
              <li className="li">React</li>
            </ul>
            {/* <button className="btn-p">VIEW PROJECT</button> */}
          </div>
          <div className="p-right">
            <img className="img" src={require("./newz.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

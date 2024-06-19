import React, { useState } from "react";
import Form from "./Form";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded"; // to be changed all social media account
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contact() {
  const emailAddress = "yashrajsingh282@gmail.com";
  const [showForm, setShowForm] = useState(false);
  const [contactHeight, setContactHeight] = useState("48rem");
  const [respHeight, setRespHeight] = useState("56rem");

  const github = () => {
    window.open("https://github.com/yash-raj2000", "_blank");
  };
  const twitter = () => {
    window.open("https://twitter.com/imyashrajsingh", "_blank");
  };
  const linkedin = () => {
    window.open("https://www.linkedin.com/in/yashrajsingh282/", "_blank");
  };

  const openForm = () => {
    setShowForm(true);
    setContactHeight("58rem");
    setRespHeight("62rem");
  };

  const closeForm = () => {
    setShowForm(false);
    setContactHeight("48rem");
    setRespHeight("56rem");
  };

  return (
    <>
      <div className="contact" style={{ height: contactHeight }}>
        <div className="contact-cont">
          <div className="cont-left">
            <h4 className="h4">
              NEED A FULL STACK DEVELOPER? LET'S BUILD SOMETHING.
            </h4>
            <button className="cont-btn" onClick={openForm}>
              <span>GET IN TOUCH</span>
            </button>
            {showForm && <Form closeForm={closeForm} />}
          </div>
          <div className="cont-right">
            <div className="social">
              <div className="getInTouch">
                <div className="soc-logo">
                  <EmailRoundedIcon />
                </div>
                <div className="soc-name">
                  <a href={`mailto:${emailAddress}`}>
                    <button className="soc-btn">Email</button>
                  </a>
                </div>
              </div>
              <div className="getInTouch">
                <div className="soc-logo">
                  <GitHubIcon />
                </div>
                <div className="soc-name">
                  <button className="soc-btn" onClick={github}>
                    GITHUB
                  </button>
                </div>
              </div>
              <div className="getInTouch">
                <div className="soc-logo">
                  <LinkedInIcon />
                </div>
                <div className="soc-name">
                  <button className="soc-btn" onClick={linkedin}>
                    LINKEDIN
                  </button>
                </div>
              </div>
              <div className="getInTouch">
                <div className="soc-logo">
                  <TwitterIcon />
                </div>
                <div className="soc-name">
                  <button className="soc-btn" onClick={twitter}>
                    TWITTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactResp" style={{ height: respHeight }}>
        <div className="contact-cont">
          <div className="cont-left">
            <h4 className="h4">
              NEED A FULL STACK DEVELOPER? LET'S BUILD SOMETHING.
            </h4>
            <button className="cont-btn" onClick={openForm}>
              <span>GET IN TOUCH</span>
            </button>
            {showForm && <Form closeForm={closeForm} />}
          </div>
          <div className="cont-right">
            <div className="social">
              <div className="getInTouch">
                <div className="soc-logo">
                  <EmailRoundedIcon />
                </div>
                <div className="soc-name">
                  <a href={`mailto:${emailAddress}`}>
                    <button className="soc-btn">Email</button>
                  </a>
                </div>
              </div>
              <div className="getInTouch">
                <div className="soc-logo">
                  <GitHubIcon />
                </div>
                <div className="soc-name">
                  <button className="soc-btn" onClick={github}>
                    GITHUB
                  </button>
                </div>
              </div>
              <div className="getInTouch">
                <div className="soc-logo">
                  <LinkedInIcon />
                </div>
                <div className="soc-name">
                  <button className="soc-btn" onClick={linkedin}>
                    LINKEDIN
                  </button>
                </div>
              </div>
              <div className="getInTouch">
                <div className="soc-logo">
                  <TwitterIcon />
                </div>
                <div className="soc-name">
                  <button className="soc-btn" onClick={twitter}>
                    TWITTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

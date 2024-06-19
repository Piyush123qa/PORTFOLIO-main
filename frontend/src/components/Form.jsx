import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [inputs, setInputs] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        fName: inputs.fName,
        lName: inputs.lName,
        email: inputs.email,
        phone: inputs.phone,
        subject: inputs.subject,
        message: inputs.message,
      };
      const response = await fetch(
        "https://server-portfolio-rn5j.onrender.com/addMessage",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        alert(
          "Thankyou for contacting, i will get in touch with you shortly :')"
        );
        // eslint-disable-next-line
        const responseData = await response.json(); // Parse the response body as JSON
        setInputs({
          fName: "",
          lName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.log(
          "Failed to add send message Server returned:",
          response.status,
          response.statusText
        );
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //For Nodemailer
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://server-portfolio-rn5j.onrender.com/addMessage",
        inputs,
        { rejectUnauthorized: false }
      );
      setInputs({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className="div" style={{ display: "flex", width: "180%" }}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="names">
          <input
            name="fName"
            onChange={handleChange}
            value={inputs.fName}
            type="text"
            required
            placeholder="FIRST NAME*"
          />
          <input
            name="lName"
            onChange={handleChange}
            value={inputs.lName}
            type="text"
            placeholder="LAST NAME*"
            required
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div className="mail">
          <input
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type="text"
            required
            placeholder="EMAIL*"
          />
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={inputs.phone}
            placeholder="PHONE*"
            required
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div className="info">
          <input
            name="subject"
            onChange={handleChange}
            value={inputs.subject}
            type="text"
            required
            placeholder="SUBJECT*"
          />
          <textarea
            name="message"
            onChange={handleChange}
            value={inputs.message}
            placeholder="MESSAGE*"
            required
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="btns">
          <button className="form-btn close" onClick={props.closeForm}>
            CLOSE
          </button>
          <button className="form-btn send" type="submit" onClick={submitForm}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

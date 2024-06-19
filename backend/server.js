const express = require("express");
const cors = require("cors");
require("dotenv").config();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const pool = require("./database");

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "devilyashraj00@gmail.com",
    pass: "lfvj zqia etvw lsli",
  },
});

app.post("/addMessage", (req, res) => {
  const { name, email, mobile, message } = req.body;

  const mailOptions = {
    from: "devilyashraj00@gmail.com",
    to: "yashrajsingh282@gmail.com",
    subject: `Yash You Have A New Query From ${fName}`,
    text: `Name: ${
      (fName, lName)
    }\nEmail: ${email}\nMobile: ${phone}\nSubject:${subject}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error occurred, message not sent.");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Message sent successfully!");
    }
  });
});

app.get("/", (req, res) => {
  res.send("Server up and running..!");
  console.log("server is running");
});

app.post("/addMessage", async (req, res) => {
  try {
    const { fName, lName, email, phone, subject, message } = req.body;
    const result = await pool.query(
      "INSERT INTO formdata (fName, lName, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *",
      [fName, lName, email, phone, subject, message]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

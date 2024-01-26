const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const EmailTemplate = require("../EmailTemplate/emailTemplate");
// const nodemailer = require("../routes/mailer.routes");

let transporter = nodemailer.createTransport({
  service: "gmail",

  //   secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME, // Your email username
    pass: process.env.EMAIL_PASSWORD, // Your email password
  },
});

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
router.post("/send", async (req, res, next) => {
  console.log("fuck");
  try {
    const { betreff, text, email, name } = req.body;
    if (!betreff || !text || !email || !name) {
      return res.status(400).json({ error: "Missing requirement" });
    }
    const fullmessage = `${text}\n\nSent by ${email}`;

    const htmlMessage = `
      <p>${text.split("\n").join("<br>")}</p> 
      <br>
      <p>Sent by: ${email}</p>
    `;
    console.log("1");
    console.log(betreff, text, email, name);
    const mailOptions = {
      to: process.env.EMAIL_USERNAME,
      subject: betreff,
      name: name,
      html: EmailTemplate({
        name,
        text,
        email,
      }),
    };
    console.log("2");
    // console.log(mailOptions);
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    console.log("3333", res);
    res.status(200).json({ message: "email sent succesfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

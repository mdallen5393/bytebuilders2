const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure email transport using default SMTP transport and a gmail account
// For gmail, enable "less secure app" in your account or use an application
// specific password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "itsmatthewallen1@gmail.com",
    pass: "Matt@3468749!",
  },
});

exports.sendContactEmail = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: data.email,
    to: "itsmatthewallen1@gmail.com",
    subject: "Contact Form Message",
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return {success: false, error: error.toString()};
    }
    return {success: true, info: info.response};
  });
});

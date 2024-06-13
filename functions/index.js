const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure email transport using default SMTP transport and a gmail account
// For gmail, enable "less secure app" in your account or use an application
// specific password
// update this to use the desired email account later; make a new app password for that account
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "itsmatthewallen1@gmail.com",
    pass: "acjf zmri bkut dszb",
  },
});

exports.sendContactEmail = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: data.email,
    to: "itsmatthewallen1@gmail.com",
    subject: `Contact form submission from ${data.name} (${data.email})`,
    text: data.message,
  };

  // return transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return {success: false, error: error.toString()};
  //   }
  //   return {success: true, info: info.response};
  // });
  return transporter.sendMail(mailOptions)
      .then(() => {
        return {success: true};
      })
      .catch((error) => {
        return {success: false, error: error.toString()};
      });
});

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from .env file for local development
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve(__dirname, ".env") });
}

// Access environment variables
const email = process.env.GMAIL_ADDRESS || functions.config().email.address;
const password = process.env.GMAIL_APP_PASSWORD || functions.config().email.password;

if (!email || !password) {
  throw new Error("Missing email or password environment variables.");
}

console.log("Email: ", email);
console.log("Password: ", password ? "Loaded" : "Not Loaded");

// Configure email transport using default SMTP transport and a Gmail account
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

exports.sendContactEmail = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: data.email,
    to: email,
    subject: `Contact form submission from ${data.name} (${data.email})`,
    text: data.message,
  };

  return transporter.sendMail(mailOptions)
      .then(() => {
        return { success: true };
      })
      .catch((error) => {
        return { success: false, error: error.toString() };
      });
});

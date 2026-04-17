// controllers/mail.Controller.js
import { createTransporter } from "../config/mail.Config.js";

export const sendMail = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const transporter = createTransporter(); // ✅ created at request time, env vars are loaded by now

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully 🚀",
    });

  } catch (error) {
    next(error);
  }
};
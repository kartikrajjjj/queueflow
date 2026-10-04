import nodemailer from "nodemailer";

export const sendMail = async (email, subject, template) => {
  try {
    const config = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    const options = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: subject,
      html: template,
    };

    await config.sendMail(options);
    return true;
  } catch (err) {
    console.log("MAIL ERROR:", err);
    return false;
  }
};

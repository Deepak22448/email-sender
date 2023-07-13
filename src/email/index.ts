import { Request, Response } from "express";
import nodemailer from "nodemailer";

interface SendMailBody {
  to: string;
  subject: string;
  text: string;
}

/**
 * This method sends the email to specified user
 * @param req express Request
 * @param res express Response
 * @returns weather the email was sent to the specified user successfully or not.
 */

const sendMail = async (
  req: Request,
  res: Response
): Promise<Response<{ status: string; message: string }>> => {
  const { to, subject, text } = req.body as SendMailBody;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.USER_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN,
    },
  });

  const mailOptions = {
    from: process.env.USER_EMAIL,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      status: "successful",
      message: "Email sent",
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "failed",
      message: error?.message,
    });
  }
};

export { sendMail };

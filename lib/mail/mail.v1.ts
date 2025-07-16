import nodemailer from "nodemailer";
import { sender, subject, emailBody } from "@/lib/mail/mail.template";

class MailV1 {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FREELANCER_EMAIL,
        pass: process.env.MAIL_SECRET,
      },
    });
  }

  public async send(client_name: string, client_mail: string) {
    try {
      const info = await this.transporter.sendMail({
        from: `"Yogesh" <${sender}>`,
        to: client_mail,
        subject: subject,
        html: emailBody(client_name),
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      return info;
    } catch (error) {
      console.error("Failed to send mail:", error);
      throw error;
    }
  }
}

export const mailV1 = new MailV1();

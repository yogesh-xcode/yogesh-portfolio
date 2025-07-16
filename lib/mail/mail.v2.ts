import { Resend } from "resend";
import { sender, subject, emailBody } from "@/lib/mail/mail.template";

class MailV2 {
  private resend = new Resend(process.env.RESEND_API_KEY!);

  public async send(name: string, email: string) {
    try {
      const result = await this.resend.emails.send({
        from: sender,
        to: email,
        subject: subject,
        html: emailBody(name),
      });

      console.log("Email sent successfully:", result);
      return result;
    } catch (error) {
      console.error("Failed to send email:", error);
      throw error;
    }
  }
}

export const mailV2 = new MailV2();

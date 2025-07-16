import { mailV1 } from "@/lib/mail/mail.v1";
import { mailV2 } from "@/lib/mail/mail.v2";

export async function sendMail(name: string, email: string) {
  const provider = process.env.MAIL_PROVIDER;

  if (provider === "resend") {
    return mailV2.send(name, email);
  } else if (provider === "nodemailer") {
    return mailV1.send(name, email);
  } else {
    throw new Error("MAIL_PROVIDER must be set to 'resend' or 'nodemailer'");
  }
}

import sgMail from "@sendgrid/mail";

export const sendEmail = async (to: any, subject: any, text: any) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg = {
    to: "ciaffardini.g@gmail.com",
    from: "lorenzodelsordo1994@gmail.com",
    subject: "SendGrid test",
    text: "This is a test email from SendGrid",
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};

import { ContactFormData } from "@/lib/zod";
import sgMail from "@sendgrid/mail";

export async function POST(request: Request) {
  const body = (await request.json()) as ContactFormData;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg = {
    to: body.email,
    from: "info@casahermes.it",
    subject: "Richiesta di contatto - Sito Web",
    html: `
    <p>Email: <b>${body.email}</b></p>
    <p>Nome: <b>${body.nomeCognome}</b></p>
    <p>Telefono: <b>${body.telefono}</b></p>
    <p>Data Checkin: <b>${body.checkin}</b></p>
    <p>Data Checkout: <b>${body.checkout}</b></p>
    `,
  };

  try {
    const res = await sgMail.send(msg);
    console.log(`Email sent`, res);
  } catch (error) {
    console.error(error);
  }
  return Response.json(body);
}

import { mailjet } from "@/lib/mailjet";
import { ContactFormSchema } from "@/lib/zod";
import { format } from "date-fns";

export async function POST(request: Request) {
  const body = await request.json();

  const result = ContactFormSchema.safeParse({
    ...body,
    checkin: new Date(body.checkin ?? Date.now()),
    checkout: new Date(body.checkout ?? Date.now()),
  });

  if (!result.success) {
    return Response.json({
      success: false,
      errors: result.error.flatten(),
    });
  }

  const { nomeCognome, email, telefono, checkin, checkout, messaggio } =
    result.data;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "website@casahermes.it",
            Name: "Sito Web - Casa Hermes",
          },
          To: [{ Email: "ciaffardini.g@gmail.com" }],
          Subject: "Richiesta di contatto - Sito Casa Hermes",
          HTMLPart: `
            <h2>Nuova richiesta di contatto</h2>
            <br />
            <p><strong>Nome e Cognome:</strong> ${nomeCognome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefono:</strong> ${telefono}</p>
            <br />
            <p><strong>Check-in:</strong> ${format(checkin, "dd/MM/yyyy")}</p>
            <p><strong>Check-out:</strong> ${format(checkout, "dd/MM/yyyy")}</p>
            <br />
            <p><strong>Messaggio:</strong></p>
            <p>${messaggio}</p>
          `,
        },
      ],
    });
    return Response.json({ success: true, errors: [] });
  } catch (err: any) {
    return Response.json({ success: false, errors: err?.message });
  }
}

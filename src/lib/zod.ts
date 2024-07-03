import { z } from "zod";

export const ContactFormSchema = z.object({
  nomeCognome: z.string(),
  email: z.string().email(),
  telefono: z.string(),
  checkin: z.date(),
  checkout: z.date(),
  messaggio: z.string(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

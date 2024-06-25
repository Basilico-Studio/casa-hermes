import { z } from "zod";

export const formSchema = z.object({
  nomeCognome: z.string(),
  email: z.string().email(),
  telefono: z.string(),
  checkin: z.date(),
  checkout: z.date(),
});

export type ContactFormData = z.infer<typeof formSchema>;

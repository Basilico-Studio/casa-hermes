import { z } from "zod";

export const formSchema = z.object({
  firstAndLastName: z.string(),
  peopleNumber: z.number().min(1, "Required"),
  email: z.string().email(),
  phone: z.string(),
  checkInDate: z.string(),
  checkOutDate: z.string(),
});

export type ContactFormData = z.infer<typeof formSchema>;

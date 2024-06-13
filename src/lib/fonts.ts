import { Italiana, Roboto } from "next/font/google";

export const primaryFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});
export const secondaryFont = Italiana({
  subsets: ["latin"],
  weight: ["400", "400"],
});

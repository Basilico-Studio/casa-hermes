import type { Metadata } from "next";
import { primaryFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Hermes",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}

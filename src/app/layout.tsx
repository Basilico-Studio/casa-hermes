import "./globals.css";
import type { Metadata } from "next";
import { primaryFont } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={primaryFont.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

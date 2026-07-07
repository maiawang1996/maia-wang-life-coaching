import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maia Wang | Life Coaching",
  description:
    "Bilingual life coaching for thoughtful, ambitious people navigating transition, clarity, and self-discovery."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}

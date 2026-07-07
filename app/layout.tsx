import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maia Wang | Life Coaching",
  description:
    "Bilingual life coaching with Maia Wang for clarity, self-discovery, and a life that feels true to you."
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

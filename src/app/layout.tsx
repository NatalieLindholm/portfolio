import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";

const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Natalie Lindholm",
  description: "Portfolio made by Natalie Lindholm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${itim.className} antialiased`}>{children}</body>
    </html>
  );
}

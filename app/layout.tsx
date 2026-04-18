import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova.Dev - Fullstack Portfolio",
  description:
    "A high-performance technical portfolio for a Fullstack Web Developer, featuring modern design and interactive showcases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

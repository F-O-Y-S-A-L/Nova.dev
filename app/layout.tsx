import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foysal-devs - Fullstack Portfolio",
  description:
    "A high-performance technical portfolio for a Fullstack Web Developer, featuring modern design and interactive showcases.",
  icons: {
    icon: "/coding-web-development-svgrepo-com.svg",
  },
  openGraph: {
    title: "Foysal-devs - Fullstack Portfolio",
    description:
      "A high-performance technical portfolio for a Fullstack Web Developer, featuring modern design and interactive showcases.",
    url: "https://foysal-devs.vercel.app/",
    siteName: "Foysal-devs",
    images: [
      {
        url: "/title.jpeg",
        width: 1200,
        height: 630,
        alt: "Foysal-devs Title Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foysal-devs - Fullstack Portfolio",
    description:
      "A high-performance technical portfolio for a Fullstack Web Developer, featuring modern design and interactive showcases.",
    images: ["/title.jpg"],
  },
}

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

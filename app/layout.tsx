import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathaniel Bauer CS Portfolio",
  description: "A personal portfolio website to showcase my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project 77 Days",
  description: "O app que te ajuda a chegar no seu objetivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container flex min-h-screen flex-col items-center justify-between`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Udit Narayan | Full Stack & Frontend Developer",
  description:
    "Passionate Full Stack Developer specializing in Next.js, React, TypeScript, Laravel, PostgreSQL and modern web applications.",

  icons: {
    icon: "/favicon.png",
  },

  authors: [{ name: "Udit Narayan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>

      <body className="min-h-full flex flex-col">

        {children}

      </body>
    </html>
  );
}

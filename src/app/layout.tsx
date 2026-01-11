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
  title: {
    default: "Digital Business Institute (DBI) | Rwanda ICT Chamber",
    template: "%s | Digital Business Institute (DBI)",
  },
  description:
    "Accelerating the digitalization of Rwandan businesses, expanding digital exports, and increasing global competitiveness as part of the Rwanda ICT Chamber.",
  keywords: [
    "DBI",
    "Digital Business Institute",
    "Rwanda ICT",
    "ICT Chamber",
    "Digitalization",
    "ICT Certification",
    "Rwanda Digital Experts",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Paytone_One, Lexend } from "next/font/google";
import ThemeProvider from "./providers";
import "./globals.css";

const payton = Paytone_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-payton",
});
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Cooky",
  description:
    "Next.js Recipe Management Project - Frontend Trial This repository contains code for a trial project exploring recipe management functionalities built using the Next.js framework. This project focuses on the frontend aspects of adding, viewing, and managing recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`${lexend.variable} ${payton.variable} h-full min-w-[375px] dark:bg-dark-0`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

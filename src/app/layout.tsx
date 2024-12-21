import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes"
import {ClerkProvider} from "@clerk/nextjs"

export const metadata: Metadata = {
  title: {
    template:"%s - Ai resume builder",
    absolute:"Ai resume builder"
  },
  description: "created by ayaan mehdi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider attribute={"class"}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

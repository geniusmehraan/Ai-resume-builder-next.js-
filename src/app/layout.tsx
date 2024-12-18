import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {ClerkProvider} from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Ai resume builder",
  description: "created by ayaan mehdi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

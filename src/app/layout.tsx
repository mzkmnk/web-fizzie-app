import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/providers/theme-provider";

const font = DM_Sans({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Automate your business with Fuzzie",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
    <body
      className={`${font.className} antialiased`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}

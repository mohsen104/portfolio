import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/Shared/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "portfolio mohsen karimvand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        {children}
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}

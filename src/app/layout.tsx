import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Mohsen Karimvand | محسن کریم وند",
  description: "Portfolio Mohsen Karimvand",
  keywords: ["Mohsen Karimvand", "محسن کریم وند"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${jetBrainsMono.variable} bg-white text-black overflow-x-hidden antialiased w-screen`}>
        {children}
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}

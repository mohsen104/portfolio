import type { Metadata } from "next";
import localFont from "next/font/local";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jetBrainsMono = localFont({
  src: "../../public/fonts/JetBrainsMono/JetBrainsMono[wght].woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 800",
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
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} bg-white text-black overflow-x-hidden antialiased`}>
        {children}
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

// Using system fonts to avoid Turbopack internal font resolution issues

export const metadata: Metadata = {
  title: "StockLens",
  description: "Track real-time stock prices, get personalized alerts and explore detailed company insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
